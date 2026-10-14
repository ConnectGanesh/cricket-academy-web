export default function Tournaments() {
  const tournaments = [
    { id: 1, name: 'National Cricket Championship', year: 2026, participated: true, position: 'Winners', description: 'Won the U-19 national championship' },
    { id: 2, name: 'State Inter-Academy T20', year: 2025, participated: true, position: 'Runners-up', description: 'Runners-up in state tournament' },
    { id: 3, name: 'Regional Cricket League', year: 2025, participated: true, position: '2nd Place', description: 'Strong performance in regional league' },
    { id: 4, name: 'International U-19 Cup', year: 2025, participated: true, position: 'Quarter-finals', description: 'Participated in international tournament' },
    { id: 5, name: 'Academy Championship', year: 2024, participated: true, position: 'Winners', description: 'Won inter-academy championship' },
    { id: 6, name: 'Youth Cricket Festival', year: 2024, participated: true, position: 'Top 4', description: 'Made it to top 4 teams' },
  ];

  return (
    <div>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Tournaments</h1>
          <p className="text-lg mt-4">Tournaments we participate in and have won</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tournaments.map((tournament) => (
              <div key={tournament.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition border-t-4 border-secondary">
                <div className="bg-gradient-to-r from-primary to-blue-700 text-white p-6">
                  <h3 className="text-xl font-bold">{tournament.name}</h3>
                  <p className="text-sm mt-2">Year: {tournament.year}</p>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-white text-sm font-bold ${
                      tournament.position === 'Winners' ? 'bg-green-500' : 'bg-blue-500'
                    }`}>
                      {tournament.position}
                    </span>
                  </div>
                  <p className="text-gray-700">{tournament.description}</p>
                  {tournament.participated && (
                    <div className="mt-4 flex items-center gap-2 text-sm text-green-600 font-semibold">
                      ✓ Participated
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
