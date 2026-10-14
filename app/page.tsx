import Link from 'next/link';

export default function Home() {
  const stats = [
    { label: 'Teams', value: '5' },
    { label: 'Players', value: '125' },
    { label: 'Matches Played', value: '48' },
    { label: 'Tournaments Won', value: '12' },
  ];

  const features = [
    {
      title: 'World-Class Coaching',
      description: 'Learn from experienced international cricket coaches',
      icon: '👨‍🏫',
    },
    {
      title: 'State-of-the-Art Facilities',
      description: 'Train at premier grounds with professional equipment',
      icon: '🏟️',
    },
    {
      title: 'Competitive Tournaments',
      description: 'Participate in regular inter-academy and national tournaments',
      icon: '🏆',
    },
    {
      title: 'Player Development',
      description: 'Structured programs for skill development and career guidance',
      icon: '📈',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Elite Cricket Academy</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Developing tomorrow's cricket champions through world-class coaching and training
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/teams" className="bg-secondary hover:bg-orange-600 px-8 py-3 rounded-lg font-bold transition">
              Explore Teams
            </Link>
            <Link href="/contact" className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition text-center border-t-4 border-secondary">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Achievements Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Recent Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { year: 2026, title: 'National Championship Winners', category: 'U-19' },
              { year: 2025, title: 'Regional T20 Runners-up', category: 'U-16' },
              { year: 2025, title: '5 Players in State Team', category: 'Selection' },
            ].map((achievement, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-sm font-bold text-secondary mb-2">{achievement.year}</div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.category}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/achievements" className="text-primary hover:text-blue-700 font-bold inline-flex items-center gap-2">
              View All Achievements →
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Cricket Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join Elite Cricket Academy and unleash your potential</p>
          <Link href="/contact" className="bg-secondary hover:bg-orange-600 px-8 py-3 rounded-lg font-bold text-white inline-block transition">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
