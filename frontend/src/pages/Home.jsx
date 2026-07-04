import { Link } from 'react-router-dom';
import Button from '../components/Button.jsx';

const FEATURES = [
  {
    title: 'Zero Cost Learning',
    description: 'No subscriptions, no fees. Exchange your expertise directly for someone else\'s.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V6m0 10v2m9-8a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Verified Skill Matching',
    description: 'Our system matches what you can teach with what you want to learn — automatically.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Real-Time Chat',
    description: 'Coordinate sessions and swap notes instantly with built-in messaging.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: 'Grow a Real Portfolio',
    description: 'Track every skill you\'ve taught and learned, building a track record over time.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

const STEPS = [
  {
    number: '01',
    title: 'Create Your Profile',
    description: 'List the skills you can teach and the skills you want to learn.',
  },
  {
    number: '02',
    title: 'Get Matched',
    description: 'We surface people whose "offered" skills match your "wanted" skills, and vice versa.',
  },
  {
    number: '03',
    title: 'Propose a Swap',
    description: 'Message a match and agree on the exchange — e.g. "I\'ll teach Java if you teach Photoshop."',
  },
  {
    number: '04',
    title: 'Learn & Teach',
    description: 'Hold your sessions, track progress, and grow your skill portfolio.',
  },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white">
        <div className="section-container flex flex-col items-center py-20 text-center sm:py-28">
          <span className="mb-5 inline-flex items-center rounded-full bg-primary-100 px-4 py-1.5 text-xs font-semibold text-primary-700">
            Skill-for-skill exchange, no money involved
          </span>
          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Trade Skills,
            <span className="text-primary-600"> Not Money</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-500">
            "I'll teach Java if you teach Photoshop." SkillSync connects people who want to
            learn with people who want to teach — powered by direct skill exchange.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link to="/register">
              <Button variant="primary" className="px-8 py-3 text-base">
                Get Started Free
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="outline" className="px-8 py-3 text-base">
                Explore Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-container py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why SkillSync?</h2>
          <p className="mt-3 text-gray-500">
            Everything you need to swap knowledge with a community of learners and teachers.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-gray-100 p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-20">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">How It Works</h2>
            <p className="mt-3 text-gray-500">Four simple steps from sign-up to your first swap.</p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <div key={step.number} className="relative text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-600 text-lg font-bold text-white">
                  {step.number}
                </div>
                <h3 className="mb-2 text-base font-semibold text-gray-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="overflow-hidden rounded-3xl bg-primary-600 px-6 py-16 text-center sm:px-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to swap your first skill?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-100">
              Join a growing community trading knowledge instead of cash. It takes less than a minute to sign up.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/register">
                <Button
                  variant="primary"
                  className="bg-white px-8 py-3 text-base text-primary-700 hover:bg-primary-50"
                >
                  Create Free Account
                </Button>
              </Link>
              <Link to="/login">
                <Button
                  variant="outline"
                  className="border-white px-8 py-3 text-base text-white hover:bg-primary-500"
                >
                  I Already Have an Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;