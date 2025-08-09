import { motion } from 'framer-motion'
import { BentoCard, BentoGrid } from './components/ui/bento-grid'
import { TextReveal } from './components/ui/text-reveal'
import { Marquee } from './components/ui/marquee'
import { RainbowButton } from './components/ui/rainbow-button'
import { useState } from 'react'
import './App.css'

function App() {
  const [uploadedFile, setUploadedFile] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      setUploadedFile(file)
      setIsLoading(true)
      
      // Simulate loading for 3 seconds
      setTimeout(() => {
        setIsLoading(false)
      }, 3000)
    }
  }

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      {/* Top Banner */}
      <motion.div 
        className="bg-orange-500 text-white text-center py-2 text-sm font-medium"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🚀 Transform your audio into perfect tanglish captions in seconds
      </motion.div>

      {/* Header Navigation */}
      <motion.nav 
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
              className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">t</span>
              </div>
              <span className="text-lg sm:text-xl font-bold">
                <span className="text-orange-500">tanglish</span>
                <span className="text-black">captions</span>
              </span>
          </motion.div>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <motion.a 
                href="#" 
                className="text-gray-600 hover:text-orange-500 transition-colors font-medium"
                whileHover={{ y: -2 }}
              >
                Features
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-600 hover:text-orange-500 transition-colors font-medium"
                whileHover={{ y: -2 }}
              >
                Pricing
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-600 hover:text-orange-500 transition-colors font-medium"
                whileHover={{ y: -2 }}
              >
                Docs
              </motion.a>
            </div>

            {/* Desktop Sign In Button */}
            <div className="hidden md:block">
              <motion.button 
                className="bg-white text-black px-6 py-2 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign In
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div 
              className="md:hidden mt-4 py-4 border-t border-gray-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-4">
                <a href="#" className="block text-gray-600 hover:text-orange-500 transition-colors font-medium">
                  Features
                </a>
                <a href="#" className="block text-gray-600 hover:text-orange-500 transition-colors font-medium">
                  Pricing
                </a>
                <a href="#" className="block text-gray-600 hover:text-orange-500 transition-colors font-medium">
                  Docs
                </a>
                <button className="w-full bg-white text-black px-6 py-2 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors text-center">
                  Sign In
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              className="space-y-4 sm:space-y-6 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >

              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="block text-black">Stop Wasting</span>
                <span className="block">
                  <span className="underline decoration-orange-500 decoration-2 sm:decoration-4 underline-offset-4">4</span> hours captioning your{' '}
                  <span className="underline decoration-orange-500 decoration-2 sm:decoration-4 underline-offset-4">40</span>s reels
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Transform your Tamil and English audio into perfect tanglish captions. Available in .srt and format.
              </motion.p>

              {/* Upload Input */}
            </motion.div>

            {/* Right Side - Upload Area */}
            <motion.div
              className="flex justify-center mt-8 lg:mt-0 lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="w-full max-w-lg mx-auto lg:mx-0">
                {!uploadedFile ? (
                  <motion.label 
                    className="block bg-gray-50 border-2 border-dashed border-gray-300 rounded-2xl p-6 sm:p-8 text-center hover:border-orange-400 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <input 
                      type="file" 
                      className="hidden" 
                      accept="video/*,audio/*"
                      onChange={handleFileUpload}
                    />
                    <motion.div
                      className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </motion.div>
                  
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-900">Upload your video or audio</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                      Drag and drop your video/audio file here (max 50MB), or click to browse
                    </p>
                  
                    <div className="text-xs sm:text-sm text-gray-500">
                      Available in .srt and format
                    </div>
                  </motion.label>
                ) : (
                  <motion.div
                    className="bg-white border-2 border-orange-200 rounded-2xl p-8 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Stock Photo or File Icon */}
                    {isLoading ? (
                      <div className="w-48 h-32 mx-auto mb-4 rounded-lg overflow-hidden shadow-lg">
                        <img 
                          src="/Hi.jpg" 
                          alt="Processing preview" 
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    )}
                    
                    {/* File Name */}
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{uploadedFile.name}</h3>
                    
                    {/* File Path Display */}
                    <div className="text-sm text-gray-600 mb-6 bg-gray-50 p-3 rounded-lg font-mono">
                      C:\Cursor\{uploadedFile.name}
                    </div>
                    
                    {/* Loading Section */}
                    {isLoading && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"></div>
                          <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                        <p className="text-gray-600">Processing your file...</p>
                      </div>
                    )}
                    
                    {!isLoading && (
                      <div className="text-green-600 font-semibold">
                        ✓ File uploaded successfully!
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-4 text-sm sm:text-base">
              <span className="text-black">Backed by</span>
              <div className="bg-orange-500 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-semibold">Y</div>
              <span className="text-orange-500 font-semibold">Combinator</span>
            </div>
            <div className="flex items-center justify-center space-x-1 sm:space-x-2 text-sm sm:text-base">
              <span className="text-black">Rated 4.9</span>
              <span className="text-yellow-500">★</span>
              <span className="text-black">on</span>
              <span className="text-red-500 font-semibold">G2.com</span>
            </div>
          </motion.div>

          {/* Company Grid with Lines */}
          <motion.div
            className="relative w-full h-[400px] sm:h-[450px] md:h-[375px] max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Grid Lines */}
            <div className="absolute inset-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-rows-6 sm:grid-rows-4 md:grid-rows-3 gap-0">
              {Array.from({ length: 24 }, (_, i) => {
                // Calculate which cells need borders based on grid position
                const isMobile = true; // Will be handled by responsive classes
                
                return (
                  <div 
                    key={i} 
                    className="border-gray-300 border-r border-b last:border-r-0 [&:nth-child(2n)]:border-r-0 sm:[&:nth-child(2n)]:border-r sm:[&:nth-child(3n)]:border-r-0 md:[&:nth-child(3n)]:border-r md:[&:nth-child(4n)]:border-r-0 [&:nth-last-child(-n+2)]:border-b-0 sm:[&:nth-last-child(-n+3)]:border-b-0 md:[&:nth-last-child(-n+4)]:border-b-0"
                  ></div>
                );
              })}
            </div>

            {/* Company Names */}
            <div className="absolute inset-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-rows-6 sm:grid-rows-4 md:grid-rows-3 gap-0">
              {[
                "phenom",
                "GLOBAL PARTNERS", 
                "smartsheet",
                "Personio",
                "UiPath",
                "duda",
                "darwinbox", 
                "MOVABLE INK",
                "KEYFACTOR",
                "moengage",
                "fireflies.ai",
                "PLEO"
              ].map((company, index) => (
                <motion.div
                  key={company}
                  className="flex items-center justify-center p-2 sm:p-3 md:p-4 cursor-pointer group hover:bg-orange-50 transition-all duration-300 hover:shadow-lg hover:z-10 relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, z: 10, y: -4 }}
                >
                  <span className="text-gray-700 font-semibold text-xs sm:text-sm md:text-lg group-hover:text-orange-600 group-hover:font-bold transition-all duration-300 text-center leading-tight">
                    {company}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section with Bento Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-6 sm:mb-8 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-orange-500 text-sm font-medium mb-4">Zero Configuration</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">We handle the hard stuff</h2>
            <p className="text-gray-600 text-base sm:text-lg">
              AI-powered transcription, translation, and formatting - all automated.
            </p>
          </motion.div>

          <BentoGrid className="mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:auto-rows-[20rem]">
            {[
              {
                Icon: () => (
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  </div>
                ),
                name: "Smart Transcription",
                description: "AI accurately transcribes Tamil and English audio with context awareness.",
                href: "#",
                cta: "Learn more",
                className: "col-span-1",
                background: (
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 opacity-50" />
                )
              },
              {
                Icon: () => (
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                ),
                name: "Auto Translation",
                description: "Seamlessly converts between Tamil, English, and Tanglish formats.",
                href: "#",
                cta: "Learn more",
                className: "col-span-1 sm:col-span-2",
                background: (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 opacity-50" />
                )
              },
              {
                Icon: () => (
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                ),
                name: "Instant Processing",
                description: "Get your captions in seconds, not hours. Real-time preview available.",
                href: "#",
                cta: "Learn more",
                className: "col-span-1 sm:col-span-2",
                background: (
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200 opacity-50" />
                )
              },
              {
                Icon: () => (
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                    </svg>
                  </div>
                ),
                name: "Custom Styling",
                description: "Format captions with your brand colors, fonts, and positioning.",
                href: "#",
                cta: "Learn more", 
                className: "col-span-1",
                background: (
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200 opacity-50" />
                )
              },
              {
                Icon: () => (
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                ),
                name: "Multi-Platform",
                description: "Export to SRT, VTT, or custom formats for any platform.",
                href: "#",
                cta: "Learn more",
                className: "col-span-1",
                background: (
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-green-100 to-green-200 opacity-50" />
                )
              },
              {
                Icon: () => (
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                ),
                name: "Secure & Private",
                description: "Your audio is processed securely and never stored permanently.",
                href: "#",
                cta: "Learn more",
                className: "col-span-1 sm:col-span-2",
                background: (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 opacity-50" />
                )
              }
            ].map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <Marquee pauseOnHover className="[--duration:60s]">
            {[
              {
                quote: "Tanglish Captions has revolutionized our content creation process!",
                author: "Alex Fazio",
                role: "Content Creator"
              },
              {
                quote: "I found gold today. Thank you @tanglishcaptions",
                author: "Matt Busigin",
                role: "Video Producer"
              },
              {
                quote: "Moved our captioning workflow from hours to minutes. Game changer!",
                author: "Sarah Chen",
                role: "Content Director"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="mx-2 sm:mx-4 bg-white border border-gray-200 rounded-lg p-4 sm:p-6 w-72 sm:w-80 flex-shrink-0"
              >
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-black text-sm sm:text-base">{testimonial.author}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Large Testimonial Section */}
      <section className="py-12 sm:py-16 md:py-20 flex items-center justify-center px-4 sm:px-6 bg-gray-50">
        <div className="max-w-5xl w-full flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8">
          <div className="w-full max-w-2xl">
            <div className="space-y-0 leading-tight">
              <TextReveal 
                text="Tanglish Captions revolutionized" 
                className="text-center font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900"
              />
              <TextReveal 
                text="our workflow making subtitles" 
                className="text-center font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900"
              />
              <TextReveal 
                text="20x faster than ever before" 
                className="text-center font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900"
              />
            </div>
          </div>
          
          <motion.div 
            className="bg-white rounded-lg p-4 sm:p-6 shadow-sm w-full max-w-sm sm:max-w-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col space-y-3 sm:space-y-4">
              <div className="flex items-center justify-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm sm:text-base">S</span>
                </div>
              </div>
              <div className="text-center">
                <p className="font-bold text-black text-base sm:text-lg">Sean O'Donnell</p>
                <p className="text-gray-600 text-xs sm:text-sm">Director of Product Management, Phenom</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Flexible Pricing</h2>
            <p className="text-gray-600 text-base sm:text-lg">Start for free, then scale as you grow</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              {
                name: "Free",
                credits: "500 credits",
                price: "$0",
                popular: false,
                features: ["Scrape 500 pages", "2 concurrent browsers", "Low Rate Limits"]
              },
              {
                name: "Hobby",
                credits: "3,000 credits per month",
                price: "$16 /month",
                popular: false,
                features: ["Scrape 3,000 pages", "5 concurrent browsers"]
              },
              {
                name: "Standard",
                credits: "100,000 credits per month",
                price: "$83 /month",
                popular: true,
                features: ["Scrape 100,000 pages", "50 concurrent browsers", "Standard Support"]
              },
              {
                name: "Growth",
                credits: "500,000 credits per month",
                price: "$333 /month",
                popular: false,
                features: ["Scrape 500,000 pages", "100 concurrent browsers", "Priority Support"]
              }
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`bg-white rounded-lg p-6 ${plan.popular ? 'ring-2 ring-orange-500' : ''}`}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {plan.popular && (
                  <div className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-2">{plan.price}</div>
                <div className="text-gray-600 mb-4">{plan.credits}</div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button 
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-orange-500 text-white hover:bg-orange-600' 
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* New CTA Section - Rounded Box */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-800">
            {/* Background Image with proper clipping and mobile fitting */}
            <img 
              src="/Autumn.png" 
              alt="Autumn background" 
              className="absolute inset-0 w-full h-full object-cover object-center"
              style={{ 
                borderRadius: 'inherit',
                clipPath: 'inset(0 round 1rem)',
                objectFit: 'cover'
              }}
            />
            
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40 rounded-2xl sm:rounded-3xl"></div>
            
            {/* Content Overlay - Fixed positioning for mobile */}
            <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
              <motion.div
                className="space-y-4 sm:space-y-6 max-w-sm text-center z-10 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-2xl">
                  Start captioning now
                </h2>
                <p className="text-sm sm:text-base text-white/95 leading-relaxed drop-shadow-2xl">
                  Transform your audio into perfect tanglish captions in seconds. Get started with our free plan and experience AI-powered accuracy.
                </p>
                <div className="flex justify-center">
                  <RainbowButton size="lg" className="text-base sm:text-lg font-semibold">
                    Begin now
                  </RainbowButton>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">t</span>
                </div>
                <span className="text-lg sm:text-xl font-bold">
                  <span className="text-orange-500">tanglish</span>
                  <span className="text-white">captions</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">
                Transform your audio into perfect tanglish captions with AI-powered accuracy.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-sm sm:text-base">Product</h3>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-sm sm:text-base">Company</h3>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-sm sm:text-base">Support</h3>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400">
            <p className="text-sm sm:text-base">&copy; 2024 Tanglish Captions. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App