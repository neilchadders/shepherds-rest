export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/lamb.jpg')",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-radial from-black/95 via-black/60 to-black/0"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-6xl w-full">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white flex items-center justify-center">
     
    <img 
      src="/images/shepherds-crook2.svg" 
      alt="Shepherd's Rest Logo" 
      className="w-10 h-10 md:w-12 md:h-12"
    />

            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-abeezee tracking-widest mb-6 md:mb-8">
            SHEPHERD'S REST
          </h1>

          {/* Subtitle */}
          <p className="text-sm md:text-lg tracking-wide mb-8 md:mb-12 px-4 md:px-8 leading-relaxed max-w-3xl mx-auto">
            PROVIDING SUPPORT AND REFUGE FOR THOSE IN NEED.
          </p>

          {/* Navigation Buttons */}
          <nav className="flex flex-col sm:flex-row justify-center gap-0 max-w-4xl mx-auto">
            <a 
              href="/about" 
              className="px-6 py-4 border border-white/80 hover:bg-white hover:text-gray-900 transition-all tracking-widest text-sm font-medium"
            >
              ABOUT
            </a>
            <a 
              href="/new" 
              className="px-6 py-4 border-x-0 sm:border-x border-y border-white/80 hover:bg-white hover:text-gray-900 transition-all tracking-widest text-sm font-medium"
            >
              NEWS
            </a>
            <a 
              href="/want-to-help" 
              className="px-6 py-4 border-x-0 sm:border-x border-y border-white/80 hover:bg-white hover:text-gray-900 transition-all tracking-widest text-sm font-medium"
            >
              HELP
            </a>
            <a 
              href="/contact" 
              className="px-6 py-4 border border-white/80 hover:bg-white hover:text-gray-900 transition-all tracking-widest text-sm font-medium"
            >
              CONTACT
            </a>
          </nav>
        </div>
      </section>
    </div>
  );
}