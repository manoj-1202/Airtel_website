import React from 'react';
import { CheckIcon, WifiIcon, DeviceMobileIcon, FilmIcon, CogIcon, ShieldCheckIcon } from '@heroicons/react/outline';
import wifiSignalImg from '../assets/img/wifi_signal.png';
import hotstarImg from '../assets/img/hotstar.png';
import xstreamImg from '../assets/img/xstream.png';
import primeImg from '../assets/img/prime.png';

const FeaturesPage = () => {
  const features = [
    {
      icon: <WifiIcon className="h-8 w-8 text-white" />,
      title: 'High-Speed Fiber',
      description: 'Experience lightning-fast internet speeds with our fiber optic network.',
      color: 'primary'
    },
    {
      icon: <DeviceMobileIcon className="h-8 w-8 text-white" />,
      title: 'Multi-Device Support',
      description: 'Connect all your devices simultaneously with no slowdowns.',
      color: 'secondary'
    },
    {
      icon: <FilmIcon className="h-8 w-8 text-white" />,
      title: 'Streaming Services',
      description: 'Access to popular OTT platforms with selected plans.',
      color: 'accent'
    },
    {
      icon: <CogIcon className="h-8 w-8 text-white" />,
      title: 'Easy Installation',
      description: 'Professional installation by our trained technicians.',
      color: 'primary'
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8 text-white" />,
      title: 'Secure Connection',
      description: 'Enhanced security features to protect your online activity.',
      color: 'secondary'
    }
  ];

  const internetFeatures = [
    'Symmetric upload and download speeds',
    'No data caps or throttling',
    'Low latency for gaming and video calls',
    'Reliable connection with 99.9% uptime',
    'Free Wi-Fi router with installation',
    'Dedicated IP address options available'
  ];

  const tvFeatures = [
    '350+ channels including HD options',
    'Premium movie and sports channels',
    'Integration with popular OTT platforms',
    'Free 4K Android Box with select plans',
    'Watch on multiple devices simultaneously',
    'Record your favorite shows with cloud DVR'
  ];

  return (
    <>
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Features & Services</h1>
            <p className="text-xl text-white/80">
              Discover the advanced features that make our broadband services stand out
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="section-title">Key Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a range of features designed to enhance your internet and entertainment experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-${feature.color} rounded-xl shadow-card text-white p-8 animate-fadeIn`}
              >
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fadeIn">
              <h2 className="text-3xl font-bold mb-6">High-Speed Internet</h2>
              <p className="text-gray-600 mb-8">
                Our fiber optic network delivers blazing-fast internet speeds directly to your home.
                Whether you're streaming, gaming, working from home, or video calling, our internet
                plans ensure you're always connected with minimal latency and maximum reliability.
              </p>
              <ul className="space-y-4">
                {internetFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl animate-fadeIn bg-white p-8 flex items-center justify-center">
              <img src={wifiSignalImg} alt="High-Speed Internet" className="w-full max-w-xs h-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-xl animate-fadeIn bg-white p-8 flex items-center justify-center">
              <div className="flex items-center justify-center space-x-4">
                <img src={hotstarImg} alt="Hotstar" className="h-16 w-auto" />
                <img src={primeImg} alt="Prime" className="h-16 w-auto" />
                <img src={xstreamImg} alt="Xstream" className="h-16 w-auto" />
              </div>
            </div>
            <div className="order-1 md:order-2 animate-fadeIn">
              <h2 className="text-3xl font-bold mb-6">TV & Entertainment</h2>
              <p className="text-gray-600 mb-8">
                Enhance your viewing experience with our TV and entertainment packages.
                Get access to hundreds of channels, on-demand content, and popular streaming
                services all in one place. Our smart TV integration makes it easy to find and
                enjoy your favorite shows and movies.
              </p>
              <ul className="space-y-4">
                {tvFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="section-title">Speed Comparison</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how our different speed tiers compare for various online activities
            </p>
          </div>

          <div className="overflow-x-auto animate-fadeIn">
            <table className="w-full min-w-[800px] bg-white rounded-xl shadow-md">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="py-4 px-6 text-left">Activity</th>
                  <th className="py-4 px-6 text-center">40 Mbps</th>
                  <th className="py-4 px-6 text-center">100 Mbps</th>
                  <th className="py-4 px-6 text-center">200 Mbps</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Web Browsing</td>
                  <td className="py-4 px-6 text-center">Excellent</td>
                  <td className="py-4 px-6 text-center">Excellent</td>
                  <td className="py-4 px-6 text-center">Excellent</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-4 px-6 font-medium">HD Video Streaming</td>
                  <td className="py-4 px-6 text-center">Very Good</td>
                  <td className="py-4 px-6 text-center">Excellent</td>
                  <td className="py-4 px-6 text-center">Excellent</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">4K Video Streaming</td>
                  <td className="py-4 px-6 text-center">Good</td>
                  <td className="py-4 px-6 text-center">Very Good</td>
                  <td className="py-4 px-6 text-center">Excellent</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-4 px-6 font-medium">Online Gaming</td>
                  <td className="py-4 px-6 text-center">Good</td>
                  <td className="py-4 px-6 text-center">Very Good</td>
                  <td className="py-4 px-6 text-center">Excellent</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Video Conferencing</td>
                  <td className="py-4 px-6 text-center">Very Good</td>
                  <td className="py-4 px-6 text-center">Excellent</td>
                  <td className="py-4 px-6 text-center">Excellent</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-4 px-6 font-medium">File Downloads</td>
                  <td className="py-4 px-6 text-center">Good</td>
                  <td className="py-4 px-6 text-center">Very Good</td>
                  <td className="py-4 px-6 text-center">Excellent</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Multiple Devices (5+)</td>
                  <td className="py-4 px-6 text-center">Fair</td>
                  <td className="py-4 px-6 text-center">Very Good</td>
                  <td className="py-4 px-6 text-center">Excellent</td>
                </tr>
                <tr>
                  <td className="py-4 px-6"></td>
                  <td className="py-4 px-6 text-center">
                    <a href="tel:6385341142" className="btn btn-primary">Book Now</a>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <a href="tel:6385341142" className="btn btn-secondary">Book Now</a>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <a href="tel:6385341142" className="btn btn-accent">Book Now</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section bg-dark text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto animate-fadeIn">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to enjoy the best broadband experience in Chennai
            </p>
            <a href="tel:6385341142" className="btn btn-accent btn-lg">
              Call 6385341142
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesPage; 