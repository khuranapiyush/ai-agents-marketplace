import { ChevronLeft, Star, Settings } from 'lucide-react';
import React from 'react';

const sectionData = [
  {
    id: 1,
    title: 'Agent Features',
    borderColor: '#FFB781',
    icon: 'settings',
    iconColor: '#E5A264',
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    ],
    useListStyle: 'bullet', // for bullet points
  },
  {
    id: 2,
    title: 'Use cases',
    borderColor: '#FFD3FF',
    icon: 'bolt',
    iconColor: 'purple',
    iconBg: 'bg-purple-500/20',
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    ],
    useListStyle: 'number', // for numbered list
  },
  {
    id: 3,
    title: 'Reviews',
    borderColor: '#88FDF6',
    icon: 'star',
    iconColor: '#0BDA96',
    iconBg: 'bg-[#0BDA96]/20',
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    ],
    useListStyle: 'number',
  },
];

const InfoSection = ({ section }) => {
  const renderIcon = (section) => {
    switch (section.icon) {
      case 'settings':
        return <Settings className={`text-[${section.iconColor}]`} />;
      case 'bolt':
        return (
          <div
            className={`w-6 h-6 ${section.iconBg} rounded flex items-center justify-center`}
          >
            <span className='text-purple-300'>⚡</span>
          </div>
        );
      case 'star':
        return (
          <div
            className={`w-6 h-6 ${section.iconBg} rounded flex items-center justify-center`}
          >
            <Star className='w-4 h-4 text-[#0BDA96]' />
          </div>
        );
      default:
        return null;
    }
  };

  return sectionData?.map((section, index) => {
    return (
      <div
        key={index}
        className={`mt-8 p-6 rounded-[24px] border-b-2 bg-gradient-to-b from-[#232323] to-[#181818] shadow-[0px_6px_14px_0px_rgba(0,0,0,0.45)]`}
        style={{ borderColor: section.borderColor }}
      >
        <div className='flex items-center gap-2 mb-4'>
          {renderIcon(section)}
          <h3
            className={`text-lg font-semibold ${
              section.icon === 'settings'
                ? `text-[${section.iconColor}]`
                : 'text-white'
            }`}
          >
            {section.title}
          </h3>
        </div>
        <div className='space-y-2 text-gray-400'>
          {section.content.map((item, index) => (
            <p
              key={index}
              className='text-white font-nohemi text-[14px] font-normal leading-[150%]'
            >
              {section.useListStyle === 'bullet' ? '• ' : `${index + 1}. `}
              {item}
            </p>
          ))}
        </div>
      </div>
    );
  });
};

export default InfoSection;
