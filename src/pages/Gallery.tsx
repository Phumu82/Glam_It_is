import { useState } from 'react';
import { X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg',
    'https://images.pexels.com/photos/3997987/pexels-photo-3997987.jpeg',
    'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg',
    'https://images.pexels.com/photos/3997380/pexels-photo-3997380.jpeg',
    'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg',
    'https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg',
    'https://images.pexels.com/photos/3997399/pexels-photo-3997399.jpeg',
    'https://images.pexels.com/photos/3764568/pexels-photo-3764568.jpeg',
    'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg',
    'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg',
    'https://images.pexels.com/photos/3992856/pexels-photo-3992856.jpeg',
    'https://images.pexels.com/photos/3997392/pexels-photo-3997392.jpeg',
    'https://images.pexels.com/photos/3997390/pexels-photo-3997390.jpeg',
    'https://images.pexels.com/photos/3997388/pexels-photo-3997388.jpeg',
    'https://images.pexels.com/photos/3738386/pexels-photo-3738386.jpeg',
    'https://images.pexels.com/photos/3997393/pexels-photo-3997393.jpeg',
  ];

  return (
    <div>
      <section className="relative py-20 bg-gradient-to-br from-pink-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Our <span className="text-pink-500">Gallery</span>
          </h1>
          <p className="text-xl text-gray-600">
            Explore our beautiful work and get inspired for your next transformation
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image)}
                className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group relative border-4 border-pink-100 hover:border-pink-300"
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Want to Be Featured?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Book your appointment and share your transformation with us on Instagram
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/27615341382"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-pink-500 hover:border-2 hover:border-pink-500 transition-all duration-300 shadow-lg"
            >
              Book Your Session
            </a>
            <a
              href="https://www.instagram.com/glamitis_rsa?igsh=MWd0y2tyNWYwdmFIbQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-pink-500 border-2 border-pink-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-lg"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-pink-500 transition-colors"
          >
            <X className="w-10 h-10" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
