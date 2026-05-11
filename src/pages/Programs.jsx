import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  LuMenu, LuX, LuDownload, LuEye, LuFileText,
  LuMapPin, LuPhone, LuMail,
} from 'react-icons/lu';
import {
  FaDiscord, FaInstagram, FaLinkedin, FaSlack, FaYoutube, FaWhatsapp, FaTelegram,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const documents = [
  {
    id: 1,
    title: 'JSBI Program Guide 2026-1',
    description:
      'Comprehensive program overview: certificates, diplomas, course durations, and career pathways.',
    href: '/JBSI flyer A5 final 2026-1.pdf',
  },
  {
    id: 2,
    title: 'JSBI Admissions Guide 2026-2',
    description:
      'Admissions information, enrollment dates, fee structure, and step‑by‑step application guide.',
    href: '/JBSI flyer A5 final 2026-2.pdf',
  },
];

const Programs = () => {
  const [activeDoc, setActiveDoc] = useState(documents[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* ========== SITE HEADER ========== */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-gradient-to-r from-orange-600 to-red-600 py-5'
          }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <h1 className={`text-xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                Jimmy Sekasi Business Institute
              </h1>
              <p className={`text-xs font-medium tracking-wider ${scrolled ? 'text-orange-600' : 'text-orange-100'}`}>
                SKILLS FOR LIFE, CAREERS FOR TOMORROW
              </p>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/" className={`font-medium hover:text-orange-600 transition ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                Home
              </Link>
              <Link to="/programs" className={`font-medium hover:text-orange-600 transition ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                Programs
              </Link>
              <a href="/#faculty" className={`font-medium hover:text-orange-600 transition ${scrolled ? 'text-gray-700' : 'text-white'}`}>Faculty</a>
              <a href="/#admissions" className={`font-medium hover:text-orange-600 transition ${scrolled ? 'text-gray-700' : 'text-white'}`}>Admissions</a>
              <a href="/#about" className={`font-medium hover:text-orange-600 transition ${scrolled ? 'text-gray-700' : 'text-white'}`}>About</a>
              <a href="/#contact" className={`font-medium hover:text-orange-600 transition ${scrolled ? 'text-gray-700' : 'text-white'}`}>Contact</a>
              <Link to="/apply" className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition font-semibold shadow-lg hover:shadow-xl">
                Apply Now
              </Link>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {isMenuOpen ? <LuX className="w-6 h-6" /> : <LuMenu className="w-6 h-6" />}
            </button>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-4 pb-4 border-t border-white/20"
              >
                <div className="flex flex-col space-y-3 pt-4">
                  <Link to="/" className={`font-medium ${scrolled ? 'text-gray-700' : 'text-white'}`}>Home</Link>
                  <Link to="/programs" className={`font-medium ${scrolled ? 'text-gray-700' : 'text-white'}`}>Programs</Link>
                  <a href="/#faculty" className={`font-medium ${scrolled ? 'text-gray-700' : 'text-white'}`}>Faculty</a>
                  <a href="/#admissions" className={`font-medium ${scrolled ? 'text-gray-700' : 'text-white'}`}>Admissions</a>
                  <a href="/#about" className={`font-medium ${scrolled ? 'text-gray-700' : 'text-white'}`}>About</a>
                  <a href="/#contact" className={`font-medium ${scrolled ? 'text-gray-700' : 'text-white'}`}>Contact</a>
                  <Link to="/apply" className="bg-white text-orange-600 px-6 py-2 rounded-full font-semibold w-full text-center">
                    Apply Now
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* ========== MAIN CONTENT ========== */}
      <main className="flex-grow pt-24 md:pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar – compact document list */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="lg:sticky lg:top-28">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Available Documents</p>
                <div className="space-y-1">
                  {documents.map((doc, index) => (
                    <motion.button
                      key={doc.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setActiveDoc(doc)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 group ${activeDoc.id === doc.id
                        ? 'bg-orange-50 text-orange-700 shadow-sm'
                        : 'text-gray-600 hover:bg-gray-50'
                        }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${activeDoc.id === doc.id
                        ? 'bg-orange-600 text-white'
                        : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
                        }`}>
                        <LuFileText className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium truncate">{doc.title}</p>
                        <p className="text-xs text-gray-400 truncate">{doc.description}</p>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Preview Panel – bigger and dominant */}
            <div className="flex-1 min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
              >
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Preview</p>
                    <AnimatePresence mode="wait">
                      <motion.h2
                        key={activeDoc.id}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="text-lg font-semibold text-white mt-1"
                      >
                        {activeDoc.title}
                      </motion.h2>
                    </AnimatePresence>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-600/20 text-orange-300">
                    PDF
                  </span>
                </div>
                <div className="bg-gray-100">
                  <iframe
                    title={activeDoc.title}
                    src={activeDoc.href}
                    className="w-full border-0"
                    style={{ height: 'calc(100vh - 12rem)' }}
                  />
                </div>
                <div className="bg-white px-6 py-3 border-t border-gray-100 flex justify-end">
                  <a
                    href={activeDoc.href}
                    download={activeDoc.title}
                    className="inline-flex items-center space-x-2 bg-orange-600 text-white px-5 py-2 rounded-xl font-medium text-sm hover:bg-orange-700 transition shadow-lg shadow-orange-200"
                  >
                    <LuDownload className="w-4 h-4" />
                    <span>Download Document</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      {/* ========== SITE FOOTER ========== */}
      <footer className="bg-gray-900 text-white pt-16 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <img
                src="/Jimmy Sekasi Business Institute Logo.png"
                alt="JSBI Logo"
                className="h-28 w-auto mb-4"
              />
              <p className="text-gray-400 mb-6">
                Empowering young men and women with contemporary skills for careers in culinary arts,
                fashion, technology, and business.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a href="https://discord.gg/ges" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition text-white"><FaDiscord className="w-5 h-5" /></a>
                <a href="https://instagram.com/ges" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition text-white"><FaInstagram className="w-5 h-5" /></a>
                <a href="https://linkedin.com/company/ges" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition text-white"><FaLinkedin className="w-5 h-5" /></a>
                <a href="https://slack.com/ges" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition text-white"><FaSlack className="w-5 h-5" /></a>
                <a href="https://youtube.com/@ges" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition text-white"><FaYoutube className="w-5 h-5" /></a>
                <a href="https://x.com/ges" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition text-white"><FaXTwitter className="w-5 h-5" /></a>
                <a href="https://wa.me/256" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition text-white"><FaWhatsapp className="w-5 h-5" /></a>
                <a href="https://t.me/ges" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition text-white"><FaTelegram className="w-5 h-5" /></a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/programs" className="text-gray-400 hover:text-orange-500 transition">Programs</Link></li>
                <li><a href="/#faculty" className="text-gray-400 hover:text-orange-500 transition">Faculty</a></li>
                <li><a href="/#admissions" className="text-gray-400 hover:text-orange-500 transition">Admissions</a></li>
                <li><a href="/#about" className="text-gray-400 hover:text-orange-500 transition">About Us</a></li>
                <li><a href="/#contact" className="text-gray-400 hover:text-orange-500 transition">Contact</a></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-orange-500 transition">Blog</Link></li>
                <li><Link to="/students-guild" className="text-gray-400 hover:text-orange-500 transition">Students Guild</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <LuMapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-400">Kampala, Uganda</span>
                </li>
                <li className="flex items-center space-x-3">
                  <LuPhone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-400">+256756241530  +256772472570</span>
                </li>
                <li className="flex items-center space-x-3">
                  <LuMail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-400">info@jsbi.ac.ug</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-2 pb-2 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Jimmy Sekasi Business Institute. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-orange-500 transition">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition">Terms of Service</a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-300 font-urbanist text-sm">Powered by</span>
                <img
                  src="/Inzozi-grayscale.png"
                  alt="Inzozi Logo"
                  className="h-16 w-auto brightness-0 invert"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Programs;