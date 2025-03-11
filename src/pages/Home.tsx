import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const featuredWorks = [
    {
      id: 1,
      title: 'Abstract Harmony',
      category: 'Digital Art',
      image: '/images/work1.jpg',
      description: 'An exploration of color and form through digital medium.'
    },
    {
      id: 2,
      title: 'Urban Reflections',
      category: 'Photography',
      image: '/images/work2.jpg',
      description: 'Capturing the essence of city life through reflective surfaces.'
    },
    {
      id: 3,
      title: 'Nature\'s Palette',
      category: 'Painting',
      image: '/images/work3.jpg',
      description: 'A series of watercolor paintings inspired by natural landscapes.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            className="max-w-3xl"
          >
            <motion.h1
              {...fadeInUp}
              className="text-5xl md:text-7xl font-display font-bold mb-6"
            >
              Hi, I'm{' '}
              <span className="text-primary">Valerie Nelson</span>
            </motion.h1>
            
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            >
              An artist exploring the boundaries of color, light, and imagination
            </motion.p>
            
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/portfolio"
                className="btn btn-primary inline-flex items-center group"
              >
                Explore My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-12 text-center"
          >
            Featured Work
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredWorks.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <Link to={`/portfolio/${work.id}`} className="block">
                  <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4">
                    <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/40 transition-colors z-10" />
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2">
                    {work.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {work.category}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {work.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="btn btn-primary inline-flex items-center group"
            >
              View All Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-8">
                <img
                  src="/images/profile.jpg"
                  alt="Valerie Nelson"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                About Me
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                As a NAFA arts student, I'm passionate about exploring various mediums
                and pushing the boundaries of contemporary art. My work reflects the
                intersection of traditional techniques and modern perspectives.
              </p>
              
              <Link
                to="/about"
                className="btn btn-primary inline-flex items-center group"
              >
                Learn More
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 