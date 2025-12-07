export default function About() {
  return (
    <div className="bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section with Image */}
      <div className="relative h-96 overflow-hidden">
        <img
          src="/images/cows2.jpg"
          alt="Peaceful countryside with cattle"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">The Shepherd's Rest</h1>
            <p className="text-xl md:text-2xl font-light">A Faith-Led Farm for Healing and Recovery</p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="mb-8">
          <div className="inline-block bg-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            OUR MISSION
          </div>
        </div>
        <p className="text-2xl text-gray-700 leading-relaxed mb-8">
          To provide a faith-based sanctuary where people can reconnect with nature, rediscover purpose, 
          and experience healing through the love of God, the land, and one another.
        </p>
        <div className="w-24 h-1 bg-green-600 mx-auto"></div>
      </div>

      {/* Core Values */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Faith</h3>
              <p className="text-gray-600">Guided by Christian compassion and prayer</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-gray-600">Everyone is welcomed, valued, and supported</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Restoration</h3>
              <p className="text-gray-600">Healing the mind, body, and spirit</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Dignity</h3>
              <p className="text-gray-600">Every person deserves respect, care, and hope</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Stewardship</h3>
              <p className="text-gray-600">Caring for the land and animals as part of God's creation</p>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do */}
      <div className="py-16 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Addiction Recovery */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Addiction Recovery Through Farming</h3>
                <p className="text-gray-600 mb-4">
                  A structured rehabilitation program combining farm work, counselling, and faith-based mentoring. 
                  Participants engage in daily farming activities—caring for animals, tending crops, and maintaining the land.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Healing through work, nature, and faith
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Weekly counselling and group sessions
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Rebuilding confidence, routine, and purpose
                  </li>
                </ul>
              </div>
            </div>

            {/* Rest and Renewal */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-600"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Rest and Renewal Retreat</h3>
                <p className="text-gray-600 mb-4">
                  A peaceful countryside retreat for individuals in end-of-life care or recovering from serious illness or trauma. 
                  Families can stay together, surrounded by beauty and nature.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Comfort, peace, and spiritual care
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Private cabins and quiet reflection areas
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Dignity and God's presence in difficult moments
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Biblical Foundation */}
      <div className="bg-green-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <svg className="w-16 h-16 mx-auto mb-6 opacity-80" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <blockquote className="text-2xl md:text-3xl italic mb-4 leading-relaxed">
            "He makes me lie down in green pastures, He leads me beside still waters, He restores my soul."
          </blockquote>
          <p className="text-xl opacity-90">Psalm 23:2-3</p>
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-lg leading-relaxed">
              This scripture embodies the essence of our project: restoration through rest, nature, and faith.
            </p>
          </div>
        </div>
      </div>

      {/* Meet Our Founder */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Meet Our Founder</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/images/walshy.jpg"
                alt="Andrew Walsh, Founder"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4 text-gray-800">Andrew Walsh</h3>
              <p className="text-lg text-gray-600 mb-4">
                With over 20 years of farming experience and a heart for serving others, Andrew Walsh founded 
                Shepherd's Rest to combine his passion for agriculture with his calling to help those in need.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Guided by Christian values of compassion and community, Andrew saw an opportunity to create a 
                sanctuary where people facing difficult circumstances could find support, dignity, and hope.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                His hands-on approach to farming and genuine care for both animals and people shine through in 
                everything he does. At Shepherd's Rest, Andrew has built more than a farm—he's created a place 
                of refuge where practical help meets heartfelt compassion.
              </p>
              <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                <p className="italic text-gray-700">
                  "Everyone deserves dignity, support, and the opportunity for a new beginning. That's what 
                  Shepherd's Rest is all about."
                </p>
                <p className="text-right text-gray-600 mt-2">— Andrew Walsh</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Statement */}
      <div className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-6">
            <div className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
              OUR VISION
            </div>
          </div>
          <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed mb-8">
            A world where everyone—regardless of their struggles—can find rest, dignity, and new beginnings 
            in the embrace of creation.
          </p>
          <blockquote className="text-xl italic text-gray-600 border-l-4 border-blue-600 pl-6 py-2">
            "Come to me, all you who are weary and burdened, and I will give you rest."
            <span className="block text-sm mt-2 not-italic">— Matthew 11:28</span>
          </blockquote>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-green-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us in This Mission</h2>
          <p className="text-xl mb-8">
            Together, we can create a lasting legacy of hope, healing, and restoration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/want-to-help"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Involved
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}