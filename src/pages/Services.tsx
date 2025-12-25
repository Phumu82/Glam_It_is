import { Sparkles, Scissors, Eye, Heart, Gift, GraduationCap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Sparkles className="w-16 h-16 text-pink-500" />,
      title: 'Nail Services',
      description: 'Transform your nails with our comprehensive nail care services',
      features: [
        'Manicures & Pedicures',
        'Gel & Acrylic Nails',
        'Nail Art & Design',
        'Nail Extensions',
        'Nail Repair & Maintenance',
        'French Manicures',
      ],
      image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg',
    },
    {
      icon: <Scissors className="w-16 h-16 text-pink-500" />,
      title: 'Hair Styling & Treatments',
      description: 'Expert hair care from our professional stylists',
      features: [
        'Haircuts & Styling',
        'Hair Coloring',
        'Highlights & Balayage',
        'Hair Treatments',
        'Blowouts',
        'Special Occasion Styling',
      ],
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg',
    },
    {
      icon: <Eye className="w-16 h-16 text-pink-500" />,
      title: 'Lash Extensions',
      description: 'Beautiful, natural-looking lash enhancements',
      features: [
        'Classic Lash Extensions',
        'Volume Lash Extensions',
        'Lash Lifts',
        'Lash Tinting',
        'Lash Removal',
        'Lash Fills & Maintenance',
      ],
      image: 'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg',
    },
    {
      icon: <Heart className="w-16 h-16 text-pink-500" />,
      title: 'Beauty Treatments',
      description: 'Comprehensive beauty and skincare services',
      features: [
        'Facials & Skincare',
        'Waxing Services',
        'Makeup Application',
        'Eyebrow Shaping & Tinting',
        'Skin Treatments',
        'Bridal & Event Makeup',
      ],
      image: 'https://images.pexels.com/photos/3997987/pexels-photo-3997987.jpeg',
    },
    {
      icon: <Gift className="w-16 h-16 text-pink-500" />,
      title: 'Glam Packages',
      description: 'Complete beauty transformations at special rates',
      features: [
        'Full Glam Package',
        'Bridal Packages',
        'Party Ready Package',
        'Monthly Maintenance Plans',
        'Girls Day Out Specials',
        'Custom Package Combinations',
      ],
      image: 'https://images.pexels.com/photos/3997380/pexels-photo-3997380.jpeg',
    },
    {
      icon: <GraduationCap className="w-16 h-16 text-pink-500" />,
      title: 'Training & Masterclasses',
      description: 'Professional beauty education and certification',
      features: [
        'Lash Extension Training',
        'Nail Technician Courses',
        'Makeup Artistry',
        'Hair Styling Techniques',
        'Business Skills Development',
        'Certificate Programs',
      ],
      image: 'https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg',
    },
  ];

  return (
    <div>
      <section className="relative py-20 bg-gradient-to-br from-pink-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Our <span className="text-pink-500">Services</span>
          </h1>
          <p className="text-xl text-gray-600">
            Premium beauty treatments and professional training to meet all your needs
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center bg-pink-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                <div className="lg:w-1/2 h-80 lg:h-96 relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="flex justify-center lg:justify-start mb-4">{service.icon}</div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center lg:text-left">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-6 text-center lg:text-left">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://wa.me/27615341382"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-pink-500 hover:border-2 hover:border-pink-500 transition-all duration-300"
                  >
                    Book via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Ready to Get Glam?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Book your appointment today and experience the Glam It Is difference
          </p>
          <a
            href="https://wa.me/27615341382"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-pink-500 hover:border-2 hover:border-pink-500 transition-all duration-300 shadow-lg"
          >
            Book Now via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
