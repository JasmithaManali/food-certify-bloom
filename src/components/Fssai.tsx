import React from "react";
import FSSAILogo from "../assets/fssai.png";
import StationLogo from "../assets/Station.svg";
import HygieneRatingLogo from "../assets/Hygiene_rating_1.svg";
import { motion } from "framer-motion";

const DesignServices: React.FC = () => {
  return (
    <>
      <div className="mb-6">
          <div className="flex items-center gap-2 text-sm font-medium text-black">
            <span className="w-2 h-2 bg-black rounded-full" />
            <span>CERTIFICATIONS</span>
          </div>
          <hr className="border-t border-gray-300 mt-2" />
        </div>
      {/* Section 1: FSSAI */}
      <section className="py-12 px-6 md:px-16  font-Euclid">


        {/* Main content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left title */}
          <div className="flex-1 text-left text-red-500">
            <h3 className="text-6xl font-semibold leading-tight text-[#0F766E]  relative inline-block">
              FSSAI
              <span className="absolute left-0 -bottom-1 w-full h-1 bg-black" />
              <span className="absolute left-0 -bottom-1 w-12 h-1 bg-black" />
            </h3>
          </div>

          {/* Center card */}
          <div className="flex-1 flex justify-center">
            <motion.div
              initial={{ y: 100, opacity: 0, rotate: 0 }}
              whileInView={{ y: 0, opacity: 1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 100 }}
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{
                scale: 1.02,
                rotate: [-5, 0, -5],
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="bg-white rounded-2xl shadow-lg p-6 max-w-md text-center border border-gray-100"
            >
              <img
                src={FSSAILogo}
                alt="FSSAI Logo"
                className="w-24 mx-auto mb-4"
              />
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">
                CERTIFIED
              </p>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                FSSAI Certification
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Independent certification for food safety compliance under FSSAI guidelines.
              </p>
              <div className="flex justify-center gap-4">
                <button className="px-4 py-2 text-sm rounded-md border border-gray-300 text-gray-800 bg-white hover:bg-gray-100 transition">
                  Sample Certificate
                </button>
                <button className="px-4 py-2 text-sm rounded-md bg-purple-600 text-white hover:bg-purple-700 transition">
                  View More
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right description */}
          <div className="flex-1 text-lg font-medium text-black">
            <p>
              <strong>UNAVAR</strong> is an authorized body conducting third-party audits
              accredited by <strong>FSSAI</strong>. These audits ensure that food businesses
              comply with hygiene, safety, and regulatory standards set by the Food Safety
              and Standards Authority of India.
            </p>
          </div>
        </div>

        <hr className="border-t border-gray-300 mt-10" />
      </section>

      {/* Section 2: Eat Right Station */}
      <section className="py-12 px-6 md:px-16 font-sans">


        {/* Main content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left title */}
          <div className="flex-1 text-left text-red-500">
            <h3 className="text-5xl font-semibold leading-tight text-[#0F766E] relative inline-block">
              EAT RIGHT STATION
              <span className="absolute left-0 -bottom-1 w-full h-1 bg-black" />
              <span className="absolute left-0 -bottom-1 w-12 h-1 bg-black" />
            </h3>

          </div>

          {/* Center card */}
          <div className="flex-1 flex justify-center">
            <motion.div
              initial={{ y: 100, opacity: 0, rotate: 0 }}
              whileInView={{ y: 0, opacity: 1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 100 }}
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{
                scale: 1.02,
                rotate: [-5, 0, -5],
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="bg-white rounded-2xl shadow-lg p-6 max-w-md text-center border border-gray-100"
            >
              <img
                src={StationLogo}
                alt="Eat Right Station Logo"
                className="w-24 mx-auto mb-4"
              />
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">
                PESTICIDE
              </p>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Eat Right Station
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Certification for food service establishments
                promoting safe and healthy food practices.
              </p>
              <div className="flex justify-center gap-4">
                <button className="px-4 py-2 text-sm rounded-md border border-gray-300 text-gray-800 bg-white hover:bg-gray-100 transition">
                  Sample Certificate
                </button>
                <button className="px-4 py-2 text-sm rounded-md bg-purple-600 text-white hover:bg-purple-700 transition">
                  View More
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right description */}
          <div className="flex-1 text-lg font-medium text-black">
            <p>
              <strong>Eat Right Station </strong> is an <strong>FSSAI</strong> initiative that certifies railway stations for providing safe, hygienic, and healthy food to passengers by ensuring vendors follow strict food safety standards.
            </p>
          </div>
        </div>

        <hr className="border-t border-gray-300 mt-10" />
    </section>

      {/* Section 3: Hygiene Rating */}
      <section className="py-12 px-6 md:px-16 font-sans">

        {/* Main content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left title */}
          <div className="flex-1 text-left text-red-500">
            <h2 className="text-5xl font-semibold leading-tight text-[#0F766E]  relative inline-block">
              HYGIENE
              <span className="absolute left-0 -bottom-1 w-full h-1 bg-black" />
              <span className="absolute left-0 -bottom-1 w-12 h-1 bg-black" />
            </h2>
          </div>

          {/* Center card */}
          <div className="flex-1 flex justify-center">
            <motion.div
              initial={{ y: 100, opacity: 0, rotate: 0 }}
              whileInView={{ y: 0, opacity: 1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 100 }}
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{
                scale: 1.02,
                rotate: [-5, 0, -5],
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="bg-white rounded-2xl shadow-lg p-6 max-w-md text-center border border-gray-100"
            >
              <img
                src={HygieneRatingLogo}
                alt="Hygiene Rating Logo"
                className="w-24 mx-auto mb-4"
              />
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">
                READY FOR HARVEST
              </p>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Hygiene Rating
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Assessment and rating of hygiene and food
                safety standards for food businesses.
              </p>
              <div className="flex justify-center gap-4">
                <button className="px-4 py-2 text-sm rounded-md border border-gray-300 text-gray-800 bg-white hover:bg-gray-100 transition">
                  Sample Certificate
                </button>
                <button className="px-4 py-2 text-sm rounded-md bg-purple-600 text-white hover:bg-purple-700 transition">
                  View More
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right description */}
          <div className="flex-1 text-lg font-medium text-black">
            <p>
              <strong>Hygiene Rating </strong>  is an <strong>FSSAI</strong> initiative that evaluates and certifies food businesses based on their hygiene and food safety standards, encouraging transparency and improved public health.
            </p>
          </div>
        </div>

        <hr className="border-t border-black mt-10" />
      </section>
    </>
  );
};

export default DesignServices;
