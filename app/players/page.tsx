export default function Players() {
  const players = [
    { id: 1, name: 'Arjun Singh', team: 'Elite U-19', position: 'Batsman', runs: 1250, wickets: 0 },
    { id: 2, name: 'Rohit Patel', team: 'Elite U-19', position: 'All-rounder', runs: 890, wickets: 18 },
    { id: 3, name: 'Virat Kumar', team: 'Elite U-19', position: 'Bowler', runs: 120, wickets: 32 },
    { id: 4, name: 'Priya Sharma', team: 'Elite U-16', position: 'Batsman', runs: 750, wickets: 0 },
    { id: 5, name: 'Aman Verma', team: 'Elite U-16', position: 'All-rounder', runs: 620, wickets: 14 },
    { id: 6, name: 'Sanjay Das', team: 'Senior Stars', position: 'Batsman', runs: 2100, wickets: 0 },
  ];

  return (
    <div>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Our Players</h1>
          <p className="text-lg mt-4">Elite talent developed at our academy</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {players.map((player) => (
              <div key={player.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="bg-gradient-to-r from-primary to-blue-700 text-white p-6 text-center">
                  <div className="text-4xl mb-2">🏏</div>
                  <h3 className="text-2xl font-bold">{player.name}</h3>
                  <p className="text-sm mt-2">{player.team}</p>
                </div>
                <div className="p-6">
                  <div className="mb-4 text-center">
                    <span className="inline-block bg-secondary text-white px-4 py-2 rounded-full text-sm font-bold">
                      {player.position}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-gray-600 text-sm">Runs</p>
                      <p className="text-2xl font-bold text-primary">{player.runs}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Wickets</p>
                      <p className="text-2xl font-bold text-secondary">{player.wickets}</p>
                    </div>
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
