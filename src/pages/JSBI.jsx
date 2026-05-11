import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LuMenu, 
  LuX, 
  LuChevronRight,
  LuArrowRight,
  LuGraduationCap,
  LuUsers,
  LuAward,
  LuCalendar,
  LuMapPin,
  LuPhone,
  LuMail,
  LuPlay,
  LuChefHat,
  LuCoffee,
  LuPalette,
  LuLaptop,
  LuTrendingUp,
  LuClock
} from 'react-icons/lu';
import { FaDiscord, FaInstagram, FaLinkedin, FaSlack, FaYoutube, FaWhatsapp, FaTelegram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const JSBI = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeVideoSrc, setActiveVideoSrc] = useState(null);

  const openVideoModal = (src) => {
    setActiveVideoSrc(src);
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setTimeout(() => setActiveVideoSrc(null), 300);
  };
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: '',
    documents: null
  });
  const [programImages, setProgramImages] = useState({
    0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0
  });

  const imagesByCategory = {
    food: [
      '/Food/IMG_00258.JPG',
      '/Food/IMG_00508.JPG',
      '/Food/IMG_00678.JPG',
      '/Food/IMG_00688.JPG',
      '/Food/IMG_00698.JPG',
      '/Food/IMG_0089.JPG'
    ],
    baking: [
      '/Baking/allen-rad-JBIK4QZOFfc-unsplash.jpg',
      '/Baking/american-heritage-chocolate-vdx5hPQhXFk-unsplash.jpg',
      '/Baking/annie-spratt-EACvtuV2k2E-unsplash.jpg',
      '/Baking/annie-spratt-XyBeP4K9Vzs-unsplash.jpg',
      '/Baking/charles-chen-w2ZFjDnUL3w-unsplash.jpg'
    ],
    coffee: [
      '/Coffee/IMG_0176.JPG',
      '/Coffee/IMG_0319.JPG',
      '/Coffee/IMG_0691.JPG',
      '/Coffee/IMG_0697.JPG',
      '/Coffee/IMG_0766.JPG',
      '/Coffee/IMG_1379.JPG'
    ],
    fashion: [
      '/Fashion/christian-agbede-EiYH9QupDls-unsplash.jpg',
      '/Fashion/christian-agbede-ukoyiWGdz2k-unsplash.jpg',
      '/Fashion/karsten-winegeart-pMLaE6C76Ms-unsplash.jpg',
      '/Fashion/malicki-m-beser-PKMvkg7vnUo-unsplash.jpg',
      '/Fashion/oladimeji-odunsi-Wu3yqve2gnc-unsplash.jpg'
    ],
    beauty: [
      '/Beauty/ashley-smith-RGWutmrg4rY-unsplash.jpg',
      '/Beauty/chris-quintana-gsng44sj-FE-unsplash.jpg',
      '/Beauty/jamie-street-aMuq-Xz7R_M-unsplash.jpg',
      '/Beauty/jazmin-quaynor-FoeIOgztCXo-unsplash.jpg',
      '/Beauty/manu-camargo-BkaD07QEiJc-unsplash.jpg'
    ],
    ict: [
      '/ICT/ben-iwara-p9-zw6CyMrU-unsplash.jpg',
      '/ICT/boitumelo-5qvBHCflHyM-unsplash.jpg',
      '/ICT/boitumelo-mZ-vSMus7zM-unsplash.jpg',
      '/ICT/brian-j-tromp-T5Us4Q9JMZk-unsplash.jpg'
    ],
    business: [
      '/Business/IMG_2730.JPG',
      '/Business/madib-zikri-ZPKPxTlIjLA-unsplash.jpg',
      '/Business/ninthgrid-hdfPDesgEw8-unsplash.jpg',
      '/Business/ninthgrid-wCfWNod54JU-unsplash.jpg',
      '/Business/steward-masweneng-uMBf3Nt_N_g-unsplash.jpg',
      '/Business/the-jopwell-collection-0QvOpmEEYNE-unsplash.jpg'
    ],
    mixology: [
      '/Mixology/IMG_0419.JPG',
      '/Mixology/IMG_0771.JPG',
      '/Mixology/IMG_0998.JPG',
      '/Mixology/IMG_1002.JPG',
      '/Mixology/IMG_1334.JPG',
      '/Mixology/IMG_1714.JPG'
    ]
  };

  const programs = [
    {
      category: 'culinary',
      title: 'Culinary Arts',
      icon: LuChefHat,
      duration: '6-12 Months',
      level: 'Certificate & Diploma',
      description: 'Master the art of cooking with hands-on training in professional kitchens.',
      color: 'from-orange-500 to-red-600',
      imageFolder: 'food'
    },
    {
      category: 'culinary',
      title: 'Pastry & Baking',
      icon: LuCoffee,
      duration: '4-8 Months',
      level: 'Certificate',
      description: 'Learn the craft of pastry making, cake decoration, and artisan baking.',
      color: 'from-pink-500 to-rose-600',
      imageFolder: 'baking'
    },
    {
      category: 'culinary',
      title: 'Barista Skills',
      icon: LuCoffee,
      duration: '2-3 Months',
      level: 'Certificate',
      description: 'Perfect your coffee-making skills and latte art techniques.',
      color: 'from-amber-600 to-orange-700',
      imageFolder: 'coffee'
    },
    {
      category: 'fashion',
      title: 'Fashion & Design',
      icon: LuPalette,
      duration: '12 Months',
      level: 'Diploma',
      description: 'Create stunning fashion designs and learn garment construction.',
      color: 'from-purple-500 to-pink-600',
      imageFolder: 'fashion'
    },
    {
      category: 'fashion',
      title: 'Hairdressing & Beauty',
      icon: LuPalette,
      duration: '12 Months',
      level: 'Diploma',
      description: 'Master professional hairdressing and beauty therapy techniques.',
      color: 'from-fuchsia-500 to-purple-600',
      imageFolder: 'beauty'
    },
    {
      category: 'tech',
      title: 'ICT & Computer Skills',
      icon: LuLaptop,
      duration: '3-6 Months',
      level: 'Certificate',
      description: 'Build essential digital skills for the modern workplace.',
      color: 'from-blue-500 to-cyan-600',
      imageFolder: 'ict'
    },
    {
      category: 'business',
      title: 'Business Management',
      icon: LuTrendingUp,
      duration: '6 Months',
      level: 'Certificate',
      description: 'Develop entrepreneurial skills and business acumen.',
      color: 'from-green-500 to-emerald-600',
      imageFolder: 'business'
    },
    {
      category: 'culinary',
      title: 'Mixology',
      icon: LuCoffee,
      duration: '2-3 Months',
      level: 'Certificate',
      description: 'Learn professional bartending and cocktail creation.',
      color: 'from-teal-500 to-cyan-600',
      imageFolder: 'mixology'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timeouts = [];
    const intervals = [];

    programs.forEach((program, index) => {
      const timeoutId = setTimeout(() => {
        const intervalId = setInterval(() => {
          setProgramImages(prev => {
            const images = imagesByCategory[program.imageFolder];
            if (!images || images.length === 0) return prev;
            return {
              ...prev,
              [index]: (prev[index] + 1) % images.length
            };
          });
        }, 10000);
        intervals.push(intervalId);
      }, index * 1250);
      timeouts.push(timeoutId);
    });

    return () => {
      timeouts.forEach(id => clearTimeout(id));
      intervals.forEach(id => clearInterval(id));
    };
  }, []);

  const stats = [
    { number: '\u00A0', label: '\u00A0', sublabel: '\u00A0' },
    { number: '\u00A0', label: '\u00A0', sublabel: '\u00A0' },
    { number: '\u00A0', label: '\u00A0', sublabel: '\u00A0' },
    { number: '\u00A0', label: '\u00A0', sublabel: '\u00A0' }
  ];

  const partners = [
    { name: 'Cafe Javas', logo: '/cafe-javas.jpeg' },
    { name: 'Java House', logo: '/java-house.avif' },
    { name: 'GES', logo: '/GES.png' },
    { name: 'Majestic Brands', logo: '/UTB.png' },
    { name: 'Buganda Kingdom', logo: '/Flag_of_Buganda.svg' },
    { name: 'Cafe Javas', logo: '/cafe-javas.jpeg' },
    { name: 'Java House', logo: '/JavaHouseLogo.webp' },
    { name: 'GES', logo: '/GES.png' },
    { name: 'Majestic Brands', logo: '/UTB.png' },
    { name: 'Buganda Kingdom', logo: '/Flag_of_Buganda.svg' },
  ];

  const admissionSteps = [
    {
      title: 'Choose Your Program',
      detail: 'Review our certificate and diploma pathways across culinary, fashion, tech, and business.',
      icon: LuGraduationCap
    },
    {
      title: 'Prepare Documents',
      detail: 'Gather academic transcripts, a national ID, and any prior certification for review.',
      icon: LuAward
    },
    {
      title: 'Submit & Interview',
      detail: 'Apply online or on campus, then complete a brief interview or skills assessment.',
      icon: LuCalendar
    },
    {
      title: 'Enroll & Begin',
      detail: 'Finalize tuition arrangements, attend orientation, and start building practical skills.',
      icon: LuArrowRight
    }
  ];

  const filteredPrograms = activeTab === 'all' 
    ? programs 
    : programs.filter(p => p.category === activeTab);

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'documents') {
      setFormData(prev => ({ ...prev, documents: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(`Application submitted!\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nProgram: ${formData.program}\nDocuments: ${formData.documents?.name || 'None'}`);
    setFormData({ name: '', phone: '', email: '', program: '', documents: null });
    setIsApplyModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white shadow-lg py-3' 
            : 'bg-gradient-to-r from-orange-600 to-red-600 py-5'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Brand Title */}
            <div className="flex flex-col">
              <h1 className={`text-xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                Jimmy Sekasi Business Institute
              </h1>
              <p className={`text-xs font-medium tracking-wider ${scrolled ? 'text-orange-600' : 'text-orange-100'}`}>
                SKILLS FOR LIFE, CAREERS FOR TOMORROW
              </p>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#programs" className={`font-medium hover:text-orange-600 transition ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                Programs
              </a>
              <a href="#faculty" className={`font-medium hover:text-orange-600 transition ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                Faculty
              </a>
              <a href="#admissions" className={`font-medium hover:text-orange-600 transition ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                Admissions
              </a>
              <a href="#about" className={`font-medium hover:text-orange-600 transition ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                About
              </a>
              <a href="#contact" className={`font-medium hover:text-orange-600 transition ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                Contact
              </a>
              <button 
                onClick={() => setIsApplyModalOpen(true)}
                className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition font-semibold shadow-lg hover:shadow-xl">
                Apply Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {isMenuOpen ? <LuX className="w-6 h-6" /> : <LuMenu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-4 pb-4 border-t border-white/20"
              >
                <div className="flex flex-col space-y-3 pt-4">
                  <a href="#programs" className={`font-medium ${scrolled ? 'text-gray-700' : 'text-white'}`}>Programs</a>
                  <a href="#faculty" className={`font-medium ${scrolled ? 'text-gray-700' : 'text-white'}`}>Faculty</a>
                  <a href="#admissions" className={`font-medium ${scrolled ? 'text-gray-700' : 'text-white'}`}>Admissions</a>
                  <a href="#about" className={`font-medium ${scrolled ? 'text-gray-700' : 'text-white'}`}>About</a>
                  <a href="#contact" className={`font-medium ${scrolled ? 'text-gray-700' : 'text-white'}`}>Contact</a>
                  <button className="bg-white text-orange-600 px-6 py-2 rounded-full font-semibold w-full">
                    Apply Now
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/JimmySekasi.png"
            alt="Jimmy Sekasi Business Institute"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/95 via-red-900/90 to-orange-800/85"></div>
        </div>

        {/* Diagonal Design Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-br from-orange-600 to-red-700 transform skew-x-12 origin-top-right opacity-20"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <img
                  src="/Jimmy Sekasi Business Institute Logo.png"
                  alt="JSBI Logo"
                  className="h-48 w-auto drop-shadow-2xl"
                />
              </div>
              <div className="flex items-center space-x-2 mb-6">
                <LuGraduationCap className="w-8 h-8 text-orange-400" />
                <span className="text-orange-400 font-bold tracking-wider uppercase text-sm">
                  Transform Your Future
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Skills You Can
                <span className="block text-orange-400">Build On.</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                At JSBI, education is about understanding a complex world, thinking critically, 
                and building practical skills that transform lives and communities. Choose from 
                certificates and diplomas in culinary arts, fashion, technology, and business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => openVideoModal('/2026-02-26-002256024.mp4')}
                  className="group bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-700 transition shadow-2xl hover:shadow-orange-500/50 flex items-center justify-center space-x-2">
                  <span>Explore Programs</span>
                  <LuArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </button>
                <button 
                  onClick={() => openVideoModal('/JSBI VIRTUAL TOUR.mp4')}
                  className="group bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-2xl flex items-center justify-center space-x-2">
                  <LuPlay className="w-5 h-5" />
                  <span>Watch Video</span>
                </button>
              </div>
            </motion.div>

            {/* Visual spacer intentionally left empty to keep layout balanced on large screens */}
            <div className="hidden lg:block" aria-hidden="true"></div>
          </div>
        </div>

      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.sublabel}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="h-1 w-12 bg-orange-600"></div>
              <span className="text-orange-600 font-bold tracking-wider uppercase text-sm">
                Our Programs
              </span>
              <div className="h-1 w-12 bg-orange-600"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Build Your Career,
              <span className="text-orange-600"> Choose Your Path</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practical skills training designed for real-world success
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: 'all', label: 'All Programs' },
              { id: 'culinary', label: 'Culinary Arts' },
              { id: 'fashion', label: 'Fashion & Beauty' },
              { id: 'tech', label: 'Technology' },
              { id: 'business', label: 'Business' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredPrograms.map((program, index) => {
              const programIndex = programs.findIndex(p => p.title === program.title);
              const images = imagesByCategory[program.imageFolder] || [];
              const currentImageIndex = programImages[programIndex] || 0;
              
              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col min-h-[380px]"
              >
                <div className="relative h-40">
                  <img
                    src={images.length > 0 ? images[currentImageIndex % images.length] : '/Food/IMG_0089.JPG'}
                    alt={`${program.title} showcase`}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute top-4 left-4 w-14 h-14 rounded-xl bg-white/90 flex items-center justify-center shadow-lg`}> 
                    <program.icon className={`w-7 h-7 text-orange-600`} />
                  </div>
                </div>
                <div className={`h-1 bg-gradient-to-r ${program.color}`}></div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-1 w-12 bg-orange-600"></div>
                <span className="text-orange-600 font-bold tracking-wider uppercase text-sm">
                  Why JSBI
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Empowering the
                <span className="text-orange-600"> Whole Person</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                In a deliberate plan to build a hybrid mid-level training college, GES took over 
                JSBI to intentionally impart contemporary skills to young men and women of all walks 
                of life, to enhance their potential in being more relevant to their families and 
                communities and be direct partakers in their career destiny.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: LuUsers,
                    title: 'Hands-On Training',
                    description: 'Learn by doing with real-world equipment and industry-standard facilities'
                  },
                  {
                    icon: LuAward,
                    title: 'Industry Partnerships',
                    description: 'Direct job placement support through our network of 20+ partner companies'
                  },
                  {
                    icon: LuTrendingUp,
                    title: 'Flexible Learning',
                    description: 'Short courses, certificates, and diplomas designed to fit your schedule'
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="/premium_photo-1724026586579-5c413598de2c.jpg"
                  alt="Students in class"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-8 rounded-2xl shadow-2xl">
                  <div className="text-5xl font-bold mb-2">15+</div>
                  <div className="text-lg font-semibold">Years of Excellence</div>
                  <div className="text-sm text-orange-200">Since 2010</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="faculty" className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="h-1 w-12 bg-orange-600"></div>
              <span className="text-orange-600 font-bold tracking-wider uppercase text-sm">
                Our Partners
              </span>
              <div className="h-1 w-12 bg-orange-600"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Proudly Associated With
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Building careers through industry partnerships and real-world connections.
            </p>
          </motion.div>

          {/* Auto-scrolling Partners Carousel */}
          <div className="relative overflow-hidden">
            {/* Left fade mask */}
            <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
            {/* Right fade mask */}
            <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
            
            <div className="flex overflow-hidden">
              <motion.div
                className="flex gap-12 items-center"
                animate={{
                  x: [0, -1200]
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear"
                  }
                }}
              >
                {[...partners, ...partners].map((partner, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-40 h-24 flex items-center justify-center"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain px-4"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section id="admissions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="h-1 w-12 bg-orange-600"></div>
              <span className="text-orange-600 font-bold tracking-wider uppercase text-sm">
                Admissions
              </span>
              <div className="h-1 w-12 bg-orange-600"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your Path To Enrollment
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to join the next intake and start building career-ready skills.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-orange-200 hover:shadow-lg transition"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <span className="text-sm font-semibold text-orange-600">Step {index + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Join hundreds of graduates who have transformed their lives through practical skills training
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-2xl">
                Apply Now
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition">
                Schedule a Visit
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* About */}
            <div className="md:col-span-2">
              <img
                src="/Jimmy Sekasi Business Institute Logo.png"
                alt="JSBI Logo"
                className="h-28 w-auto mb-4"
              />
              <p className="text-gray-400 mb-6">
                Empowering young men and women with contemporary skills for careers in 
                culinary arts, fashion, technology, and business.
              </p>
              <div className="social-icons flex flex-wrap items-center gap-3">
                <a href="https://discord.gg/ges" target="_blank" rel="noopener noreferrer" className="social-icon w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition text-white">
                  <FaDiscord className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/ges" target="_blank" rel="noopener noreferrer" className="social-icon w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition text-white">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/company/ges" target="_blank" rel="noopener noreferrer" className="social-icon w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition text-white">
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a href="https://slack.com/ges" target="_blank" rel="noopener noreferrer" className="social-icon w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition text-white">
                  <FaSlack className="w-5 h-5" />
                </a>
                <a href="https://youtube.com/@ges" target="_blank" rel="noopener noreferrer" className="social-icon w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition text-white">
                  <FaYoutube className="w-5 h-5" />
                </a>
                <a href="https://x.com/ges" target="_blank" rel="noopener noreferrer" className="social-icon w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition text-white">
                  <FaXTwitter className="w-5 h-5" />
                </a>
                <a href="https://wa.me/256" target="_blank" rel="noopener noreferrer" className="social-icon w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition text-white">
                  <FaWhatsapp className="w-5 h-5" />
                </a>
                <a href="https://t.me/ges" target="_blank" rel="noopener noreferrer" className="social-icon w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition text-white">
                  <FaTelegram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#programs" className="text-gray-400 hover:text-orange-500 transition">Programs</a></li>
                <li><a href="#faculty" className="text-gray-400 hover:text-orange-500 transition">Faculty</a></li>
                <li><a href="#admissions" className="text-gray-400 hover:text-orange-500 transition">Admissions</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-orange-500 transition">About Us</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-orange-500 transition">Contact</a></li>
                <li><a href="/blog" className="text-gray-400 hover:text-orange-500 transition">Blog</a></li>
                <li><a href="/students-guild" className="text-gray-400 hover:text-orange-500 transition">Students Guild</a></li>
              </ul>
            </div>

            {/* Contact */}
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

          {/* Bottom Bar */}
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

      {/* Apply Now Modal */}
      <AnimatePresence>
        {isApplyModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsApplyModalOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Apply Now</h2>
                <button
                  onClick={() => setIsApplyModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition"
                    placeholder="Enter your phone number"
                  />
                  <p className="text-xs text-gray-500 mt-1">Format: +256702456789</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition"
                    placeholder="Enter your email address"
                  />
                  <p className="text-xs text-gray-500 mt-1">Format: name@emailprovider.com</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Program</label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition"
                  >
                    <option value="">Choose a program</option>
                    {programs.map((prog) => (
                      <option key={prog.title} value={prog.title}>
                        {prog.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Upload Academic Documents</label>
                  <input
                    type="file"
                    name="documents"
                    onChange={handleFormChange}
                    accept=".pdf,.doc,.docx,.jpg,.png"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition"
                  />
                  <p className="text-xs text-gray-500 mt-1">Please merge documents into one file, no bigger than 4MBs</p>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition font-semibold"
                  >
                    Submit Application
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsApplyModalOpen(false)}
                    className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideoModal}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-black rounded-2xl shadow-2xl max-w-5xl w-full relative overflow-hidden flex flex-col"
            >
              <button
                onClick={closeVideoModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl z-10 bg-black/50 w-10 h-10 rounded-full flex items-center justify-center pb-1 leading-none"
              >
                &times;
              </button>
              {activeVideoSrc && (
                <video 
                  src={activeVideoSrc} 
                  controls 
                  autoPlay 
                  className="w-full h-auto max-h-[85vh] object-contain bg-black"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JSBI;
