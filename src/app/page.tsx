'use client'

import { useState } from 'react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-powder-blue">
      {/* Swiss Design Navbar */}
      <nav className="mx-3 sm:mx-6 mt-3 sm:mt-6 px-4 sm:px-8 py-4 sm:py-6 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/20 relative z-30">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/pictures/Logo.png" alt="Veni Enterprises" className="h-8 sm:h-10 w-auto" />
          </div>
          
          {/* Right side content */}
          <div className="flex items-center gap-4 sm:gap-8">
            {/* Call Now */}
            <div className="hidden md:block">
              <div className="text-xs uppercase tracking-wider text-gray-500 font-medium">Call Now</div>
              <div className="text-sm font-semibold text-gray-900">(+91) 9176203070</div>
            </div>
            
            {/* Request Service Button */}
            <button className="hidden sm:block bg-gray-900 text-white px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors duration-200 rounded-lg">
              Request Service
            </button>
            
            {/* Hamburger Menu */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col justify-center items-center w-6 h-6 space-y-1 focus:outline-none group z-50 relative"
              aria-label="Toggle menu"
            >
              <div className={`w-5 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : 'group-hover:w-6'}`}></div>
              <div className={`w-4 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'group-hover:w-6'}`}></div>
              <div className={`w-5 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'group-hover:w-6'}`}></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay Menu */}
      <div className={`fixed inset-0 z-50 transition-all duration-500 ease-in-out ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        {/* Background Overlay */}
        <div 
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMenuOpen(false)}
        ></div>
        
        {/* Menu Content */}
        <div className={`absolute top-0 right-0 h-full w-full sm:max-w-md bg-white/95 backdrop-blur-md shadow-2xl transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full">
            {/* Menu Header */}
            <div className="px-4 sm:px-8 py-6 sm:py-8 border-b border-gray-200/50 flex justify-between items-center">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Menu</h2>
              {/* Close Button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200 group touch-manipulation"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Navigation Links */}
            <nav className="flex-1 px-4 sm:px-8 py-6 sm:py-8">
              <ul className="space-y-6 sm:space-y-8">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Products', href: '#products' },
                  { name: 'Gallery', href: '#gallery' },
                  { name: 'Contact', href: '#contact' }
                ].map((item, index) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block text-xl sm:text-2xl font-light text-gray-900 hover:text-gray-600 transition-colors duration-200 transform hover:translate-x-2 py-2 touch-manipulation ${isMenuOpen ? 'animate-slideInRight' : ''}`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* Menu Footer */}
            <div className="px-4 sm:px-8 py-6 sm:py-8 border-t border-gray-200/50">
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-gray-500 font-medium">Contact</div>
                  <div className="text-sm font-semibold text-gray-900">(+91) 9176203070</div>
                </div>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full bg-gray-900 text-white py-3 text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors duration-200 rounded-lg touch-manipulation"
                >
                  Request Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section - Swiss Design */}
      <section className="px-3 sm:px-6 py-8 sm:py-20 max-w-8xl mx-auto">
        <div className="grid grid-cols-12 gap-4 sm:gap-8 items-start">
          {/* Left Content */}
          <div className="col-span-12 lg:col-span-8 space-y-6 sm:space-y-12">
            {/* Subheading (Whisper Line) */}
            <div className="text-xs uppercase tracking-[0.2em] text-gray-600 font-medium">
              Build your dream pool.
            </div>
            
            {/* Main Heading */}
            <div className="space-y-2 sm:space-y-4">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-[0.85] tracking-[-0.02em]">
                <div>
                  <span className="text-gray-900">You think, </span>
                  <span className="text-gray-400">we</span>
                </div>
                <div>
                  <span className="text-gray-400">build </span>
                  <span className="text-gray-900">your dream</span>
                </div>
                <div className="text-gray-900">pool</div>
              </h1>
            </div>
            
            {/* Support Text */}
            <div className="pt-2 sm:pt-4">
              <p className="text-xs uppercase tracking-[0.15em] text-gray-600 font-medium max-w-xs">
                Expert swimming pool maintenance.
              </p>
            </div>
          </div>
          
          {/* Right Content - Mobile: Below main content, Desktop: Aligned with Support Text */}
          <div className="col-span-12 lg:col-span-4 lg:pt-[340px] mt-8 lg:mt-0">
            <div className="space-y-4 sm:space-y-6 text-left lg:text-right">
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 font-light max-w-sm lg:ml-auto">
                Owning a pool is a fun part,<br />
                let us handle the rest.
              </p>
              
              <div className="flex justify-start lg:justify-end">
                <button className="group inline-flex items-center gap-3 bg-gray-900 text-white px-6 sm:px-7 py-3 sm:py-3.5 text-xs uppercase tracking-[0.1em] font-medium hover:bg-gray-800 transition-all duration-200">
                  <span>Discover</span>
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="px-3 sm:px-6 py-8 sm:py-16 max-w-8xl mx-auto">
        <div className="grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-start">
          {/* Left Image - 4:5 Aspect Ratio */}
          <div className="col-span-12 md:col-span-5 lg:col-span-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <img 
                src="/pictures/hero-Pool 1.jpg" 
                alt="Swimming pool at Greater Noida, Uttar Pradesh"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-xs text-gray-600 font-medium">Greater Noida, Uttar Pradesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="col-span-12 md:col-span-7 lg:col-span-8">
            <div className="flex flex-col h-full justify-start">
              {/* Right Image - 3:2 Aspect Ratio (Smaller Rectangle) */}
              <div className="relative aspect-[3/2] overflow-hidden rounded-lg mb-4 sm:mb-6">
                <img 
                  src="/pictures/hero-Pool 2.jpg" 
                  alt="Swimming pool at Farm House, Bannargetta, Bangalore, Karnataka"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-xs text-gray-600 font-medium">Farm House, Bannargetta, Bangalore, Karnataka</p>
                  </div>
                </div>
              </div>

              {/* Gallery Button and Text */}
              <div className="flex items-center justify-between">
                {/* Dream Text */}
                <div className="flex-1">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                    <span className="text-gray-900">dream</span>
                  </h2>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                    <span className="text-gray-400">come true.</span>
                  </h2>
                </div>

                {/* Circular Gallery Button */}
                <div className="ml-6 sm:ml-8">
                  <button 
                    onClick={() => window.location.href = '/gallery'}
                    className="group w-16 h-16 sm:w-20 sm:h-20 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                    aria-label="View Gallery"
                  >
                    <svg 
                      className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:translate-x-0.5 transition-transform duration-200" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      strokeWidth="1.5"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" 
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}