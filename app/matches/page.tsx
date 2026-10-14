export default function Matches() {
  const matches = [
    { id: 1, team1: 'Elite U-19', team2: 'City Warriors', date: '2026-10-15', result: 'Won', runs: '156/8' },
    { id: 2, team1: 'Elite U-16', team2: 'Metro Knights', date: '2026-10-10', result: 'Won', runs: '142/7' },
    { id: 3, team1: 'Senior Stars', team2: 'National XI', date: '2026-10-08', result: 'Lost', runs: '128/10' },
    { id: 4, team1: 'Elite U-19', team2: 'Valley Team', date: '2026-10-01', result: 'Won', runs: '167/5' },
    { id: 5, team1: 'Elite U-14', team2: 'Young Guns', date: '2026-09-28', result: 'Won', runs: '134/6' },
    { id: 6, team1: 'Emerging Talents', team2: 'Future Stars', date: '2026-09-25', result: 'Lost', runs: '105/10' },
  ];

  return (
    <div>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Matches</h1>
          <p className="text-lg mt-4">Latest match results and upcoming fixtures</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-4 max-w-2xl mx-auto">
            {matches.map((match) => (
              <div key={match.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition border-l-4 border-secondary">
                <div className="flex justify-between items-center gap-4">
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 mb-2">📅 {match.date}</p>
                    <h3 className="text-lg font-bold text-primary">{match.team1}</h3>
                  </div>
                  <div className="text-center px-4">
                    <p className="text-2xl font-bold text-gray-400">VS</p>
                  </div>
                  <div className="flex-1 text-right">
                    <h3 className="text-lg font-bold text-primary">{match.team2}</h3>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t-2 border-gray-200 flex justify-between items-center">
                  <div>
                    <span className={`inline-block px-4 py-2 rounded-full text-white font-bold text-sm ${match.result === 'Won' ? 'bg-green-500' : 'bg-red-500'}`}>
                      {match.result}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">{match.runs}</p>
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
