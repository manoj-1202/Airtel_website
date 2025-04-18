import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckIcon, FilmIcon } from "@heroicons/react/outline";
import wifiSignalImg from "../assets/img/wifi_signal.png";
import padlockImg from "../assets/img/padlock.png";
import hotstarImg from "../assets/img/hotstar.png";
import xstreamImg from "../assets/img/xstream.png";
import primeImg from "../assets/img/prime.png";
import phoneCallingImg from "../assets/img/phone_calling.gif";
import sunImg from "../assets/img/sun.png";
import zee5Img from "../assets/img/zee5.png";
import netflix from "../assets/img/netflix.png";
import appletv from "../assets/img/appletv.png";

const HomePage = () => {
  // Node Mailer
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://airtelemail.onrender.com/send-contact-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formState),
        }
      );

      if (response.ok) {
        setFormStatus("success");
        setFormState({ name: "", email: "", phone: "", message: "" });
        setFormStatus("success");

        setTimeout(() => {
          setFormStatus(null);
        }, 2000);
      }  
      else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error sending appointment email:", error);
      alert("Network error. Please try again later.");
    }
    setIsLoading(false);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fadeIn">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Welcome to <span className="text-accent">Airtel</span>
              </h1>
              <p className="text-xl md:text-2xl font-light">
                Ultra High Speed Fiber Broadband for Seamless Connectivity
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#appointment" className="btn btn-accent">
                  Get Started
                </a>
                <Link
                  to="/pricing"
                  className="btn bg-white text-primary hover:bg-gray-100"
                >
                  View Plans
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-accent" />
                  <span>Free Installation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-accent" />
                  <span>Wi-Fi Router Free</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-accent" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Get Appointment */}
            <div className="bg-white p-6 rounded-xl shadow-lg animate-fadeIn">
              <h2 className="text-2xl font-bold text-center text-dark mb-6">
                Get Appointment
              </h2>
              <form
                id="appointmentForm"
                className="space-y-4"
                onSubmit={handleSubmit}
              >
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-gray-900"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-gray-900"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-gray-900"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-1">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-gray-900"
                    placeholder="Any specific requirements?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-full flex items-center justify-center"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <svg
                      className="animate-spin h-5 w-5 mr-2 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      ></path>
                    </svg>
                  ) : null}
                  {isLoading ? "Sending..." : "Send Message"}
                </button>

                {formStatus === "success" ? (
                  <div className="bg-green-50 text-green-800 rounded-lg p-4 mb-6">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-gray-50" id="features">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose Chennai Fibernet?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our premium fiber broadband
              services designed for modern homes and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-card hover:shadow-lg transition-shadow">
              <div className="p-4 w-16 h-16 flex items-center justify-center mb-4">
                <img
                  src={wifiSignalImg}
                  alt="High Speed"
                  className="h-full w-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Blazing Fast Speeds</h3>
              <p className="text-gray-600">
                Enjoy ultra-fast internet speeds up to 200 Mbps for seamless
                streaming, gaming, and browsing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-card hover:shadow-lg transition-shadow">
              <div className="p-4 w-16 h-16 flex items-center justify-center mb-4">
                <img
                  src={padlockImg}
                  alt="Secure Connection"
                  className="h-full w-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Unlimited Data</h3>
              <p className="text-gray-600">
                No data caps or throttling. Use as much data as you need for
                work, entertainment, and staying connected.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-card hover:shadow-lg transition-shadow">
              <div className="bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <FilmIcon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Entertainment</h3>
              <p className="text-gray-600">
                Get access to premium OTT platforms and live TV channels with
                our entertainment packages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Plans Section */}
      <section className="section" id="popular-plans">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Most Popular Plans</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Select from our most popular high-speed internet packages designed
              for every need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-card overflow-hidden">
              <div className="bg-primary p-4 text-white text-center">
                <h3 className="text-xl font-bold">Basic Plan</h3>
                <div className="text-5xl font-bold my-4">₹699</div>
                <p className="text-white/80">per month</p>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary">40 Mbps</div>
                  <p className="text-gray-500">Unlimited Data</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Unlimited Data</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Free Router</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Free 4K Android Box</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>350+ TV Channels</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>16+ OTT Apps</span>
                  </li>
                </ul>
                <div className="flex justify-center space-x-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img
                      src={hotstarImg}
                      alt="Hotstar"
                      className="h-full w-auto"
                    />
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img
                      src={xstreamImg}
                      alt="Xstream"
                      className="h-full w-auto"
                    />
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img src={sunImg} alt="Xstream" className="h-full w-auto" />
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img
                      src={zee5Img}
                      alt="Xstream"
                      className="h-full w-auto"
                    />
                  </div>
                </div>
                <a href="tel:6385341142" className="btn btn-primary w-full">
                  Book Now
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-card overflow-hidden relative transform scale-105 md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-accent text-white text-sm font-semibold py-1 px-3 rounded-bl-lg">
                Most Popular
              </div>
              <div className="bg-secondary p-4 text-white text-center">
                <h3 className="text-xl font-bold">Standard Plan</h3>
                <div className="text-5xl font-bold my-4">₹899</div>
                <p className="text-white/80">per month</p>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-secondary">
                    100 Mbps
                  </div>
                  <p className="text-gray-500">Unlimited Data</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Unlimited Data</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Free Router</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Free 4K Android Box</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>350+ TV Channels</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>16+ OTT Apps</span>
                  </li>
                </ul>
                <div className="flex justify-center space-x-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img
                      src={hotstarImg}
                      alt="Hotstar"
                      className="h-full w-auto"
                    />
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img
                      src={xstreamImg}
                      alt="Xstream"
                      className="h-full w-auto"
                    />
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img src={sunImg} alt="Xstream" className="h-full w-auto" />
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img
                      src={zee5Img}
                      alt="Xstream"
                      className="h-full w-auto"
                    />
                  </div>
                </div>
                <a href="tel:6385341142" className="btn btn-secondary w-full">
                  Book Now
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-card overflow-hidden">
              <div className="bg-accent p-4 text-white text-center">
                <h3 className="text-xl font-bold">Premium Plan</h3>
                <div className="text-5xl font-bold my-4">₹1199</div>
                <p className="text-white/80">per month</p>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-accent">100 Mbps</div>
                  <p className="text-gray-500">Unlimited Data</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Unlimited Data</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Free Router</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Free 4K Android Box</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>350+ IPTV Channels</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>16+ OTT Apps (Premium)</span>
                  </li>
                </ul>
                <div className="flex justify-center space-x-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img
                      src={hotstarImg}
                      alt="Hotstar"
                      className="h-full w-auto"
                    />
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img src={primeImg} alt="Prime" className="h-full w-auto" />
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img
                      src={xstreamImg}
                      alt="Xstream"
                      className="h-full w-auto"
                    />
                  </div>
                 
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img
                      src={zee5Img}
                      alt="Xstream"
                      className="h-full w-auto"
                    />
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img
                      src={netflix}
                      alt="Xstream"
                      className="h-full w-auto"
                    />
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img
                      src={appletv}
                      alt="Xstream"
                      className="h-full w-auto"
                    />
                  </div>
                </div>
                <a href="tel:6385341142" className="btn btn-accent w-full">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-dark text-white py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Experience High-Speed Internet?
              </h2>
              <p className="text-xl text-gray-300">
                Call us today to get started with the best broadband service in
                Chennai.
              </p>
              <div className="flex items-center space-x-4">
                <a href="tel:6385341142" className="btn btn-accent btn-lg">
                  Call 6385341142
                </a>
                <img
                  src={phoneCallingImg}
                  alt="Call Now"
                  className="h-16 w-auto hidden md:block"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">
                      40+
                    </div>
                    <p className="text-gray-300">Areas Covered</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">
                      10k+
                    </div>
                    <p className="text-gray-300">Happy Customers</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">
                      99.9%
                    </div>
                    <p className="text-gray-300">Uptime</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">
                      24/7
                    </div>
                    <p className="text-gray-300">Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
