/* eslint-disable @next/next/no-img-element */
import { agents } from '../../src/constant/WebConstants';
import InfoSection from '../../src/component/InfoSection';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import {
  Building2,
  ChevronLeft,
  Film,
  Layers,
  Music,
  Play,
  Settings,
  Star,
  User,
} from 'lucide-react';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    background:
      'linear-gradient(180deg, rgba(69, 69, 69, 0.4) 0%, rgba(69, 69, 69, 0.4) 100%)',
    border: '1px solid #6D6D6D',
    borderRadius: '20px',
    boxShadow: '0px 4px 4px 0px #00000073',
    backdropFilter: 'blur(34px)',
    padding: '20px',
  },
  [`& .${tooltipClasses.arrow}`]: {
    fontSize: '40px',
    '&::before': {
      border: '1px solid #6D6D6D',
    },
  },
}));

export default function AgentDetails({ agentId }) {
  const router = useRouter();

  const searchParams = useSearchParams();

  const query = searchParams.get('agent');

  function getAgentDetail(agentId) {
    return agents.find((agent) => agent.name === agentId);
  }

  const agentDetail = getAgentDetail(query);

  return (
    <div className='bg-[#1E1E1E] text-white pt-24'>
      {/* Header */}
      <div className='px-4 mx-auto max-w-7xl'>
        <div className='flex items-center gap-4 py-6'>
          <button
            className='text-white hover:text-gray-300'
            onClick={() => router.back()}
          >
            <ChevronLeft size={24} />
          </button>
          <h1 className='text-[20px] font-bold tracking-[-0.8px] uppercase'>
            Hire Agent
          </h1>
        </div>

        {/* Main Card */}
        <div className='rounded-[48px] border-2 border-white/15 bg-[#242424] p-8 mb-8'>
          <div className='flex flex-col gap-8 md:flex-row'>
            {/* Left side - Image */}
            <div className='w-full md:w-[260px] shrink-0'>
              <img
                src={agentDetail?.image}
                alt='AI Agent'
                className='object-cover w-full rounded-lg aspect-square'
              />
            </div>

            {/* Right side - Details */}
            <div className='flex-1'>
              <div className='flex flex-col justify-between mb-4 md:flex-row'>
                <div className='flex flex-col gap-2'>
                  <h2 className='text-4xl font-bold'>{agentDetail?.name}</h2>
                  <div className='flex flex-wrap items-center gap-4'>
                    <div className='flex items-center gap-1 px-3 py-1 text-sm rounded-lg text-white/60 bg-white/15'>
                      <Star className='w-4 h-4 text-yellow-400 fill-current' />
                      <span>{agentDetail?.rating}</span>
                    </div>
                    <span className='px-3 py-1 text-sm text-[#CF0] rounded-lg bg-[#2F351B]'>
                      {agentDetail?.category}
                    </span>
                    <span
                      className='text-white border-b cursor-pointer border-b-white'
                      onClick={() => alert('Coming Soon')}
                    >
                      Rate It
                    </span>
                  </div>
                </div>
              </div>

              <p className='mb-6  text-[#D2D2D2] font-Nohemi text-sm font-normal leading-[150%]'>
                {agentDetail?.description}
              </p>

              <div className='mb-6'>
                <span className='text-[#D2D2D2] text-left font-nohemi text-[14px] font-thin leading-[150%]'>
                  Price starts from:
                  <span className='text-[#FFF] font-thin'>
                    {'  '}
                    {agentDetail?.pricing}
                  </span>
                </span>
              </div>

              <div className='flex flex-col gap-4 sm:flex-row'>
                <button
                  className='py-3 px-12 w-full sm:w-fit h-12 bg-[#CCFF00] text-black rounded-full hover:bg-[#CCFF00]/90'
                  onClick={() => alert('Coming Soon')}
                >
                  Hire Agent
                </button>
                <button
                  className='w-full h-12 px-12 py-3 border rounded-full sm:w-fit border-white/20 hover:bg-white/5'
                  onClick={() => {
                    router.push(agentDetail?.redirectUrl);
                  }}
                >
                  Own This Agent
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <InfoSection pageName={agentDetail?.name} />
      </div>
    </div>
  );
}

// export async function getServerSideProps(ctx) {
//   const { query } = ctx;
//   const getAgentUrl = `${FANTV_API_URL}/v1/agent/${query.agentId}`;

//   try {
//     const response = await fetcher.get(getAgentUrl);
//     const agentData = response?.data;

//     return {
//       props: {
//         agentDetail: agentData,
//         agentId: query.agentId || null,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching document types:', error);

//     return {
//       props: {
//         agentDetail: [],
//         agentId: query.agentId || null,
//         error: 'Failed to fetch document types.',
//       },
//     };
//   }
// }
