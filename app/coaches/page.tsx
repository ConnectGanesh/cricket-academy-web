export default function Coaches() {
  const coaches = [
    { id: 1, name: 'Rajesh Kumar', specialization: 'Batting & Technique', experience: 20, qualification: 'Level 3 Coach, Former Cricketer' },
    { id: 2, name: 'Priya Singh', specialization: 'Bowling & Fitness', experience: 15, qualification: 'Level 2 Coach, Women Cricketer' },
    { id: 3, name: 'Arjun Verma', specialization: 'Fielding & Agility', experience: 12, qualification: 'Level 2 Coach, Fitness Expert' },
    { id: 4, name: 'Vikram Patel', specialization: 'Team Strategy', experience: 18, qualification: 'Level 3 Coach, Captaincy Experience' },
    { id: 5, name: 'Sneha Sharma', specialization: 'Youth Development', experience: 10, qualification: 'Level 1 Coach, Psychology Expert' },
  ];

  return (
    <div>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Our Coaches</h1>
          <p className="text-lg mt-4">Experienced professionals dedicated to your success</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coaches.map((coach) => (
              <div key={coach.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="bg-gradient-to-r from-primary to-blue-700 text-white p-6">
                  <div className="text-5xl mb-2 text-center">👨‍🏫</div>
                  <h3 className="text-2xl font-bold text-center">{coach.name}</h3>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block bg-secondary text-white px-3 py-1 rounded-full text-sm font-bold">
                      {coach.specialization}
                    </span>
                  </div>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div>
                      <p className="font-semibold text-gray-900">Experience:</p>
                      <p>{coach.experience} years in cricket coaching</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Qualification:</p>
                      <p>{coach.qualification}</p>
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
