'use client';
import React, { useState } from 'react';
import { LogIn, DollarSign, Mail, Check } from 'lucide-react';

export const FeatureListicle: React.FC = () => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const handleFeatureClick = (index: number) => {
    setFade(false);
    setTimeout(() => {
      setActiveFeatureIndex(index);
      setFade(true);
    }, 100); // Made fade even quicker
  };

  return (
    <div className="mb-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Everything you need to just start coding.
        </h2>
        <p className="text-xl mx-auto">
          Landing page, authentication, payments, and more. It's all here.
        </p>
      </div>

      <div className="flex justify-center space-x-4 mb-8 ">
        {features.map((feature, index) => (
          <div
            key={index}
            onClick={() => handleFeatureClick(index)}
            className={`flex flex-col items-center p-4 transition duration-300 ease-in-out ${
              index === activeFeatureIndex
                ? 'text-primary rounded-lg  '
                : 'text-gray-400 hover:text-gray-200'
            } cursor-pointer`}
          >
            <div className="text-4xl mb-2">{feature.icon}</div>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
          </div>
        ))}
      </div>
      <div className="text-center mt-8 bg-secondary p-8">
        <h3
          className={`text-xl font-medium mb-4 text-left mx-auto max-w-xl transition-opacity duration-100 ${
            fade ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {features[activeFeatureIndex].title}
        </h3>
        <ul className="list-none space-y-2 text-left mx-auto max-w-xl text-xl">
          {features[activeFeatureIndex].points.map((point, index) => (
            <li
              key={index}
              className={`text-secondary-foreground font-light  transition-opacity duration-100 ${
                fade ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <span className="mr-2">
                <Check size={18} className="inline-block text-green-500 mr-2" />
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

type Feature = {
  icon: JSX.Element;
  title: string;
  points: string[];
};

const features: Feature[] = [
  {
    icon: <LogIn size={32} />,
    title: 'Authentication',
    points: [
      'Quick and secure login process',
      'Support for multiple authentication methods',
      'Enhanced security with two-factor authentication',
    ],
  },
  {
    icon: <DollarSign size={32} />,
    title: ' Pricing',
    points: [
      'Competitive pricing models for all sizes',
      'Transparent costs with no hidden fees',
      'Customizable plans to fit your needs',
    ],
  },
  {
    icon: <Mail size={32} />,
    title: 'Communication',
    points: [
      'Instant email notifications and alerts',
      'Efficient mailing list management',
      'Automated responses for better engagement',
    ],
  },
  // add and change features/icons as needed
];
