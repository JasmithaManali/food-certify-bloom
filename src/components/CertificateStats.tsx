import React, { useRef, useEffect } from 'react';
import CountUp from './CountUp';
import { motion, useInView, useMotionValue, useTransform, useSpring } from 'framer-motion';

import HygieneRatingIcon from '../assets/Hygiene_rating_1.svg';
import WorshipIcon from '../assets/Worship.svg';
import CampusIcon from '../assets/campus.svg';
import MarketIcon from '../assets/veg_market.svg';
import StationIcon from '../assets/Station.svg';
import FoodHubIcon from '../assets/Street_food.svg';

const statsData = [
  { id: 1, value: 1516, label: 'Hygiene Rating', icon: HygieneRatingIcon },
  { id: 2, value: 130, label: 'Eat Right Worship', icon: WorshipIcon },
  { id: 3, value: 183, label: 'Eat Right Campus', icon: CampusIcon },
  { id: 4, value: 36, label: 'Eat Right Market', icon: MarketIcon },
  { id: 5, value: 12, label: 'Eat Right Station', icon: StationIcon },
  { id: 6, value: 25, label: 'Eat Right Food Hub', icon: FoodHubIcon },
];

const barGradients = [
  'bg-gradient-to-t from-blue-900 to-blue-600',
  'bg-gradient-to-t from-blue-800 to-blue-500',
  'bg-gradient-to-t from-blue-700 to-blue-400',
  'bg-gradient-to-t from-blue-600 to-blue-300',
  'bg-gradient-to-t from-blue-500 to-blue-200',
  'bg-gradient-to-t from-blue-400 to-blue-100',
];

const AnimatedStat = ({ value, label, maxValue, index, icon }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const barMotionValue = useMotionValue(0);
  const barSpring = useSpring(barMotionValue, { mass: 0.8, stiffness: 75, damping: 15 });
  const MIN_BAR_HEIGHT = 40;
  const MAX_BAR_HEIGHT = 250;
  const barHeight = useTransform(barSpring, [0, maxValue], [MIN_BAR_HEIGHT, MAX_BAR_HEIGHT]);

  useEffect(() => {
    if (inView) {
      barMotionValue.set(value);
    }
  }, [inView, value, barMotionValue]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center relative h-48 justify-end">
      <div className="flex items-end justify-center w-full h-full">
        <motion.div
          style={{ height: barHeight }}
          className={`w-8 ${barGradients[index % barGradients.length]} rounded-t-lg shadow-md hover:shadow-lg transition-shadow duration-300 mr-2`}
        />
        <img
          src={icon}
          alt={label}
          className="w-12 h-12 object-contain mr-2"
        />
        <div className="flex flex-col items-start">
          <p className="text-2xl font-bold text-white">
            <CountUp to={value} duration={2} separator="," />+
          </p>
          <p className="text-sm text-white">{label}</p>
        </div>
      </div>
    </div>
  );
};

const CertificateStats = () => {
  const maxValue = Math.max(...statsData.map(stat => stat.value));

  return (
    <div
      className="relative text-center bg-cover bg-center py-6 sm:py-8 md:py-10"
      style={{
        backgroundImage: `url(https://img.freepik.com/free-photo/detail-rice-plant-sunset-valencia-with-plantation-out-focus-rice-grains-plant-seed_181624-25838.jpg?ga=GA1.1.1553155338.1750831421&semt=ais_items_boosted&w=740)`,
        backgroundSize: '100% auto',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-white mb-6">All Across India</h2>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-lg text-white font-semibold">
          <span>• TAMILNADU</span>
          <span>• MAHARASHTRA</span>
          <span>• GOA</span>
          <span>• KARNATAKA</span>
          <span>• KERALA</span>
          <span>• GUJARAT</span>
        </div>

        <div className="p-3 mt-12 w-[80%] mx-auto text-white">
          <h3 className="text-2xl font-bold text-white mb-3">Certificate Issued</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {statsData.map((stat, index) => (
              <AnimatedStat
                key={stat.id}
                value={stat.value}
                label={stat.label}
                maxValue={maxValue}
                index={index}
                icon={stat.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateStats;