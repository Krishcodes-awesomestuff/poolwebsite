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
            <a 
              href="mailto:venienter@gmail.com"
              className="hidden sm:block bg-gray-900 text-white px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors duration-200 rounded-lg"
            >
              Request Service
            </a>
            
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
                  { name: 'Services', href: '#projects' },
                  { name: 'Products', href: '#products' },
                  { name: 'Gallery', href: '#gallery' }
                ].map((item, index) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMenuOpen(false);
                        const element = document.querySelector(item.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
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
                <a 
                  href="mailto:venienter@gmail.com"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full bg-gray-900 text-white py-3 text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors duration-200 rounded-lg touch-manipulation text-center"
                >
                  Request Service
                </a>
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

      {/* About Section */}
      <section id="about" className="px-3 sm:px-6 py-8 sm:py-20 max-w-8xl mx-auto">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Image */}
          <div className="col-span-12 lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img 
                src="/pictures/about-pool.jpg" 
                alt="Pool construction and maintenance services"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  <p className="text-sm text-gray-700 font-medium">Our schedule maintenance services.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-span-12 lg:col-span-6 space-y-6 sm:space-y-8">
            {/* Small Welcome Text */}
            <div className="text-sm uppercase tracking-[0.2em] text-gray-600 font-medium">
              Welcome to Swim Design.
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-[-0.02em]">
                <span className="text-gray-900">Simplify </span>
                <span className="text-gray-400">Pool</span>
              </h2>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-[-0.02em]">
                <span className="text-gray-400">Maintenance </span>
                <span className="text-gray-900">with Our</span>
              </h2>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-[-0.02em]">
                <span className="text-gray-900">Expert Services.</span>
              </h2>
            </div>
            
            {/* Paragraph */}
            <div className="pt-4">
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 font-light max-w-lg">
                Many health clubs, fitness centers and private clubs, such as the YMCA, 
                have pools used mostly for exercise or recreation. Many towns and cities 
                provide public pools. Many hotels have pools available for their guests to 
                use at their leisure.
              </p>
            </div>
            
            {/* Service Points */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3">
                <div className="text-blue-600 font-bold text-lg">/</div>
                <p className="text-gray-900 font-medium">Regular Cleaning and Skimming.</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-blue-600 font-bold text-lg">/</div>
                <p className="text-gray-900 font-medium">Brushing and Vacuuming.</p>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="pt-6">
              <button 
                onClick={() => window.location.href = '/gallery'}
                className="group inline-flex items-center gap-3 bg-transparent border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full text-sm font-medium tracking-wide hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                <span>More About Us</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Statistics Strip Section - Swiss Design */}
      <section className="mx-3 sm:mx-6 my-16 sm:my-24">
        <div className="rounded-none sm:rounded-3xl px-8 sm:px-16 py-12 sm:py-20" style={{ backgroundColor: '#87CEEB' }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 sm:gap-20 max-w-6xl mx-auto">
            
            {/* Feature 1 - Experience */}
            <div className="flex items-start gap-6">
              {/* Icon */}
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border border-gray-200 flex-shrink-0">
                <img src="/pictures/ribbon.png" alt="Achievement ribbon" className="w-10 h-10 object-contain" />
              </div>
              
              {/* Typography */}
              <div className="space-y-3 flex-1">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-gray-900 uppercase tracking-[0.1em] leading-tight">
                    25 Years of Experience
                  </h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed max-w-xs italic">
                  For over 25 years we have been offering only the best products and services.
                </p>
              </div>
            </div>

            {/* Feature 2 - Quality Products */}
            <div className="flex items-start gap-6">
              {/* Icon */}
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border border-gray-200 flex-shrink-0">
                <img src="/pictures/ribbon.png" alt="Achievement ribbon" className="w-10 h-10 object-contain" />
              </div>
              
              {/* Typography */}
              <div className="space-y-3 flex-1">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-gray-900 uppercase tracking-[0.1em] leading-tight">
                    Quality Products<br />Delivered by Us
                  </h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed max-w-xs italic">
                  Your satisfaction is our priority. If you&apos;re not completely happy with our service, we&apos;ll work.
                </p>
              </div>
            </div>

            {/* Feature 3 - Support */}
            <div className="flex items-start gap-6">
              {/* Icon */}
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border border-gray-200 flex-shrink-0">
                <img src="/pictures/ribbon.png" alt="Achievement ribbon" className="w-10 h-10 object-contain" />
              </div>
              
              {/* Typography */}
              <div className="space-y-3 flex-1">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-gray-900 uppercase tracking-[0.1em] leading-tight">
                    24/7 Hours<br />Client Support
                  </h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed max-w-xs italic">
                  We offer flexible service plans that can be tailored to your specific preferences and pool.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Categories of Specialization Section */}
      <section className="px-3 sm:px-6 py-12 sm:py-20 max-w-8xl mx-auto">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
          
          {/* Left Content */}
          <div className="col-span-12 lg:col-span-5 space-y-6 sm:space-y-8">
            {/* Main Heading */}
            <div className="space-y-2">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-[-0.02em]">
                <span className="text-gray-900">Our<br />categories of<br /></span>
                <span className="text-gray-400">Specialization.</span>
              </h2>
            </div>
            
            {/* Description Paragraph */}
            <div className="pt-2 sm:pt-4">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-sm font-light">
                Each pool is different. We can customize your service to fit your location&apos;s needs. We can also offer services that are completely unique to your area!
              </p>
            </div>
          </div>

          {/* Right Content - Service Cards */}
          <div className="col-span-12 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Residential Pool Services */}
            <div className="relative group">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <img 
                  src="/pictures/section-pool1.png" 
                  alt="Residential Pool Services"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
              </div>
              
              {/* Title */}
              <div className="mt-4">
                <h3 className="text-xl sm:text-2xl font-medium text-gray-900">
                  Residential Pool Services
                </h3>
              </div>
            </div>

            {/* Commercial Pool Services */}
            <div className="relative group">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <img 
                  src="/pictures/section-pool2.png" 
                  alt="Commercial Pool Services"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
              </div>
              
              {/* Title */}
              <div className="mt-4">
                <h3 className="text-xl sm:text-2xl font-medium text-gray-900">
                  Commercial Pool Services
                </h3>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Services Section - Swiss Design */}
      <section id="projects" className="px-3 sm:px-6 py-12 sm:py-20 max-w-8xl mx-auto">
        {/* Header */}
        <div className="mb-16 sm:mb-20">
          <div className="text-xs uppercase tracking-[0.2em] text-gray-600 font-medium mb-6">
            What we offer.
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] tracking-[-0.02em] text-gray-900">
            Our Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          
          {/* Building New Pool */}
          <div className="group">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/95 transition-all duration-300">
              <div className="space-y-6">
                {/* Content */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">01</div>
                    <h3 className="text-xl sm:text-2xl font-light text-gray-900 leading-tight">
                      Building New Pool
                    </h3>
                  </div>
                  
                  <p className="text-sm text-gray-600 leading-relaxed font-light max-w-xs">
                    Custom pool construction with modern designs and premium materials for your dream pool.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pool Repair */}
          <div className="group">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/95 transition-all duration-300">
              <div className="space-y-6">
                {/* Content */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">02</div>
                    <h3 className="text-xl sm:text-2xl font-light text-gray-900 leading-tight">
                      Pool Repair
                    </h3>
                  </div>
                  
                  <p className="text-sm text-gray-600 leading-relaxed font-light max-w-xs">
                    Expert repair services to fix leaks, cracks, and equipment issues quickly and efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pool Maintenance */}
          <div className="group">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/95 transition-all duration-300">
              <div className="space-y-6">
                {/* Content */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">03</div>
                    <h3 className="text-xl sm:text-2xl font-light text-gray-900 leading-tight">
                      Pool Maintenance
                    </h3>
                  </div>
                  
                  <p className="text-sm text-gray-600 leading-relaxed font-light max-w-xs">
                    Regular cleaning, chemical balancing, and upkeep to keep your pool pristine year-round.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Equipment Installation */}
          <div className="group">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/95 transition-all duration-300">
              <div className="space-y-6">
                {/* Content */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">04</div>
                    <h3 className="text-xl sm:text-2xl font-light text-gray-900 leading-tight">
                      Equipment Installation
                    </h3>
                  </div>
                  
                  <p className="text-sm text-gray-600 leading-relaxed font-light max-w-xs">
                    Professional installation of pumps, filters, heaters, and automation systems for optimal performance.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Our Products Section */}
      <section id="products" className="px-3 sm:px-6 py-12 sm:py-20 max-w-8xl mx-auto">
        {/* Header */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] tracking-[-0.02em] text-gray-900">
            Our Products
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          {/* Product 1 - Cleaning Accessories */}
          <div className="group">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/95 transition-all duration-300">
              {/* Product Image */}
              <div className="aspect-square p-8 bg-gradient-to-br from-gray-50 to-gray-100">
                <img 
                  src="/pictures/product1.png" 
                  alt="Cleaning Accessories"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Product Label */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium mb-2">01</div>
                  <h3 className="text-lg font-light text-gray-900">Cleaning Accessories</h3>
                </div>
                
                {/* CTA Button */}
                <button 
                  onClick={() => window.location.href = '/products'}
                  className="w-full bg-gray-900 text-white py-3 text-sm font-medium hover:bg-gray-800 transition-colors duration-200 uppercase tracking-[0.1em]"
                >
                  See More
                </button>
              </div>
            </div>
          </div>

          {/* Product 2 - Swimming Pool Chemicals */}
          <div className="group">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/95 transition-all duration-300">
              {/* Product Image */}
              <div className="aspect-square p-8 bg-gradient-to-br from-gray-50 to-gray-100">
                <img 
                  src="/pictures/product2.png" 
                  alt="Swimming Pool Chemicals"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Product Label */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium mb-2">02</div>
                  <h3 className="text-lg font-light text-gray-900">Swimming Pool Chemicals</h3>
                </div>
                
                {/* CTA Button */}
                <button 
                  onClick={() => window.location.href = '/products'}
                  className="w-full bg-gray-900 text-white py-3 text-sm font-medium hover:bg-gray-800 transition-colors duration-200 uppercase tracking-[0.1em]"
                >
                  See More
                </button>
              </div>
            </div>
          </div>

          {/* Product 3 - Water Proofing Materials */}
          <div className="group">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/95 transition-all duration-300">
              {/* Product Image */}
              <div className="aspect-square p-8 bg-gradient-to-br from-gray-50 to-gray-100">
                <img 
                  src="/pictures/product3.png" 
                  alt="Water Proofing Materials"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Product Label */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium mb-2">03</div>
                  <h3 className="text-lg font-light text-gray-900">Water Proofing Materials</h3>
                </div>
                
                {/* CTA Button */}
                <button 
                  onClick={() => window.location.href = '/products'}
                  className="w-full bg-gray-900 text-white py-3 text-sm font-medium hover:bg-gray-800 transition-colors duration-200 uppercase tracking-[0.1em]"
                >
                  See More
                </button>
              </div>
            </div>
          </div>

          {/* Product 4 - Others */}
          <div className="group">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/95 transition-all duration-300">
              {/* Product Image */}
              <div className="aspect-square p-8 bg-gradient-to-br from-gray-50 to-gray-100">
                <img 
                  src="/pictures/product4.png" 
                  alt="Others"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Product Label */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium mb-2">04</div>
                  <h3 className="text-lg font-light text-gray-900">Others</h3>
                </div>
                
                {/* CTA Button */}
                <button 
                  onClick={() => window.location.href = '/products'}
                  className="w-full bg-gray-900 text-white py-3 text-sm font-medium hover:bg-gray-800 transition-colors duration-200 uppercase tracking-[0.1em]"
                >
                  See More
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Gallery Section - Swiss Design */}
      <section id="gallery" className="px-3 sm:px-6 py-12 sm:py-20 max-w-8xl mx-auto">
        {/* Header */}
        <div className="mb-16 sm:mb-20">
          <div className="text-xs uppercase tracking-[0.2em] text-gray-600 font-medium mb-6">
            Our work.
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] tracking-[-0.02em] text-gray-900">
            Gallery
          </h2>
        </div>

        {/* Gallery Grid - 3 columns, 2 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          
          {/* Image 1 */}
          <div className="group">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img 
                src="/pictures/1.jpg" 
                alt="Swimming pool project showcase"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
          </div>

          {/* Image 2 */}
          <div className="group">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img 
                src="/pictures/2.jpg" 
                alt="Swimming pool project showcase"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
          </div>

          {/* Image 3 */}
          <div className="group">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img 
                src="/pictures/3.jpg" 
                alt="Swimming pool project showcase"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
          </div>

          {/* Image 4 */}
          <div className="group">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img 
                src="/pictures/4.jpg" 
                alt="Swimming pool project showcase"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
          </div>

          {/* Image 5 */}
          <div className="group">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img 
                src="/pictures/5.jpeg" 
                alt="Swimming pool project showcase"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
          </div>

          {/* Image 6 */}
          <div className="group">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img 
                src="/pictures/6.jpeg" 
                alt="Swimming pool project showcase"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
          </div>

        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button 
            onClick={() => window.location.href = '/gallery'}
            className="group inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 text-sm font-medium hover:bg-gray-800 transition-colors duration-200 uppercase tracking-[0.1em]"
          >
            <span>View More</span>
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </section>

      {/* Contact Us Section - Swiss Design */}
      <section className="mx-3 sm:mx-6 my-12 sm:my-20">
        <div className="bg-white rounded-none sm:rounded-3xl px-8 sm:px-16 py-12 sm:py-20">
          <div className="max-w-8xl mx-auto">
            {/* Header */}
            <div className="mb-16 sm:mb-20">
              <div className="text-xs uppercase tracking-[0.2em] text-gray-600 font-medium mb-6">
                Get in touch.
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] tracking-[-0.02em] text-gray-900">
                Contact Us
              </h2>
            </div>

            {/* Contact Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
              
              {/* Left Content */}
              <div className="space-y-8 sm:space-y-12">
                {/* Contact Info */}
                <div className="space-y-6">
                  <div>
                    <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium mb-2">Phone</div>
                    <p className="text-xl sm:text-2xl font-light text-gray-900">(+91) 9176203070</p>
                  </div>
                  
                  <div>
                    <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium mb-2">Email</div>
                    <p className="text-xl sm:text-2xl font-light text-gray-900">venienter@gmail.com</p>
                  </div>
                </div>

                {/* Mail Button */}
                <div className="pt-4">
                  <a 
                    href="mailto:venienter@gmail.com"
                    className="group inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 text-sm font-medium hover:bg-gray-800 transition-colors duration-200 uppercase tracking-[0.1em]"
                  >
                    <span>Send Email</span>
                    <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Content */}
              <div className="space-y-6">
                <div className="text-lg sm:text-xl font-light text-gray-700 leading-relaxed">
                  Ready to transform your pool experience? Get in touch with our team of experts today.
                </div>
                
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                  <p>We&apos;re here to help with all your swimming pool needs, from maintenance to complete installations.</p>
                  <p>Our experienced team is available 24/7 to provide you with the best service and support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 sm:mt-32">
        <div className="mx-3 sm:mx-6 mb-3 sm:mb-6">
          <div className="rounded-none sm:rounded-3xl bg-gray-900 px-8 sm:px-16 py-12 sm:py-16">
            <div className="max-w-6xl mx-auto">
              
              {/* Main Footer Text */}
              <div className="mb-8 sm:mb-12 text-center">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-[0.1em] uppercase">
                  Swim Designers
                </h3>
              </div>

              {/* Footer Content - Social Icons and Quick Links */}
              <div className="flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-12 mb-8 sm:mb-12">
                
                {/* Left Side - Social Icons */}
                <div className="space-y-4">
                  <div className="text-xs uppercase tracking-wider text-gray-400 font-medium">Connect With Us</div>
                  <div className="flex gap-4">
                    {/* Email Icon */}
                    <a 
                      href="mailto:venienter@gmail.com"
                      className="w-12 h-12 bg-gray-800 hover:bg-white rounded-full flex items-center justify-center transition-colors duration-200 group"
                    >
                      <svg className="w-6 h-6 text-gray-400 group-hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </a>
                    
                    {/* Phone Icon */}
                    <a 
                      href="tel:+919176203070"
                      className="w-12 h-12 bg-gray-800 hover:bg-white rounded-full flex items-center justify-center transition-colors duration-200 group"
                    >
                      <svg className="w-6 h-6 text-gray-400 group-hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Right Side - Quick Links */}
                <div className="space-y-4">
                  <div className="text-xs uppercase tracking-wider text-gray-400 font-medium">Quick Links</div>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                    {[
                      { name: 'About', href: '#about' },
                      { name: 'Services', href: '#projects' },
                      { name: 'Products', href: '#products' },
                      { name: 'Gallery', href: '#gallery' }
                    ].map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          const element = document.querySelector(item.href);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="block text-sm text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Copyright */}
              <div className="pt-8 sm:pt-12 border-t border-gray-800 text-center">
                <p className="text-sm text-gray-400 font-light tracking-wide">
                  © 2025 Veni Enterprises. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}