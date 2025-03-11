import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Palette, Camera, Brush, Award } from 'lucide-react';

const About: React.FC = () => {
  const timelineEvents = [
    {
      year: '2023',
      title: 'NAFA Arts Exhibition',
      description: 'Featured artist at the annual NAFA Arts Exhibition.',
      icon: <Award className="w-6 h-6" />,
    },
    {
      year: '2022',
      title: 'Digital Art Workshop',
      description: 'Led a workshop on digital art techniques for beginners.',
      icon: <Palette className="w-6 h-6" />,
    },
    {
      year: '2021',
      title: 'Photography Exhibition',
      description: 'First solo photography exhibition at the local art gallery.',
      icon: <Camera className="w-6 h-6" />,
    },
    {
      year: '2020',
      title: 'NAFA Enrollment',
      description: 'Started my journey at Nanyang Academy of Fine Arts.',
      icon: <Brush className="w-6 h-6" />,
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial="initial"
            animate="animate"
            className="mb-12"
          >
            <motion.div
              {...fadeInUp}
              className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-8"
            >
              <img
                src="/images/profile.jpg"
                alt="Valerie Nelson"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.h1
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-display font-bold mb-6"
            >
              About Me
            </motion.h1>
            
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              A passionate artist exploring the intersection of traditional and digital mediums
            </motion.p>
          </motion.div>
        </div>

        {/* Bio Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose dark:prose-invert max-w-none"
          >
            <h2 className="text-3xl font-display font-bold mb-6">My Story</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              As a student at the Nanyang Academy of Fine Arts, I've been fortunate to explore
              various artistic mediums and develop my unique style. My work is heavily influenced
              by the intersection of nature and urban life, seeking to capture the beauty in
              everyday moments through both traditional and digital techniques.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I believe that art has the power to bridge cultural gaps and create meaningful
              connections. Through my work, I aim to inspire others to see the world through
              a different lens and appreciate the beauty that surrounds us.
            </p>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-bold mb-12 text-center"
          >
            Artistic Journey
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200 dark:bg-gray-700" />

            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => {
                const [ref, inView] = useInView({
                  triggerOnce: true,
                  threshold: 0.1,
                });

                return (
                  <motion.div
                    key={event.year}
                    ref={ref}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'flex-row-reverse' : ''
                    }`}
                  >
                    {/* Event Content */}
                    <div className="w-1/2 px-6">
                      <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg ${
                        index % 2 === 0 ? 'text-right' : ''
                      }`}>
                        <span className="text-primary font-bold">{event.year}</span>
                        <h3 className="text-xl font-display font-semibold mt-2 mb-3">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {event.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Icon */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                      {event.icon}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Fun Facts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-20 p-8 bg-gray-50 dark:bg-gray-800 rounded-lg"
        >
          <h2 className="text-3xl font-display font-bold mb-8 text-center">
            Fun Facts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
              <h3 className="font-display font-semibold mb-2">Favorite Mediums</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Acrylic, Watercolor, and Digital Illustration
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
              <h3 className="font-display font-semibold mb-2">Inspiration</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Urban landscapes and natural patterns
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
              <h3 className="font-display font-semibold mb-2">Dream Project</h3>
              <p className="text-gray-600 dark:text-gray-300">
                A large-scale interactive art installation
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
              <h3 className="font-display font-semibold mb-2">Art Philosophy</h3>
              <p className="text-gray-600 dark:text-gray-300">
                "Art is the bridge between imagination and reality"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 