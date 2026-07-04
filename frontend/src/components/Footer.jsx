import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="section-container grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-sm font-bold text-white">
              S
            </div>
            <span className="text-lg font-bold text-gray-900">SkillSync</span>
          </div>
          <p className="text-sm leading-relaxed text-gray-500">
            Trade what you know for what you want to learn. No money, just skills.
          </p>
        </div>

        {/* Platform */}
        <div>
          <h4 className="mb-3 text-sm font-semibold text-gray-900">Platform</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-primary-600">Home</Link></li>
            <li><Link to="/dashboard" className="hover:text-primary-600">Dashboard</Link></li>
            <li><Link to="/profile" className="hover:text-primary-600">Profile</Link></li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h4 className="mb-3 text-sm font-semibold text-gray-900">Account</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><Link to="/login" className="hover:text-primary-600">Log In</Link></li>
            <li><Link to="/register" className="hover:text-primary-600">Sign Up</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="mb-3 text-sm font-semibold text-gray-900">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><span className="cursor-not-allowed opacity-70">Privacy Policy</span></li>
            <li><span className="cursor-not-allowed opacity-70">Terms of Service</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 py-6">
        <p className="text-center text-xs text-gray-400">
          © {year} SkillSync. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;