import { Heart, Award, Users, Target } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Heart className="w-12 h-12 text-pink-500" />,
      title: 'Quality Beauty Services',
      description: 'We provide premium beauty treatments using the best products and techniques to ensure every client leaves feeling confident and beautiful.',
    },
    {
      icon: <Award className="w-12 h-12 text-pink-500" />,
      title: 'Empowering Beginners',
      description: 'Our training programs are designed to be accessible and comprehensive, giving aspiring beauty professionals the skills they need to succeed.',
    },
    {
      icon: <Users className="w-12 h-12 text-pink-500" />,
      title: 'Certification & Confidence',
      description: 'We offer recognized certifications that open doors in the beauty industry, building both skills and confidence in our students.',
    },
    {
      icon: <Target className="w-12 h-12 text-pink-500" />,
      title: 'Nationwide Accessibility',
      description: 'With masterclasses available across South Africa, we make professional beauty training accessible to everyone, everywhere.',
    },
  ];

  return (
    <div>
      <section className="relative py-20 bg-gradient-to-br from-pink-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            About <span className="text-pink-500">Glam It Is</span>
          </h1>
          <p className="text-xl text-gray-600">
            Your trusted partner in beauty and professional development
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-pink-50 rounded-3xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Who We Are</h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Glam It Is Beauty Houses bring you everything GLAM under one roof. We are more than
                just a beauty salon — we are a complete beauty destination that combines premium
                services with professional skills development.
              </p>
              <p>
                Located in the heart of Durban at The Wheel Shopping Centre, our modern facility
                offers a luxurious environment where clients can experience top-tier beauty treatments
                while aspiring professionals can learn from industry experts.
              </p>
              <p>
                Whether you're looking to pamper yourself with our salon services or kickstart your
                career in the beauty industry through our masterclasses, Glam It Is is your partner
                in transformation and empowerment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What We Stand For</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our core values guide everything we do, from client services to training programs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{value.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            To provide exceptional beauty services and world-class training that empowers individuals
            to look their best and achieve their professional goals in the beauty industry. We believe
            everyone deserves to feel confident and beautiful, and everyone has the potential to
            become a skilled beauty professional.
          </p>
          <a
            href="https://wa.me/27615341382"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-pink-500 hover:border-2 hover:border-pink-500 transition-all duration-300 shadow-lg"
          >
            Join the Glam Family
          </a>
        </div>
      </section>
    </div>
  );
}
