export default function Gallery() {
  const galleryItems = [
    { id: 1, title: 'Team Training Session', category: 'Training', image: '🏋️' },
    { id: 2, title: 'Championship Celebration', category: 'Events', image: '🎉' },
    { id: 3, title: 'Player Practice', category: 'Practice', image: '🏏' },
    { id: 4, title: 'Ground Maintenance', category: 'Facilities', image: '🏟️' },
    { id: 5, title: 'Awards Ceremony', category: 'Events', image: '🏆' },
    { id: 6, title: 'Team Group Photo', category: 'Team', image: '📷' },
    { id: 7, title: 'Fitness Training', category: 'Training', image: '💪' },
    { id: 8, title: 'Match in Progress', category: 'Matches', image: '⚾' },
    { id: 9, title: 'Coaching Session', category: 'Coaching', image: '👨‍🏫' },
  ];

  return (
    <div>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <p className="text-lg mt-4">Moments from our academy</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div key={item.id} className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="bg-gradient-to-br from-primary to-blue-700 h-48 flex items-center justify-center text-6xl group-hover:scale-110 transition transform">
                  {item.image}
                </div>
                <div className="p-6">
                  <span className="inline-block bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
