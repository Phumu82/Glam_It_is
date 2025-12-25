import { Link } from 'react-router-dom';
import { Sparkles, Star, GraduationCap, Eye, Scissors, Heart, Instagram } from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: <Sparkles className="w-12 h-12 text-pink-500" />,
      title: 'Nails',
      description: 'Professional manicures, pedicures, gel nails, and nail art',
    },
    {
      icon: <Scissors className="w-12 h-12 text-pink-500" />,
      title: 'Hair',
      description: 'Styling, treatments, coloring, and hair care services',
    },
    {
      icon: <Eye className="w-12 h-12 text-pink-500" />,
      title: 'Lashes',
      description: 'Extensions, lifts, tints, and lash maintenance',
    },
    {
      icon: <Heart className="w-12 h-12 text-pink-500" />,
      title: 'Beauty Treatments',
      description: 'Facials, waxing, makeup, and skincare services',
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-pink-500" />,
      title: 'Training & Masterclasses',
      description: 'Professional beauty courses and certifications',
    },
  ];

  const instagramImages = [
    'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg',
    'https://images.pexels.com/photos/3997987/pexels-photo-3997987.jpeg',
    'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg',
    'https://images.pexels.com/photos/3997380/pexels-photo-3997380.jpeg',
    'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg',
    'https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg',
  ];

  return (
    <div>
      <section className="relative h-[600px] bg-gradient-to-br from-pink-50 to-white flex items-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg')" }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6">
            Everything <span className="text-pink-500">GLAM</span> Under One Roof
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Nails • Hair • Lashes • Beauty Training
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/27615341382"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-pink-500 hover:border-2 hover:border-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book via WhatsApp
            </a>
            <Link
              to="/masterclass"
              className="bg-white text-pink-500 border-2 border-pink-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Masterclasses
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Glam It Is</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your premier destination for luxury beauty services and professional training.
              We bring together expert beauticians and world-class education to help you look
              and feel your best, or start your career in the beauty industry.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">Comprehensive beauty solutions tailored to you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-3">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-pink-500 hover:border-2 hover:border-pink-500 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-pink-500 to-pink-400 rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-12 text-white flex flex-col justify-center">
                <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-4 w-fit">
                  <Star className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Featured Course</span>
                </div>
                <h2 className="text-4xl font-bold mb-4">Practical Lash Masterclass</h2>
                <p className="text-pink-50 text-lg mb-6">
                  Learn professional lash techniques from industry experts. Perfect for beginners!
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>Complete Lash Starter Kit Included</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>Certificate of Attendance</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>Available in All SA Towns</span>
                  </div>
                </div>
                <div className="flex items-baseline mb-8">
                  <span className="text-5xl font-bold">R1500</span>
                  <span className="ml-2 text-pink-100">Beginner Friendly</span>
                </div>
                <Link
                  to="/masterclass"
                  className="inline-block bg-white text-pink-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-600 hover:text-white transition-all duration-300 text-center shadow-lg"
                >
                  View Masterclass Details
                </Link>
              </div>
              <div className="relative h-96 md:h-auto">
                <img
                  src="https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg"
                  alt="Lash Masterclass"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Follow Our Journey</h2>
            <p className="text-lg text-gray-600">See our latest work on Instagram</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramImages.map((image, index) => (
              <a
                key={index}
                href="https://www.instagram.com/glamitis_rsa?igsh=MWd0y2tyNWYwdmFIbQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 group relative"
              >
                <img
                  src={image}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-pink-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="https://www.instagram.com/glamitis_rsa?igsh=MWd0y2tyNWYwdmFIbQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-pink-500 hover:border-2 hover:border-pink-500 transition-all duration-300"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Follow Us on Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
