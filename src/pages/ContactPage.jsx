import React, { useState } from "react";
import {
  MailIcon,
  PhoneIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
import phoneCallingImg from "../assets/img/phone_calling.gif";

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  // Node mailer
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/send-contact-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormState({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        // For now, just show success message
        setFormStatus("success");

        setTimeout(() => {
          setFormStatus(null);
        }, 3000);
      } else {
        setFormStatus("error");
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setFormStatus("error");
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-white/80">
              Get in touch with our team for any queries or to get started with
              our services
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="animate-fadeIn">
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-gray-600 mb-8">
                  Have questions about our plans? Need technical support? Or
                  just want to give us feedback? We're here to help.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 animate-fadeIn">
                <div className="flex items-start mb-6">
                  <PhoneIcon className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600 mb-1">Call us at:</p>
                    <a
                      href="tel:6385341142"
                      className="text-accent font-medium"
                    >
                      +91 6385341142
                    </a>
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <MailIcon className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-600 mb-1">Write to us at:</p>
                    <a
                      href="mailto:airtelpkvishwa@gmail.com"
                      className="text-accent font-medium"
                    >
                      airtelpkvishwa@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <LocationMarkerIcon className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Office</h3>
                    <p className="text-gray-600 mb-1">Visit us at:</p>
                    <address className="not-italic text-gray-700">
                      123 Chennai Fibernet, <br />
                      Anna Nagar, Chennai, <br />
                      Tamil Nadu 600040
                    </address>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fadeIn">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

                {formStatus === "success" ? (
                  <div className="bg-green-50 text-green-800 rounded-lg p-4 mb-6">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                ) : null}

                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-dark text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto animate-fadeIn">
            <h2 className="text-3xl font-bold mb-6">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Call our customer support for quick response
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <a href="tel:6385341142" className="btn btn-accent btn-lg">
                Call 6385341142
              </a>
              <img
                src={phoneCallingImg}
                alt="Call Now"
                className="h-16 w-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
