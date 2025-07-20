
export default function InteriorDesignPortfolio() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-4 md:p-10 font-sans">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold mb-4">Best Interior & 3D Design Service in Bangladesh</h1>
        <p className="text-lg mb-6">Transforming Spaces with Precision & Style</p>
        <div className="flex justify-center gap-4">
          <button className="bg-green-600 text-white px-6 py-2 rounded-2xl shadow">Call Now</button>
          <button className="bg-gray-800 text-white px-6 py-2 rounded-2xl shadow">Get a Free Quote</button>
        </div>
      </section>

      <section className="py-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">Interior Design</h3>
            <p>Home, Office, Retail – Starting at ৳10,000/project</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">3D Rendering</h3>
            <p>Realistic visuals – ৳3,500/image</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">2D Floor Planning</h3>
            <p>Civil Drawing & Layouts – ৳2,000/unit</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">Site Supervision</h3>
            <p>Only in Dhaka – Custom quotes available</p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">Portfolio</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gray-200 h-48 rounded-xl"></div>
          <div className="bg-gray-200 h-48 rounded-xl"></div>
          <div className="bg-gray-200 h-48 rounded-xl"></div>
        </div>
      </section>

      <section className="py-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">Why Choose Me</h2>
        <p className="max-w-2xl mx-auto text-center">
          🎯 6+ Years Experience | Diploma in Civil Engineering<br/>
          🏗️ Worked at Parvez Construction Ltd.<br/>
          💡 Passionate about turning ideas into real, livable spaces.
        </p>
      </section>

      <section className="py-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">Client Reviews</h2>
        <div className="max-w-xl mx-auto">
          <blockquote className="italic text-center">"Outstanding design service! Very professional and on time."</blockquote>
        </div>
      </section>

      <section className="py-10 bg-gray-100 rounded-xl">
        <h2 className="text-2xl font-semibold mb-6 text-center">Contact</h2>
        <div className="text-center">
          <p>📞 Call/WhatsApp: +8801XXXXXXXXX</p>
          <p>📧 Email: yourname@gmail.com</p>
          <p>🌐 Facebook Page: [Link]</p>
          <p>🗺️ Based in Dhaka, serving clients across Bangladesh</p>
        </div>
      </section>
    </main>
  );
}
