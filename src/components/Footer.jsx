import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, MailIcon, LocationMarkerIcon } from '@heroicons/react/outline';
import Logo from './Logo';

const Footer = () => {
  const locations = [
    { name: 'Kelambakkam' },
    { name: 'Navallur' },
    { name: 'Padur' },
    { name: 'Semmancheri' },
    { name: 'Sholinganallur' },
    { name: 'Perumbakkam' },
    { name: 'Medavakkam' },
    { name: 'Pallikkaranai' },
    { name: 'Puzhuthivakkam' },
    { name: 'Nanganallur' },
    { name: 'Madipakkam' },
    { name: 'Pallavaram' },
    { name: 'Keelkattalai' },
    { name: 'Radha Nagar' },
    { name: 'Tambaram East' },
    { name: 'Mogappair' },
    { name: 'Thirumangalam' },
    { name: 'Padi' },
    { name: 'Alanthur' },
    { name: 'Kovilampakkam' },
    { name: 'Nanmangalam' },
    { name: 'Earikarai' },
    { name: 'Thoraipakkam' },
    { name: 'Neelangarai' }
  ];

  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="col-span-1 animate-fadeIn">
            <Link to="/" className="flex items-center mb-4 inline-block">
              <Logo height={70} />
            </Link>
            <p className="text-gray-300 mb-4">
              Ultra High Speed Fiber Broadband service provider in Chennai. We offer the fastest and most reliable internet connectivity for homes and businesses.
            </p>
            <div className="space-y-3">
              <a href="tel:6385341142 " className="flex items-center text-gray-300 hover:text-accent transition-colors">
                <PhoneIcon className="h-5 w-5 mr-2" />
                <span>6385341142 </span>
              </a>
              <a href="mailto:airtelpkvishwa@gmail.com" className="flex items-center text-gray-300 hover:text-accent transition-colors">
                <MailIcon className="h-5 w-5 mr-2" />
                <span>airtelpkvishwa@gmail.com</span>
              </a>
              <div className="flex items-start text-gray-300">
                <LocationMarkerIcon className="h-5 w-5 mr-2 mt-1" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-accent transition-colors">Pricing Plans</Link></li>
              <li><Link to="/features" className="text-gray-300 hover:text-accent transition-colors">Features</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="col-span-2 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Service Areas</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {locations.slice(0, 15).map((location, index) => (
                <button 
                  key={index} 
                  className="text-gray-300 hover:text-accent truncate text-left transition-colors"
                  aria-label={`Broadband in ${location.name}`}
                >
                  Broadband in {location.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a 
        href="https://api.whatsapp.com/send?phone=6385341142&text=Hi, I need a new broadband connection!" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 bg-green-500 p-3 rounded-full shadow-lg z-50 hover:bg-green-600 transition-all hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.964 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a9.869 9.869 0 01-1.516-5.26c0-5.445 4.455-9.885 9.942-9.885a9.865 9.865 0 017.021 2.91 9.788 9.788 0 012.909 6.99c-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a12.062 12.062 0 005.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411"/>
        </svg>
      </a>

      {/* Copyright */}
      <div className="bg-black py-5">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left text-gray-400">
              Chennai Fibernet © {new Date().getFullYear()}. All Rights Reserved.
            </p>
            <div className="flex space-x-5 mt-4 md:mt-0">
              <button 
                className="text-gray-400 hover:text-accent transition-colors hover:scale-110" 
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </button>
              <button 
                className="text-gray-400 hover:text-accent transition-colors hover:scale-110" 
                aria-label="Twitter"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </button>
              <button 
                className="text-gray-400 hover:text-accent transition-colors hover:scale-110" 
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 