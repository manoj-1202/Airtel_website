import React from 'react';
import { CheckIcon, LightningBoltIcon, StatusOnlineIcon, UserGroupIcon } from '@heroicons/react/outline';
import consultantImg from '../assets/img/consultant.png';
import wifiSignalImg from '../assets/img/wifi_signal.png';

const AboutPage = () => {
  const stats = [
    { label: 'Happy Customers', value: '10,000+' },
    { label: 'Service Areas', value: '24+' },
    { label: 'Uptime', value: '99.9%' },
    { label: 'Experienced Years', value: '15+' }
  ];

  const values = [
    {
      icon: <LightningBoltIcon className="h-10 w-10 text-primary" />,
      title: 'Speed & Reliability',
      description: 'We deliver high-speed internet with reliable uptime, ensuring you stay connected when it matters most.'
    },
    {
      icon: <UserGroupIcon className="h-10 w-10 text-primary" />,
      title: 'Customer Satisfaction',
      description: 'Your satisfaction is our priority. We listen to feedback and continuously improve our services.'
    },
    {
      icon: <StatusOnlineIcon className="h-10 w-10 text-primary" />,
      title: 'Cutting-edge Technology',
      description: 'We invest in the latest fiber optic technology to provide the best possible internet experience.'
    },
    {
      icon: <CheckIcon className="h-10 w-10 text-primary" />,
      title: 'Transparent Pricing',
      description: 'No hidden fees or surprise charges. What you see is what you pay, with clear plan details.'
    }
  ];

  return (
    <>
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-white/80">
              Building the digital backbone of Chennai, one connection at a time
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeIn">
              <h2 className="text-3xl font-bold mb-6">Chennai's Trusted Broadband Provider</h2>
              <p className="text-gray-600 mb-6">
                Chennai Fibernet was founded in 2008 with a simple mission: to provide reliable, high-speed internet
                connectivity to homes and businesses across Chennai. We began as a small team of networking enthusiasts
                and have grown into one of the city's most trusted broadband providers.
              </p>
              <p className="text-gray-600 mb-6">
                We believe that quality internet access should be available to everyone at affordable rates. Our fiber optic
                network stretches across multiple areas in Chennai, and we're continuously expanding to reach more communities.
              </p>
              <p className="text-gray-600 mb-8">
                What sets us apart is our commitment to customer satisfaction, technical excellence, and community engagement.
                We're not just a service provider – we're your neighbors, and we're building Chennai's digital future together.
              </p>
              <div className="flex items-center">
                <div className="mr-8">
                  <p className="text-4xl font-bold text-primary">15+</p>
                  <p className="text-gray-500">Years Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary">10,000+</p>
                  <p className="text-gray-500">Customers</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl animate-fadeIn bg-white p-8 flex items-center justify-center">
              <img src={consultantImg} alt="Our Team" className="w-full max-w-xs h-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="section-title">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from customer service to technical implementations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-card hover:shadow-lg transition-shadow animate-fadeIn">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-xl animate-fadeIn bg-white p-8 flex items-center justify-center">
              <img src={wifiSignalImg} alt="Network Infrastructure" className="w-full max-w-xs h-auto" />
            </div>
            <div className="order-1 md:order-2 animate-fadeIn">
              <h2 className="text-3xl font-bold mb-6">Our Network Infrastructure</h2>
              <p className="text-gray-600 mb-6">
                We've built our own fiber optic network from the ground up, designed for reliability, speed, and future-proofing.
                Our infrastructure uses the latest optical fiber technology to deliver blazing-fast speeds to your doorstep.
              </p>
              <p className="text-gray-600 mb-6">
                We maintain multiple points of presence (PoPs) across Chennai, with redundant connectivity to ensure that
                our network remains operational even during unforeseen circumstances. Our network operations center (NOC)
                monitors the network 24/7, proactively addressing any issues before they affect your connection.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span>Fiber-to-the-Home (FTTH) technology for maximum speeds</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span>Redundant backbone connections for reliability</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span>99.9% uptime guarantee with service level agreements</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span>Regularly upgraded equipment to meet growing demands</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-dark text-white py-14">
        <div className="container">
          <div className="animate-fadeIn">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto animate-fadeIn">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience Premium Broadband?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of satisfied customers across Chennai and enjoy reliable high-speed internet.
            </p>
            <a href="tel:6385341142" className="btn btn-primary btn-lg">
              Get Connected Today
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage; 