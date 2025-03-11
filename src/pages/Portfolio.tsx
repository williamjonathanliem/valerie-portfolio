import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Artwork {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tools: string[];
  year: number;
}

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const categories = [
    'all',
    'digital art',
    'painting',
    'photography',
    'sculpture',
  ];

  const artworks: Artwork[] = [
    {
      id: 1,
      title: 'Abstract Harmony',
      category: 'digital art',
      image: '/images/work1.jpg',
      description: 'An exploration of color and form through digital medium.',
      tools: ['Procreate', 'Adobe Photoshop'],
      year: 2023,
    },
    {
      id: 2,
      title: 'Urban Reflections',
      category: 'photography',
      image: '/images/work2.jpg',
      description: 'Capturing the essence of city life through reflective surfaces.',
      tools: ['Canon EOS R5', 'Adobe Lightroom'],
      year: 2023,
    },
    {
      id: 3,
      title: "Nature's Palette",
      category: 'painting',
      image: '/images/work3.jpg',
      description: 'A series of watercolor paintings inspired by natural landscapes.',
      tools: ['Watercolor', 'Mixed Media'],
      year: 2023,
    },
    // Add more artworks here
  ];

  const filteredArtworks = artworks.filter(
    artwork => selectedCategory === 'all' || artwork.category === selectedCategory
  );

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-display font-bold text-center mb-12"
        >
          Portfolio
        </motion.h1>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredArtworks.map(artwork => (
              <motion.div
                key={artwork.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="group cursor-pointer"
                onClick={() => setSelectedArtwork(artwork)}
              >
                <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                  <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/40 transition-colors z-10" />
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-display font-semibold mt-4 mb-2">
                  {artwork.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {artwork.category.charAt(0).toUpperCase() + artwork.category.slice(1)}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Artwork Modal */}
        <AnimatePresence>
          {selectedArtwork && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedArtwork(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full overflow-hidden relative"
                onClick={e => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedArtwork(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="aspect-[4/3] relative">
                  <img
                    src={selectedArtwork.image}
                    alt={selectedArtwork.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-display font-bold mb-2">
                    {selectedArtwork.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {selectedArtwork.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedArtwork.tools.map(tool => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Created in {selectedArtwork.year}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Portfolio; 