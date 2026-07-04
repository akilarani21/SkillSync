/**
 * Profile page — static UI shell for Phase 1.
 * Real user data will be fetched via the API once auth exists.
 */
const MOCK_USER = {
  name: 'Jane Doe',
  bio: 'Frontend developer learning graphic design. Happy to trade React knowledge for design fundamentals.',
  location: 'Remote',
  skillsOffered: ['React.js', 'JavaScript', 'Tailwind CSS'],
  skillsWanted: ['Photoshop', 'UI Design', 'Figma'],
};

const SkillBadge = ({ label, tone }) => (
  <span
    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
      tone === 'offered' ? 'bg-primary-100 text-primary-700' : 'bg-amber-100 text-amber-700'
    }`}
  >
    {label}
  </span>
);

const Profile = () => {
  return (
    <div className="section-container py-12">
      <div className="mx-auto max-w-3xl">
        {/* Profile header */}
        <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
            <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-2xl font-bold text-primary-700">
              {MOCK_USER.name.charAt(0)}
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gray-900">{MOCK_USER.name}</h1>
              <p className="mt-1 text-sm text-gray-500">{MOCK_USER.location}</p>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-gray-600">
                {MOCK_USER.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Skills sections */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
              Skills Offered
            </h2>
            <div className="flex flex-wrap gap-2">
              {MOCK_USER.skillsOffered.map((skill) => (
                <SkillBadge key={skill} label={skill} tone="offered" />
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
              Skills Wanted
            </h2>
            <div className="flex flex-wrap gap-2">
              {MOCK_USER.skillsWanted.map((skill) => (
                <SkillBadge key={skill} label={skill} tone="wanted" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;