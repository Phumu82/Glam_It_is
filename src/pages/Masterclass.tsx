import { Calendar, MapPin, Award, Package, CheckCircle, Star } from 'lucide-react';

export default function Masterclass() {
  const dates = [
    '31 Jan – 01 Feb',
    '07 Feb – 08 Feb',
    '28 Feb – 01 Mar',
    '28 Mar – 29 Mar',
  ];

  const locations = [
    'Cape Town',
    'Bellville',
    'East London',
    'Port Elizabeth',
    'Durban',
    'Bloemfontein',
    'Kimberley',
    'Kuruman',
    'Witbank',
    'Nelspruit',
    'Mossel Bay',
    'Langebaan',
  ];

  const includes = [
    {
      icon: <Package className="w-6 h-6 text-pink-500" />,
      title: 'Lash Starter Kit',
      description: 'Complete professional kit to get you started',
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-pink-500" />,
      title: 'Lash Mapping',
      description: 'Learn proper eye mapping techniques',
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-pink-500" />,
      title: 'Individual Lash Installation',
      description: 'Master classic lash extension application',
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-pink-500" />,
      title: 'Cluster Lash Installation',
      description: 'Learn volume lash techniques',
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-pink-500" />,
      title: 'Lash Maintenance',
      description: 'Aftercare and maintenance procedures',
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-pink-500" />,
      title: 'Lash Removal',
      description: 'Safe removal techniques and best practices',
    },
    {
      icon: <Award className="w-6 h-6 text-pink-500" />,
      title: 'Certificate of Attendance',
      description: 'Recognized certification upon completion',
    },
  ];

  return (
    <div>
      <section className="relative py-20 bg-gradient-to-br from-pink-500 to-pink-400 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 mr-2" />
            <span className="font-semibold">Beginner Friendly Special</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Practical Lash Masterclass</h1>
          <p className="text-2xl mb-8">Learn. Practice. Get Certified.</p>
          <div className="flex items-baseline justify-center mb-8">
            <span className="text-6xl font-bold">R1500</span>
            <span className="ml-2 text-xl text-pink-100">per person</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What's Included</h2>
            <p className="text-lg text-gray-600">
              Everything you need to start your lash career
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includes.map((item, index) => (
              <div
                key={index}
                className="bg-pink-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <Calendar className="w-8 h-8 text-pink-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">Available Dates</h2>
              </div>
              <div className="space-y-4">
                {dates.map((date, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-pink-500"
                  >
                    <p className="text-xl font-semibold text-gray-800">{date}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-white rounded-xl p-6 shadow-md">
                <p className="text-gray-700">
                  <span className="font-semibold text-pink-500">Note:</span> Classes run over 2 days
                  with hands-on practical training. Limited spots available per session.
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-pink-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">Available Locations</h2>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md">
                <p className="text-lg font-semibold text-pink-500 mb-6">
                  Training Available in All SA Towns
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {locations.map((location, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span className="text-gray-700">{location}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-pink-500 to-pink-400 rounded-3xl p-12 text-white text-center shadow-2xl">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Masterclass?</h2>
            <div className="space-y-4 mb-8 text-left max-w-2xl mx-auto">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2"></div>
                <p className="text-lg">Hands-on practical training with real models</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2"></div>
                <p className="text-lg">Small class sizes for personalized attention</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2"></div>
                <p className="text-lg">Complete starter kit included in price</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2"></div>
                <p className="text-lg">Recognized certification to start your career</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2"></div>
                <p className="text-lg">Expert instructors with industry experience</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2"></div>
                <p className="text-lg">Ongoing support after course completion</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/27684959811"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-pink-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-600 hover:text-white transition-all duration-300 shadow-lg"
              >
                Book Masterclass via WhatsApp
              </a>
              <a
                href="https://wa.me/27684959811"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-pink-500 transition-all duration-300"
              >
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Have Questions?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us on WhatsApp for more information about the masterclass, payment options,
            or to reserve your spot.
          </p>
          <a
            href="https://wa.me/27684959811"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-all duration-300 shadow-lg"
          >
            Chat with Us on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
