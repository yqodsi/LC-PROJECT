function HeroSection() {
  return (
    <div className="bg-[#0A2647] p-8 md:flex items-center">
      {/* Left Column - Text */}
      <div className="md:w-1/2 p-4 text-white">
        <h1 className="text-3xl font-bold">STUDIO ELETTROTRECNICO</h1>
        <p className="mt-4">Per. ind. Luca Cazzaniga</p>
      </div>

      {/* Right Column - Additional Information */}
      <div className="md:w-1/2 p-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">
            Learn More About Us
          </h2>
          <p className="mt-4 text-gray-600">
            We are a team of passionate individuals dedicated to providing
            top-notch services to our clients.
          </p>
          <ul className="mt-4">
            <li className="flex items-center text-gray-600">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21 21l-4.5-4.5M21 21l-4.5-4.5M21 21l-4.5-4.5M21 21l-4.5-4.5M21 21l-4.5-4.5M21 21l-4.5-4.5M21 21l-4.5-4.5M21 21l-4.5-4.5M21 21l-4.5-4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M2 14l4 4 4-4M2 10l4-4 4 4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M10 2h4v4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              Quality Services
            </li>
            <li className="flex items-center text-gray-600">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M22 11.08V12a10 10 0 11-5.93-9.14"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M22 4L12 14.01l-3-3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              Reliable Support
            </li>
            <li className="flex items-center text-gray-600">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3 18v-6a9 9 0 0118 0v6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M21 15v-4a5 5 0 00-5-5H8a5 5 0 00-5 5v4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M16 21v-2a4 4 0 01-4-4V8a4 4 0 014-4h2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              Customer Satisfaction
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
