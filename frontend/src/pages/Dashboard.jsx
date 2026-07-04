import { useEffect, useState } from 'react';
import api from '../api/axios.js';
import Loader from '../components/Loader.jsx';

const STATS = [
  { label: 'Active Swaps', value: '0' },
  { label: 'Skills Offered', value: '0' },
  { label: 'Skills Wanted', value: '0' },
  { label: 'Matches Found', value: '0' },
];

/**
 * Dashboard page. Demonstrates the frontend <-> backend connection
 * by calling GET /api/health on mount.
 */
const Dashboard = () => {
  const [apiStatus, setApiStatus] = useState(null); // null | 'online' | 'offline'
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const checkApiHealth = async () => {
      try {
        await api.get('/health');
        if (isMounted) setApiStatus('online');
      } catch (error) {
        if (isMounted) setApiStatus('offline');
      } finally {
        if (isMounted) setChecking(false);
      }
    };

    checkApiHealth();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="section-container py-12">
      <div className="mb-8 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">Overview of your SkillSync activity.</p>
        </div>

        {/* Backend connectivity indicator */}
        <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm">
          {checking ? (
            <>
              <Loader size="sm" />
              <span className="text-gray-500">Checking backend…</span>
            </>
          ) : (
            <>
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  apiStatus === 'online' ? 'bg-green-500' : 'bg-red-500'
                }`}
              />
              <span className="text-gray-600">
                Backend API: {apiStatus === 'online' ? 'Connected' : 'Not reachable'}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm"
          >
            <p className="text-3xl font-bold text-primary-600">{stat.value}</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Empty state */}
      <div className="mt-8 rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-12 text-center">
        <p className="text-sm text-gray-500">
          No swaps yet. Once authentication and matching are implemented, your active
          skill exchanges will appear here.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;