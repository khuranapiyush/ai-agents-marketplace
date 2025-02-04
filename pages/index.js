import React, { use } from 'react';
import { Star } from 'lucide-react';
import { useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';

const AgentListing = () => {
  const agents = [
    {
      id: 1,
      name: 'AI AGENT NAME',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
      rating: 4.4,
      reviews: 200,
      pricing: '11 $MAN per task',
      image: '/images/ai/aiAgentBanner.png',
      category: 'Video',
    },
    {
      id: 1,
      name: 'AI AGENT NAME',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
      rating: 4.4,
      reviews: 200,
      pricing: '11 $MAN per task',
      image: '/images/ai/aiAgentBanner.png',
      category: 'Category',
    },
    {
      id: 1,
      name: 'AI AGENT NAME',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
      rating: 4.4,
      reviews: 200,
      pricing: '11 $MAN per task',
      image: '/images/ai/aiAgentBanner.png',
      category: 'Video',
    },
    {
      id: 1,
      name: 'AI AGENT NAME',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
      rating: 4.4,
      reviews: 200,
      pricing: '11 $MAN per task',
      image: '/images/ai/aiAgentBanner.png',
      category: 'Category',
    },
    {
      id: 1,
      name: 'AI AGENT NAME',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
      rating: 4.4,
      reviews: 200,
      pricing: '11 $MAN per task',
      image: '/images/ai/aiAgentBanner.png',
      category: 'Video',
    },
    {
      id: 1,
      name: 'AI AGENT NAME',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
      rating: 4.4,
      reviews: 200,
      pricing: '11 $MAN per task',
      image: '/images/ai/aiAgentBanner.png',
      category: 'Category',
    },
  ];

  const isMobile = useMediaQuery('(max-width:768px)');

  const router = useRouter();

  return (
    <div
      className='bg-[#1E1E1E] text-white pt-24'
      style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
    >
      {/* Main Content */}
      <main
        className='max-w-7xl mx-auto px-4 py-8 rounded-[48px] border-2 border-white/15 bg-[#242424]'
        style={{
          backgroundImage: 'url(/images/ai/landingPageBg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Hero Section */}
        <div className='text-center mb-12'>
          <h1 className='text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#CCFF00] to-white bg-clip-text text-transparent'>
            AI AGENTS THAT DRIVE BUSINESS AND PERSONAL RESULTS
          </h1>
          <p className='mb-8 max-w-2xl mx-auto text-[#D2D2D2] text-center font-nohemi text-[14px] font-normal leading-[150%]'>
            AI Agents That Drive Business and persoFind and deploy
            enterprise-ready AI solutions to automate tasks, boost productivity,
            and scale your businessnal Results
          </p>
          <button
            className='px-6 py-3 bg-white text-black rounded-full hover:bg-white/90'
            style={{
              borderRadius: '12px',
              boxShadow: '0px 0px 15px 0px rgba(255, 255, 255, 0.75)',
            }}
          >
            Explore AI Agents
          </button>
        </div>
        {/* Filters */}
        <div className='flex flex-wrap gap-4 mb-8 justify-center'>
          <button className='px-4 py-2 bg-[#222222] rounded-xl border-[1px] border-[#555] hover:bg-[#333333] flex items-center gap-2'>
            Categories
            <svg
              className='w-4 h-4'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
            >
              <path d='M6 9l6 6 6-6' />
            </svg>
          </button>
          <button className='px-4 py-2 bg-[#222222] rounded-xl border-[1px] border-[#555] hover:bg-[#333333] flex items-center gap-2'>
            Industries
            <svg
              className='w-4 h-4'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
            >
              <path d='M6 9l6 6 6-6' />
            </svg>
          </button>
        </div>
        {/* Agent Cards */}
        {/* Agent Cards */}
        {/* Agent Cards */}
        <div className='space-y-4'>
          {agents.map((agent) => (
            <div
              key={agent.id}
              className={`bg-[#1E1E1E] rounded-[24px] p-4 hover:bg-[#2a2a2a] transition-colors border border-[#454545] ${
                isMobile ? 'mx-4' : 'mx-16'
              }`}
            >
              {isMobile ? (
                // Mobile Layout
                <div
                  className='flex flex-col gap-4'
                  onClick={() => router.push('/agent-details')}
                >
                  {/* Top Section - Image and Details */}
                  <div className='flex gap-4'>
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className='w-24 h-24 rounded-lg object-cover flex-shrink-0'
                    />
                    <div className='flex flex-col justify-between'>
                      <div>
                        <h3 className='text-white font-bricolage text-[20px] font-bold leading-[150%] tracking-[-1.6px] uppercase mb-2'>
                          {agent.name}
                        </h3>
                        <div className='flex items-center gap-1 text-sm text-white/60 mb-2'>
                          <Star className='w-4 h-4 fill-current text-yellow-400' />
                          <span>{agent.rating}</span>
                          <span>({agent.reviews} reviews)</span>
                        </div>
                      </div>
                      <span className='px-3 py-1 bg-[#333333] rounded-full text-sm w-fit'>
                        {agent.category}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Section - Description and Price */}
                  <div>
                    <p className='text-[#D2D2D2] text-left font-nohemi text-[14px] font-light leading-[150%] mb-2'>
                      {agent.description}
                    </p>
                    <span className='text-[#D2D2D2] text-left font-nohemi text-[14px] font-light leading-[150%]'>
                      Pricing: {agent.pricing}
                    </span>
                  </div>
                </div>
              ) : (
                // Desktop Layout
                <div
                  className='flex gap-4'
                  onClick={() => router.push('/agent-details')}
                >
                  {/* Left - Image */}
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className='w-24 h-24 rounded-lg object-cover flex-shrink-0'
                  />

                  {/* Right - Content */}
                  <div className='flex-1 flex flex-col'>
                    <div className='flex items-center gap-2 mb-2'>
                      <h3 className='text-white font-bricolage text-[20px] font-bold leading-[150%] tracking-[-1.6px] uppercase'>
                        {agent.name}
                      </h3>
                      <div className='flex items-center gap-1 text-sm text-white/60'>
                        <Star className='w-4 h-4 fill-current text-yellow-400' />
                        <span>{agent.rating}</span>
                        <span>({agent.reviews} reviews)</span>
                      </div>
                    </div>

                    <p className='text-[#D2D2D2] text-left font-nohemi text-[14px] font-light leading-[150%] mb-2 flex-1'>
                      {agent.description}
                    </p>

                    <div className='flex items-center justify-between'>
                      <span className='text-[#D2D2D2] text-left font-nohemi text-[14px] font-light leading-[150%]'>
                        Pricing: {agent.pricing}
                      </span>
                      <span className='px-3 py-1 bg-[#333333] rounded-full text-sm'>
                        {agent.category}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AgentListing;
