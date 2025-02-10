import React, { use } from 'react';
import { Star } from 'lucide-react';
import { useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';
import { agents } from '../src/constant/WebConstants';

const AgentListing = () => {
  const isMobile = useMediaQuery('(max-width:768px)');

  const router = useRouter();

  return (
    <div
      className='bg-[#1E1E1E] text-white pt-24'
      style={{ width: '100%', height: 'auto' }}
    >
      {/* Main Content */}
      <main
        className='max-w-7xl mx-auto px-4 py-8 rounded-[48px] border-2 border-white/15 bg-[#242424] 
           bg-cover bg-center bg-blend-overlay'
        style={{
          backgroundImage: 'url(/images/ai/landingPageBg.png)',
          backgroundBlendMode: 'overlay',
        }}
      >
        {/* Hero Section */}
        <div className='mb-12 text-center'>
          <h1 className='font-tiny text-[44px] font-normal leading-[150%] tracking-[-1.76px] uppercase bg-gradient-to-r from-[#CCFF00] via-white to-white bg-clip-text text-transparent'>
            AI AGents Marketplace
          </h1>
          <p className='text-[#D2D2D2] text-center font-tiny text-2xl font-normal leading-[150%] tracking-[-0.96px] uppercase'>
            Hire ready to use AI Agents to automate tasks, boost productivity,
            ease your life.
          </p>
          <button
            className='px-6 py-3 mt-4 text-black bg-white rounded-[24px] border border-[#D2D2D2] shadow-[4px_4px_34px_0px_rgba(0,0,0,0.15)]'
            style={{
              borderRadius: '12px',
              boxShadow: '0px 0px 15px 0px rgba(255, 255, 255, 0.75)',
            }}
            onClick={() => alert('Coming Soon')}
          >
            Explore AI Agents
          </button>
        </div>
        {/* Filters */}
        {/* <div className='flex flex-wrap justify-center gap-4 mb-8'>
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
        </div> */}
        {/* Agent Cards */}
        <div className='space-y-4'>
          {agents.map((agent) => (
            <div
              key={agent.id}
              className={`bg-[#1E1E1E] cursor-pointer rounded-[24px] p-4 transition-colors border border-[#454545] hover:border-[#CF0]/80 hover:bg-[#1E1E1E]/90 hover:shadow-[4px_4px_34px_0px_rgba(0,0,0,0.25)] ${
                isMobile ? 'mx-4' : 'mx-16'
              }`}
            >
              {isMobile ? (
                // Mobile Layout
                <div
                  className='flex flex-col gap-4'
                  onClick={() => {
                    router.push(`/agent-details?agent=${agent.name}`);
                  }}
                >
                  {/* Top Section - Image and Details */}
                  <div className='flex gap-4'>
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className='flex-shrink-0 object-cover w-24 h-24 rounded-lg'
                    />
                    <div className='flex flex-col justify-between'>
                      <div>
                        <h3 className='text-white font-bricolage text-[20px] font-bold leading-[150%] tracking-[-1.6px] uppercase mb-2'>
                          {agent.name}
                        </h3>
                        <div className='flex items-center gap-1 px-3 py-1 text-sm rounded-lg text-white/60 bg-white/15 w-[auto] mb-2'>
                          <Star className='w-4 h-4 text-yellow-400 fill-current' />
                          <span>{agent.rating}</span>
                          {/* <span>({agent.reviews} reviews)</span> */}
                        </div>
                        <div className='flex items-center gap-1 text-sm rounded-lg text-white/60 bg-white/15 w-[auto]'>
                          <span className='px-3 py-1 text-sm'>
                            {agent.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Section - Description and Price */}
                  <div>
                    <p className='text-[#D2D2D2] text-left font-nohemi text-[14px] font-light leading-[150%] mb-2'>
                      {agent.description}
                    </p>
                    <span className='text-[#CF0] text-left font-nohemi text-[14px] font-light leading-[150%]'>
                      Pricing: {agent.pricing}
                    </span>
                  </div>
                </div>
              ) : (
                // Desktop Layout
                <div
                  className='flex gap-4'
                  onClick={() =>
                    router.push(`/agent-details?agent=${agent.name}`)
                  }
                >
                  {/* Left - Image */}
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className='flex-shrink-0 object-cover w-24 h-24 rounded-lg'
                  />

                  {/* Right - Content */}
                  <div className='flex flex-col flex-1'>
                    <div className='flex items-center gap-2 mb-2'>
                      <h3 className='text-white font-tiny text-[20px] font-bold leading-[150%] tracking-[-1.6px] uppercase'>
                        {agent.name}
                      </h3>
                      <div className='flex items-center gap-1 px-3 py-1 text-sm rounded-lg text-white/60 bg-white/15'>
                        <Star className='w-4 h-4 text-yellow-400 fill-current' />
                        <span>{agent.rating}</span>
                        {/* <span>({agent.reviews} reviews)</span> */}
                      </div>
                      <div className='flex items-center gap-1 text-sm rounded-lg text-white/60 bg-white/15'>
                        <span className='px-3 py-1 text-sm'>
                          {agent.category}
                        </span>
                      </div>
                    </div>

                    <p className='text-[#D2D2D2] text-left font-nohemi text-[14px] font-light leading-[150%] mb-2 flex-1'>
                      {agent.description}
                    </p>

                    <div className='flex items-center justify-between'>
                      <span className='text-[#CF0] text-left font-nohemi text-[14px] font-thin leading-[150%]'>
                        Pricing:
                        <span className='text-[#FFF] text-left font-nohemi text-[14px] font-thin leading-[150%]'>
                          {' '}
                          {agent.pricing}
                        </span>
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
