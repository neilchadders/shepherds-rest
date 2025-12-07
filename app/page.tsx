export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">

        {/* Background Image */}
<div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-zoomSlow"
  style={{
    backgroundImage: "url('/images/lamb.jpg')",
  }}
>
  {/* Dark-to-light fade overlay */}
  <div className="absolute inset-0 bg-black animate-bgDarkFade"></div>

  {/* Vignette Overlay */}
  <div className="absolute inset-0 bg-gradient-radial from-black/95 via-black/60 to-black/0"></div>
</div>


        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-6xl w-full animate-fadeUp">
          
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white flex items-center justify-center p-3 bg-dark/0">
              <img 
                src="/images/shepherds-crook2.svg" 
                alt="Shepherd's Rest Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Decorative Lines */}
          <div className="hidden md:flex items-center justify-center mb-8">
            <div className="h-px bg-white/60 flex-1 max-w-xs"></div>
            <div className="w-px h-20 bg-white/60 mx-4"></div>
            <div className="h-px bg-white/60 flex-1 max-w-xs"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-abeezee tracking-widest mb-6 md:mb-8">
            THE<br/> SHEPHERD'S REST
          </h1>

          {/* Subtitle */}
          <p className="text-sm md:text-lg tracking-wide mb-8 md:mb-12 px-4 md:px-8 leading-relaxed max-w-3xl mx-auto">
            PROVIDING SUPPORT AND REFUGE FOR THOSE IN NEED.
            <br className="hidden sm:block" />
            <span className="block sm:inline">
              BUILT ON COMPASSION, COMMUNITY, AND CARE.
            </span>
          </p>

          {/* Decorative Lines */}
          <div className="hidden md:flex items-center justify-center mb-12">
            <div className="h-px bg-white/60 flex-1 max-w-xs"></div>
            <div className="w-px h-20 bg-white/60 mx-4"></div>
            <div className="h-px bg-white/60 flex-1 max-w-xs"></div>
          </div>

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
              href="/volunteer" 
              className="px-6 py-4 border-x-0 sm:border-x border-y border-white/80 hover:bg-white hover:text-gray-900 transition-all tracking-widest text-sm font-medium"
            >
              VOLUNTEER
            </a>
            <a 
              href="/contact" 
              className="px-6 py-4 border-x-0 sm:border-x border-y border-white/80 hover:bg-white hover:text-gray-900 transition-all tracking-widest text-sm font-medium"
            >
              CONTACT
            </a>
            <a 
              href="/donate" 
              className="px-6 py-4 border border-white/80 bg-white/10 hover:bg-white hover:text-gray-900 transition-all tracking-widest text-sm font-medium"
            >
              DONATE
            </a>
          </nav>
        </div>

        {/* Footer */}
        <div className="absolute bottom-4 md:bottom-8 left-0 right-0 text-center text-white/70 text-xs tracking-wider px-4">
          © SHEPHERD'S REST. ALL RIGHTS RESERVED. BUILT BY NEIL CHADWICK.
        </div>
      </section>
    </div>
  );
}
