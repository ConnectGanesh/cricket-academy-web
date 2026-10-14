export default function Achievements() {
  const achievements = [
    { id: 1, year: 2026, title: 'National Championship Winners', description: 'U-19 team won the national tournament', category: 'Tournament' },
    { id: 2, year: 2025, title: 'Regional T20 Runners-up', description: 'U-16 team reached final in state tournament', category: 'Tournament' },
    { id: 3, year: 2025, title: '5 Players Selected in State Team', description: 'Academy players picked for state representation', category: 'Selection' },
    { id: 4, year: 2024, title: 'Best Cricket Academy Award', description: 'Recognized by State Sports Authority', category: 'Award' },
    { id: 5, year: 2024, title: 'ODI Player Produced', description: 'One alumni selected for national ODI team', category: 'International' },
    { id: 6, year: 2023, title: 'Inter-Academy Championship', description: 'Won championship against 15 academies', category: 'Tournament' },
  ];

  return (
    <div>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Achievements</h1>
          <p className="text-lg mt-4">Our pride and milestones</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-6 max-w-3xl mx-auto">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition border-l-4 border-secondary">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="flex gap-2 mb-2">
                      <span className="text-sm font-bold text-white bg-secondary px-3 py-1 rounded-full">
                        {achievement.year}
                      </span>
                      <span className="text-sm font-bold text-white bg-primary px-3 py-1 rounded-full">
                        {achievement.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">🏆 {achievement.title}</h3>
                    <p className="text-gray-700">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
