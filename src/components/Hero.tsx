import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import FloatingElements from './FloatingElements';
import K8sTechBackground from './K8sTechBackground';
// import K8s3DLogoBackground from './K8s3DLogoBackground';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center overflow-hidden" id='hero'>
      {/* Technical Animated Kubernetes Background */}
      <K8sTechBackground />
      <FloatingElements />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12" >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Master <span className="text-k8s-blue">Kubernetes.</span>
            <br />
            Deploy Like a <span className="text-transparent bg-clip-text bg-gradient-to-r from-k8s-blue to-blue-400">Pro.</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            Learn Kubernetes from Scratch to Production in Just <span className="text-k8s-blue font-semibold">2 Days</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 px-2"
        >
          <a
            href="https://rzp.io/rzp/pPLy6W4x"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-k8s-blue hover:bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center w-full sm:w-auto justify-center"
          >
            <span className="text-center">Register for Day 1 – ₹2500</span>
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" size={18} />
          </a>

          <a
            href="https://rzp.io/rzp/iVAwPNX"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 border border-white/20 flex items-center w-full sm:w-auto justify-center"
          >
            <span className="text-center">Register for Day 1 & 2 – ₹4500</span>
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" size={18} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-2"
        >
          {[
            { number: "2", label: "Days", sublabel: "Intensive Training" },
            { number: "16", label: "Hours", sublabel: "Complete Coverage" },
            { number: "100+", label: "Students", sublabel: "Success Stories" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
              <div className="text-white font-semibold text-sm sm:text-base">{stat.label}</div>
              <div className="text-gray-300 text-xs sm:text-sm">{stat.sublabel}</div>
            </div>
          ))}
        </motion.div>

        {/* Mobile-specific spacing adjustment */}
        <div className="h-8 sm:h-0"></div>
      </div>
    </section>
  );
};

export default Hero;