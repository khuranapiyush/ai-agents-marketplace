/* eslint-disable @next/next/no-img-element */
import {
  ChevronLeft,
  Star,
  Settings,
  Mic,
  Clock,
  Calendar,
} from 'lucide-react';
import React from 'react';

// Define different card layouts for different pages
const cardLayouts = {
  MUZIC: {
    features: [
      {
        title: 'Music Creation',
        icon: 'calendar',
        description: 'Transform your words into melodies',
        image: '/images/ai/musicCreation.png',
      },
      {
        title: 'Pick Genre/Style',
        icon: 'mic',
        description:
          'Any genre at your fingertips. Classical, Jazz, Rock, or EDM',
        image: '/images/ai/genre.png',
      },
      {
        title: 'Feature Name',
        icon: 'clock',
        description:
          'Any genre at your fingertips. Classical, Jazz, Rock, or EDM– just pick your style and let your words shape the perfect track. Where text transforms into the music you imagine',
        // image: '/images/features/realtime.png',
      },
    ],
    useCases: [
      {
        title: 'Content Creation',
        icon: 'business',
        items: [
          'YouTube background music generation',
          'Podcast intro/outro music',
          'Social media content soundtracks',
          'Custom jingles for marketing videos',
          'Mood-based ambient music for presentations',
        ],
      },
      {
        title: 'Personal Use',
        icon: 'accessibility',
        items: [
          'Custom workout playlists',
          'Meditation/relaxation soundscapes',
          'Party music generation',
          'Personalized ringtones',
          'Mood-based music for different activities',
        ],
      },
      {
        title: 'Business Applications',
        icon: 'business',
        items: [
          'Custom workout playlists',
          'Meditation/relaxation soundscapes',
          'Party music generation',
          'Personalized ringtones',
          'Mood-based music for different activities',
        ],
      },
    ],
    reviews: {
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
  },
  'BTR AI': {
    features: [
      {
        title: 'Market Data Analysis',
        icon: 'calendar',
        description: 'Real-time and historical data monitoring',
        image: '/images/ai/marketDataAnalysis.png',
      },
      {
        title: 'Automated Trading',
        icon: 'mic',
        description: 'Order execution without manual intervention',
        image: '/images/ai/automatedTrading.png',
      },
      {
        title: 'Predictive Analytics',
        icon: 'clock',
        description: 'Price movement prediction',
        image: '/images/ai/analysis.png',
      },
    ],
    useCases: [
      {
        title: 'Day Trading',
        icon: 'business',
        items: [
          'Real-time market insights',
          'Execution of trades based on minute-by-minute market changes',
        ],
      },
      {
        title: 'Algorithmic Trading',
        icon: 'accessibility',
        items: [
          'Deployment of pre-set trading algorithms',
          'Arbitrage and statistical trading strategies',
        ],
      },
      {
        title: 'Investment Advisory',
        icon: 'business',
        items: [
          'Automated investment advice for retail and institutional clients',
          'Long-term strategy recommendations',
        ],
      },
    ],
    reviews: {
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
  },
  'VOX AI': {
    features: [
      {
        title: 'Book Appointments',
        icon: 'calendar',
        description: 'Transform your words into melodies',
        image: '/images/ai/bookAppointment.png',
      },
      {
        title: 'Voice authentication',
        icon: 'mic',
        description:
          'Any genre at your fingertips. Classical, Jazz, Rock, or EDM',
        image: '/images/ai/vdioVoice.png',
      },
      {
        title: 'Real-Time Processing',
        icon: 'clock',
        description: 'Provides instant responses during conversations',
        image: '/images/ai/realtimeProcess.png',
      },
    ],
    useCases: [
      {
        title: 'Business/Professional',
        icon: 'business',
        items: [
          'Virtual meeting transcription and translation',
          'Customer service voice bots and IVR systems',
          'Voice-based security authentication',
          'Voice notes and dictation for professionals',
          'Automated phone surveys and outreach',
        ],
      },
      {
        title: 'Accessibility',
        icon: 'accessibility',
        items: [
          'Screen readers for visually impaired users',
          'Speech-to-text for hearing impaired users',
          'Voice control for mobility-impaired users',
          'Reading assistance for learning disabilities',
        ],
      },
      {
        title: 'Personal Productivity',
        icon: 'business',
        items: [
          'Voice assistants (commands, reminders, etc',
          'Voice memos and notes',
          'Hands-free device control',
          'Voice-based search',
        ],
      },
    ],
    reviews: {
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
  },
  'VDIO AI': {
    features: [
      {
        title: 'High Quality Videos',
        icon: 'calendar',
        description: 'Transform your words into high quality videos',
        image: '/images/ai/appointment.png',
      },
      {
        title: 'Video Builder',
        icon: 'mic',
        description: 'Generate videos you like using AI, high quality videos',
        image: '/images/ai/vdioVoice.png',
      },
      {
        title: 'AI Video Editor',
        icon: 'clock',
        description:
          'Edit, Create and Transform your videos with Vdio AI tools. You can create Youtube type podcast, short series, insta reels, tiktok videos etc',
      },
    ],
    useCases: [
      {
        title: 'Content Creation',
        icon: 'business',
        items: [
          'YouTube background music generation',
          'Podcast intro/outro music',
          'Social media content soundtracks',
          'Custom jingles for marketing videos',
          'Mood-based ambient music for presentations',
        ],
      },
      {
        title: 'Personal Use',
        icon: 'accessibility',
        items: [
          'Custom workout playlists',
          'Meditation/relaxation soundscapes',
          'Party music generation',
          'Personalized ringtones',
          'Mood-based music for different activities',
        ],
      },
      {
        title: 'Business Applications',
        icon: 'business',
        items: [
          'Custom workout playlists',
          'Meditation/relaxation soundscapes',
          'Party music generation',
          'Personalized ringtones',
          'Mood-based music for different activities',
        ],
      },
    ],
    reviews: {
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
  },
  anime: {
    features: [
      {
        title: 'Music Creation',
        icon: 'calendar',
        description: 'Transform your words into melodies',
        image: '/images/ai/appointment.png',
      },
      {
        title: 'Pick Genre/Style',
        icon: 'mic',
        description:
          'Any genre at your fingertips. Classical, Jazz, Rock, or EDM',
        image: '/images/ai/vdioVoice.png',
      },
      {
        title: 'Feature Name',
        icon: 'clock',
        description:
          'Any genre at your fingertips. Classical, Jazz, Rock, or EDM– just pick your style and let your words shape the perfect track. Where text transforms into the music you imagine',
      },
    ],
    useCases: [
      {
        title: 'Content Creation',
        icon: 'business',
        items: [
          'YouTube background music generation',
          'Podcast intro/outro music',
          'Social media content soundtracks',
          'Custom jingles for marketing videos',
          'Mood-based ambient music for presentations',
        ],
      },
      {
        title: 'Personal Use',
        icon: 'accessibility',
        items: [
          'Custom workout playlists',
          'Meditation/relaxation soundscapes',
          'Party music generation',
          'Personalized ringtones',
          'Mood-based music for different activities',
        ],
      },
      {
        title: 'Business Applications',
        icon: 'business',
        items: [
          'Custom workout playlists',
          'Meditation/relaxation soundscapes',
          'Party music generation',
          'Personalized ringtones',
          'Mood-based music for different activities',
        ],
      },
    ],
    reviews: {
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
  },
};

const FeatureCard = ({ feature }) => (
  <div
    className='p-6 transition-colors rounded-xl border-[1.5px] border-white/30 bg-gradient-to-b from-[#615349] to-[#2A2A2A]/60 selection:bg-[#917F75]'
    style={{
      backgroundImage: `linear-gradient(180deg, #615349 0%, #352D28 100%), url('/images/ai/noiseBg.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundBlendMode: 'overlay',
    }}
  >
    <div className='flex items-center gap-3 mb-4'>
      {renderFeatureIcon(feature.icon)}
      <h3 className='text-lg font-semibold text-white'>{feature.title}</h3>
    </div>
    <p className='mb-4 text-gray-400'>{feature.description}</p>
    {feature.image && (
      <div className='relative h-40 overflow-hidden rounded-lg'>
        <img
          src={feature.image}
          alt={feature.title}
          className='object-contain w-full h-full'
        />
      </div>
    )}
  </div>
);

const UseCaseCard = ({ useCase }) => (
  <div
    className='p-6 rounded-xl transition-colors border-[1.5px] border-white/30 relative selection:bg-[#61495F] overflow-hidden'
    style={{
      backgroundImage: `linear-gradient(180deg, #61495F 0%, #332835 100%),url('/images/ai/noiseBg.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundBlendMode: 'overlay',
    }}
  >
    <div className='flex items-center gap-3 mb-4'>
      {renderUseCaseIcon(useCase.icon)}
      <h3 className='text-lg font-semibold text-white'>{useCase.title}</h3>
    </div>
    <ul className='space-y-3'>
      {useCase.items.map((item, index) => (
        <li key={index} className='text-gray-400'>
          • {item}
        </li>
      ))}
    </ul>
  </div>
);

const renderFeatureIcon = (iconName) => {
  const iconMap = {
    calendar: <Calendar className='w-6 h-6 text-[#FE954A]' />,
    mic: <Mic className='w-6 h-6 text-[#FE954A]' />,
    clock: <Clock className='w-6 h-6 text-[#FE954A]' />,
  };
  return iconMap[iconName] || null;
};

const renderUseCaseIcon = (iconName) => {
  // Similar icon mapping for use cases
};

const sectionOrder = ['features', 'useCases'];

const sectionConfig = {
  features: {
    id: 'features',
    title: 'Agent Features',
    icon: <Settings className='w-5 h-5 text-[#FE954A]' />,
    borderColor: '#FFB781',
    titleColor: 'text-[#FE954A]',
    iconBg: 'bg-[#2A2A2A]',
  },
  useCases: {
    id: 'useCases',
    title: 'Use cases',
    icon: <span className='text-purple-300'>⚡</span>,
    borderColor: '#FFD3FF',
    titleColor: 'text-purple-500',
    iconBg: 'bg-purple-500/20',
  },
  reviews: {
    id: 'reviews',
    title: 'Reviews',
    icon: <Star className='w-5 h-5 text-[#0BDA96]' />,
    borderColor: '#88FDF6',
    titleColor: 'text-[#0BDA96]',
    iconBg: 'bg-[#0BDA96]/20',
  },
};

const InfoSection = ({ pageName }) => {
  console.log(pageName, 'paeg');
  const pageLayout = cardLayouts[pageName];
  if (!pageLayout) return null;

  const renderContent = (sectionId) => {
    switch (sectionId) {
      case 'features':
        return (
          <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
            {pageLayout.features?.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        );
      case 'useCases':
        return (
          <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
            {pageLayout.useCases?.map((useCase, index) => (
              <UseCaseCard key={index} useCase={useCase} />
            ))}
          </div>
        );
      case 'reviews':
        return (
          <div className='space-y-4'>
            {pageLayout.reviews?.content.map((review, index) => (
              <div key={index} className='text-gray-400'>
                {index + 1}. {review}
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='space-y-12'>
      {sectionOrder.map((sectionId) => {
        const section = sectionConfig[sectionId];
        if (!pageLayout[sectionId]) return null;

        return (
          <div
            key={section.id}
            className={`p-6 rounded-[24px] border-b-2 bg-gradient-to-b from-[#232323] to-[#181818] shadow-[0px_6px_14px_0px_rgba(0,0,0,0.45)] w-full`}
            style={{ borderColor: section.borderColor }}
          >
            <div className='flex items-center gap-3 mb-6'>
              <span className={`p-2 rounded-lg ${section.iconBg}`}>
                {section.icon}
              </span>
              <h2 className={`text-xl font-bold ${section.titleColor}`}>
                {section.title}
              </h2>
            </div>
            {renderContent(section.id)}
          </div>
        );
      })}
    </div>
  );
};

export default InfoSection;
