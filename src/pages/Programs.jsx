import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LuArrowLeft } from 'react-icons/lu';

const flyers = [
  {
    id: 1,
    title: 'JSBI Programs Flyer 2026-1',
    description: 'Comprehensive program overview and course details',
    href: '/JBSI flyer A5 final 2026-1.pdf'
  },
  {
    id: 2,
    title: 'JSBI Programs Flyer 2026-2',
    description: 'Admissions information and enrollment details',
    href: '/JBSI flyer A5 final 2026-2.pdf'
  }
];

const Programs = () => {
  const [activeFlyer, setActiveFlyer] = useState(flyers[0]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition"
              >
                <LuArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </Link>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Our Flyers</h1>
            <div></div>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="h-1 w-12 bg-orange-600"></div>
              <span className="text-orange-600 font-bold tracking-wider uppercase text-sm">
                Our Flyers
              </span>
              <div className="h-1 w-12 bg-orange-600"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Download Our Latest
              <span className="text-orange-600"> Information Flyers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get detailed information about our programs and admissions process
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_0.95fr] gap-8 items-start">
            <div className="grid md:grid-cols-2 gap-8">
              {flyers.map((flyer, index) => (
                <motion.div
                  key={flyer.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {flyer.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {flyer.description}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveFlyer(flyer)}
                      className="flex-1 bg-orange-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
                    >
                      Preview
                    </button>
                    <a
                      href={flyer.href}
                      download={flyer.title}
                      className="flex-1 bg-gray-800 text-white px-4 py-3 rounded-lg font-semibold hover:bg-gray-900 transition text-center"
                    >
                      Download
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200">
              <div className="bg-gray-900 px-6 py-5 text-white">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-300 mb-2">Preview</p>
                <h3 className="text-xl font-semibold">{activeFlyer.title}</h3>
                <p className="text-sm text-gray-300 mt-1">{activeFlyer.description}</p>
              </div>
              <div className="h-[720px] bg-black">
                <iframe
                  title={activeFlyer.title}
                  src={activeFlyer.href}
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
