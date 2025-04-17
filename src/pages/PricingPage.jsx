import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon, XIcon } from '@heroicons/react/outline';
import hotstarImg from '../assets/img/hotstar.png';
import xstreamImg from '../assets/img/xstream.png';
import primeImg from '../assets/img/prime.png';
import sunImg from '../assets/img/sun.png';
import zee5Img from '../assets/img/zee5.png';

const PricingPage = () => {
  const [faqOpen, setFaqOpen] = useState({});

  const toggleFaq = (id) => {
    setFaqOpen((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const plans = [
    {
      id: 1,
      name: 'Wi-Fi + OTT',
      speed: '40',
      price: '499',
      color: 'primary',
      popular: false,
      features: [
        { text: 'Unlimited Data', available: true },
        { text: 'Free Router', available: true },
        { text: 'Free 4K Android Box', available: false },
        { text: '350+ TV Channels', available: false },
        { text: '16+ OTT Apps', available: true },
      ],
      otts: ['hotstar', 'xstream']
    },
    {
      id: 2,
      name: 'Wi-Fi + OTT + TV',
      speed: '40',
      price: '699',
      color: 'secondary',
      popular: true,
      features: [
        { text: 'Unlimited Data', available: true },
        { text: 'Free Router', available: true },
        { text: 'Free 4K Android Box', available: true },
        { text: '350+ TV Channels', available: true },
        { text: '16+ OTT Apps', available: true },
      ],
      otts: ['hotstar', 'xstream', 'sun', 'zee5']
    },
    {
      id: 3,
      name: 'Wi-Fi + OTT',
      speed: '100',
      price: '799',
      color: 'primary',
      popular: false,
      features: [
        { text: 'Unlimited Data', available: true },
        { text: 'Free Router', available: true },
        { text: 'Free 4K Android Box', available: false },
        { text: '350+ TV Channels', available: false },
        { text: '16+ OTT Apps', available: true },
      ],
      otts: ['hotstar', 'xstream']
    },
    {
      id: 4,
      name: 'Wi-Fi + OTT + TV',
      speed: '100',
      price: '899',
      color: 'secondary',
      popular: true,
      features: [
        { text: 'Unlimited Data', available: true },
        { text: 'Free Router', available: true },
        { text: 'Free 4K Android Box', available: true },
        { text: '350+ TV Channels', available: true },
        { text: '16+ OTT Apps', available: true },
      ],
      otts: ['hotstar', 'xstream', 'sun', 'zee5']
    },
    {
      id: 5,
      name: 'Wi-Fi + OTT + TV',
      speed: '200',
      price: '1099',
      color: 'accent',
      popular: true,
      features: [
        { text: 'Unlimited Data', available: true },
        { text: 'Free Router', available: true },
        { text: 'Free 4K Android Box', available: true },
        { text: '350+ TV Channels', available: true },
        { text: '16+ OTT Apps', available: true },
      ],
      otts: ['hotstar', 'prime', 'xstream', 'sun', 'zee5']
    }
  ];

  const faqs = [
    {
      id: 1,
      question: 'What is the installation process?',
      answer: 'Our technicians will visit your location at the scheduled time. The installation typically takes 1-2 hours, during which they will set up the fiber connection, configure the router, and ensure everything is working properly.'
    },
    {
      id: 2,
      question: 'Is there any installation fee?',
      answer: 'We offer free installation for all our broadband plans. There are no hidden charges or setup fees.'
    },
    {
      id: 3,
      question: 'How long does it take to get the connection activated?',
      answer: 'After you submit your request, we typically schedule the installation within 24-48 hours based on your convenience.'
    },
    {
      id: 4,
      question: 'Do you provide a Wi-Fi router?',
      answer: 'Yes, we provide a high-quality Wi-Fi router free of cost with all our plans. The router supports dual-band Wi-Fi for optimal performance.'
    },
    {
      id: 5,
      question: 'What is your billing cycle?',
      answer: 'We follow a monthly billing cycle. You can choose to pay monthly or opt for quarterly or annual plans for additional discounts.'
    },
    {
      id: 6,
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including credit/debit cards, net banking, UPI, and digital wallets.'
    }
  ];

  return (
    <>
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Pricing Plans</h1>
            <p className="text-xl text-white/80">
              Choose the perfect plan for your home or business. All plans include free installation and router.
            </p>
          </div>
        </div>
      </section>

      <section className="section py-24">
        <div className="container">
          <div className="flex flex-wrap justify-center mb-16">
            <div className="w-full md:w-10/12 lg:w-8/12">
              <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                Our plans are designed to provide you with the best internet experience. Choose the one that suits your needs.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 md:gap-10">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className={`bg-white rounded-xl shadow-card overflow-hidden relative ${
                  plan.popular ? 'transform scale-105 z-10' : ''
                } animate-fadeIn`}
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-accent text-white text-sm font-semibold py-1 px-3 rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <div className={`bg-${plan.color} p-6 text-white text-center`}>
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <div className="text-5xl font-bold my-4">₹{plan.price}</div>
                  <p className="text-white/80">per month</p>
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className={`text-3xl font-bold text-${plan.color}`}>{plan.speed} Mbps</div>
                    <p className="text-gray-500">Unlimited Data</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center">
                        {feature.available ? (
                          <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                        ) : (
                          <XIcon className="h-5 w-5 text-red-500 mr-3" />
                        )}
                        <span className={feature.available ? '' : 'text-gray-400'}>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                  {plan.otts && plan.otts.length > 0 && (
                    <div className="flex justify-center space-x-4 mb-8">
                      {plan.otts.includes('hotstar') && (
                        <div className="w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform">
                          <img src={hotstarImg} alt="Hotstar" className="h-full w-auto" />
                        </div>
                      )}
                      {plan.otts.includes('prime') && (
                        <div className="w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform">
                          <img src={primeImg} alt="Prime" className="h-full w-auto" />
                        </div>
                      )}
                      {plan.otts.includes('xstream') && (
                        <div className="w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform">
                          <img src={xstreamImg} alt="Xstream" className="h-full w-auto" />
                        </div>
                      )}
                      {plan.otts.includes('sun') && (
                        <div className="w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform">
                          <img src={sunImg} alt="Sun NXT" className="h-full w-auto" />
                        </div>
                      )}
                      {plan.otts.includes('zee5') && (
                        <div className="w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform">
                          <img src={zee5Img} alt="Zee5" className="h-full w-auto" />
                        </div>
                      )}
                    </div>
                  )}
                  <a 
                    href="tel:6385341142" 
                    className={`btn btn-${plan.color} w-full text-center block transition-all hover:shadow-lg hover:-translate-y-1`}
                  >
                    BOOK NOW
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gray-50 py-20">
        <div className="container">
          <h2 className="section-title mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div 
                key={faq.id} 
                className="mb-5 bg-white rounded-lg shadow-sm overflow-hidden animate-fadeIn"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 text-left focus:outline-none flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-800">{faq.question}</span>
                  <svg
                    className={`h-5 w-5 text-gray-500 transform transition-transform duration-300 ${
                      faqOpen[faq.id] ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    faqOpen[faq.id] ? 'max-h-96 py-5 px-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary/5 py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fadeIn">Ready to Experience High-Speed Internet?</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            Contact us today to get started with our fiber broadband services. Our team is ready to assist you.
          </p>
          <div className="flex flex-wrap justify-center gap-6 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <a 
              href="tel:6385341142" 
              className="btn btn-primary px-8 py-3 text-lg hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              Call Now: 6385341142
            </a>
            <Link 
              to="/contact" 
              className="btn bg-white text-primary hover:bg-gray-100 border border-primary px-8 py-3 text-lg hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPage; 