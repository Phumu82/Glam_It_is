import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div>
      <section className="relative py-20 bg-gradient-to-br from-pink-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Get in <span className="text-pink-500">Touch</span>
          </h1>
          <p className="text-xl text-gray-600">
            Book your appointment or enquire about our services and masterclasses
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Booking Options</h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-pink-500 to-pink-400 rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <MessageCircle className="w-8 h-8 mr-3" />
                    <h3 className="text-2xl font-bold">Salon Bookings</h3>
                  </div>
                  <p className="mb-6 text-pink-50">
                    Book your beauty appointments for nails, hair, lashes, and all beauty treatments
                  </p>
                  <a
                    href="https://wa.me/27615341382"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-pink-500 px-6 py-3 rounded-full font-bold hover:bg-pink-600 hover:text-white transition-all duration-300"
                  >
                    WhatsApp: 061 534 1382
                  </a>
                </div>

                <div className="bg-gradient-to-br from-pink-400 to-pink-300 rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <MessageCircle className="w-8 h-8 mr-3" />
                    <h3 className="text-2xl font-bold">Masterclass Bookings</h3>
                  </div>
                  <p className="mb-6 text-pink-50">
                    Reserve your spot in our practical lash masterclass and other training programs
                  </p>
                  <a
                    href="https://wa.me/27684959811"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-pink-500 px-6 py-3 rounded-full font-bold hover:bg-pink-600 hover:text-white transition-all duration-300"
                  >
                    WhatsApp: 068 495 9811
                  </a>
                </div>

                <div className="bg-pink-50 rounded-2xl p-8 border-2 border-pink-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Booking Tips</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-3 mt-2"></div>
                      <span>Book in advance to secure your preferred date and time</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-3 mt-2"></div>
                      <span>Let us know about any allergies or special requirements</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-3 mt-2"></div>
                      <span>Ask about our package deals and special offers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-pink-500">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Our Location</h3>
                      <p className="text-gray-600">The Wheel Shopping Centre</p>
                      <p className="text-gray-600">Shop F101, First Floor</p>
                      <p className="text-gray-600">South Beach, Durban</p>
                      <p className="text-gray-600">South Africa</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-pink-500">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Phone Numbers</h3>
                      <a
                        href="tel:+27615341382"
                        className="block text-gray-600 hover:text-pink-500 transition-colors"
                      >
                        061 534 1382 (Salon)
                      </a>
                      <a
                        href="tel:+27684959811"
                        className="block text-gray-600 hover:text-pink-500 transition-colors"
                      >
                        068 495 9811 (Masterclass)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-pink-500">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                      <a
                        href="mailto:info@glamitis.co.za"
                        className="text-gray-600 hover:text-pink-500 transition-colors"
                      >
                        info@glamitis.co.za
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-pink-500">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Opening Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Sunday: By Appointment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Find Us</h2>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.3906891785374!2d31.042699!3d-29.85851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7aa2b5f4b5555%3A0x5555555555555555!2sThe%20Wheel%20Shopping%20Centre%2C%20South%20Beach%2C%20Durban!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Glam It Is Location"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Ready to Book?</h2>
          <p className="text-xl text-gray-600 mb-8">
            We're excited to welcome you to Glam It Is. Contact us today to schedule your appointment!
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
