export default function About() {
  return (
    <div>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">About Elite Cricket Academy</h1>
          <p className="text-lg mt-4">Building champions since 2010</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Elite Cricket Academy was founded with a vision to develop young cricket talents and provide them with world-class training facilities and coaching. Over the past 16 years, we have successfully trained hundreds of players who have gone on to play at state, national, and international levels.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12">Our Mission</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            To nurture and develop young cricket talents into skilled, disciplined, and confident players who can represent their regions and nation with pride.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12">Our Values</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3"><span className="text-primary font-bold">✓</span> Excellence in coaching and training</li>
            <li className="flex gap-3"><span className="text-primary font-bold">✓</span> Integrity and sportsmanship</li>
            <li className="flex gap-3"><span className="text-primary font-bold">✓</span> Player development and career growth</li>
            <li className="flex gap-3"><span className="text-primary font-bold">✓</span> Community engagement and social responsibility</li>
          </ul>

          <h2 className="text-3xl font-bold mb-6 mt-12">Facilities</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="space-y-3 text-gray-700">
              <li>🏟️ Professional cricket grounds with international pitch standards</li>
              <li>🏋️ Modern fitness and conditioning center</li>
              <li>📹 Video analysis and performance tracking lab</li>
              <li>🏠 Hostel facilities for outstation players</li>
              <li>🍽️ Nutritionist-guided meal plans</li>
              <li>🏥 Medical and physio support</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mb-6 mt-12">Awards & Recognition</h2>
          <div className="bg-blue-50 p-6 rounded-lg">
            <ul className="space-y-2 text-gray-700">
              <li>• Best Cricket Academy Award (2024)</li>
              <li>• Produced 15+ State-level cricketers</li>
              <li>• 3 National team players alumni</li>
              <li>• Sports Excellence Certificate (Government)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
