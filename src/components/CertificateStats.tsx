import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

// 👉 Replace with your actual asset imports
import bgImage from "../assets/inspectionperson.png";
import HygieneRatingIcon from "../assets/hyginerating.png";
import WorshipIcon from "../assets/Worship.png";
import CampusIcon from "../assets/BuildingApartment.png";
import MarketIcon from "../assets/market.png";
import StationIcon from "../assets/TrainRegional.png";
import FoodHubIcon from "../assets/foodtruck.png";

const statsData = [
  { id: 1, value: 1516, label: "Hygiene Rating", icon: HygieneRatingIcon, maxValue: 2000 },
  { id: 2, value: 130, label: "Eat Right Worship", icon: WorshipIcon, maxValue: 500 },
  { id: 3, value: 183, label: "Delivery Speed", icon: CampusIcon, maxValue: 500 },
  { id: 4, value: 36, label: "Return Rate", icon: MarketIcon, maxValue: 100 },
  { id: 5, value: 12, label: "Return Rate", icon: StationIcon, maxValue: 100 },
  { id: 6, value: 25, label: "Product Quality", icon: FoodHubIcon, maxValue: 100 },
];

const AnimatedStat = ({
  value,
  label,
  maxValue,
  icon,
}: {
  value: number;
  label: string;
  maxValue: number;
  icon: string;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  const progressValue = useMotionValue(0);
  const springValue = useSpring(progressValue, {
    damping: 20,
    stiffness: 120,
    restDelta: 0.5,
  });

  const width = useTransform(springValue, [0, maxValue], [0, (value / maxValue) * 100]);
  const [currentValue, setCurrentValue] = useState(0);

  // Random flow animation for the green bar
  const flowOffset = useMotionValue(0);
  const flowAnimation = useTransform(flowOffset, [0, 100], [0, -100]);

  useEffect(() => {
    let start = 0;
    if (inView) {
      const duration = 1000; // Animation duration in milliseconds
      const stepTime = 20; // Time between steps in milliseconds
      const steps = duration / stepTime;
      const increment = value / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          start = value;
          clearInterval(timer);
        }
        progressValue.set(start);
      }, stepTime);

      // Start flow animation
      const flowTimer = setInterval(() => {
        flowOffset.set((Math.random() * 100) % 100);
      }, 500); // Update flow every 500ms for random effect

      return () => {
        clearInterval(timer);
        clearInterval(flowTimer);
      };
    }
  }, [inView, value, progressValue, maxValue, flowOffset]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setCurrentValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <div ref={ref} className="flex flex-col gap-2 items-center text-center p-4">
      <img src={icon} alt={label} className="w-8 h-8 my-1" />
      <p className="text-md text-white mt-0">{label}</p>
      <div className="text-white font-bold text-[2rem]">{currentValue}+</div>
      {/* <div className="relative w-24 h-10 mb-3">
        <div className="w-full h-4 bg-gray-300 rounded-full">
          <motion.div
            className="h-4 rounded-full"
            style={{
              width: width,
              background: `linear-gradient(90deg, #10B981 ${flowAnimation.get()}%, #34D399 ${flowAnimation.get() + 20}%, #10B981 ${flowAnimation.get() + 40}%)`,
            }}
            initial={{ width: 0 }}
            animate={{ width: `${width.get()}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
      </div> */}
    </div>
  );
};

const CertificateStats: React.FC = () => {
  return (
    <div
      className="relative text-center bg-cover bg-center py-6 sm:py-8 md:py-10"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-white mb-6">Certificate Issued</h2>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-lg text-white font-semibold">
          <span>• TAMILNADU</span>
          <span>• MAHARASHTRA</span>
          <span>• GOA</span>
          <span>• KARNATAKA</span>
          <span>• KERALA</span>
          <span>• GUJARAT</span>
        </div>

        <div className="p-6 mt-12 w-[90%] mx-auto text-white bg-white/20 rounded-xl backdrop-blur-lg shadow-lg">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
            {statsData.map((stat) => (
              <AnimatedStat
                key={stat.id}
                value={stat.value}
                label={stat.label}
                maxValue={stat.maxValue}
                icon={stat.icon}
              />
            ))}
          </div>
          <div className="flex justify-end items-end mt-4 text-md">
            <span> #AllAcrossIndia</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateStats;