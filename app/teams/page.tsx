export default function Teams() {
  const teams = [
    { id: 1, name: 'Elite U-19', coach: 'Rajesh Kumar', players: 18, wins: 22 },
    { id: 2, name: 'Elite U-16', coach: 'Priya Singh', players: 15, wins: 18 },
    { id: 3, name: 'Elite U-14', coach: 'Arjun Verma', players: 14, wins: 12 },
    { id: 4, name: 'Senior Stars', coach: 'Vikram Patel', players: 17, wins: 20 },
    { id: 5, name: 'Emerging Talents', coach: 'Sneha Sharma', players: 16, wins: 10 },
  ];

  return (
    <div>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Our Teams</h1>
          <p className="text-lg mt-4">Meet our competitive squads</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teams.map((team) => (
              <div key={team.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition border-l-4 border-secondary">
                <div className="bg-gradient-to-r from-primary to-blue-700 text-white p-6">
                  <h3 className="text-2xl font-bold">{team.name}</h3>
                  <p className="text-sm mt-2">Coach: <span className="font-semibold">{team.coach}</span></p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600 text-sm">Players</p>
                      <p className="text-3xl font-bold text-primary">{team.players}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Wins</p>
                      <p className="text-3xl font-bold text-secondary">{team.wins}</p>
                    </div>
                  </div>
                  <button className="w-full mt-6 bg-primary text-white hover:bg-blue-700 py-2 rounded-lg transition font-semibold">
                    View Team Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
