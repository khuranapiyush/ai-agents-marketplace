import { FANTV_API_URL } from '@/src/constant/constants';
import fetcher from '@/src/dataProvider';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { ArrowLeft, Instagram, Send, Twitter } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import Graph from '../../src/component/Graph/Graph';
import TradeComponent from '../../src/component/TradeComponent';
import TradeTable from '../../src/component/TradeTable/TradeTable';
import { formatWalletAddress } from '../../src/utils/common';
import { agents } from '../trade';
import { ChevronLeft, Star, Settings } from 'lucide-react';

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

const TabButton = ({ isActive, onClick, children }) => {
  return (
    <button
      className={`
      px-4 py-2 
      text-white
      transition-all
      border-b-2
      ${
        isActive
          ? 'border-white font-medium'
          : 'border-transparent hover:border-white/50'
      }
    `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default function AgentDetails({ agentDetail, agentId }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const tabs = [
    {
      id: 0,
      label: 'Trades',
      component: (
        <div className='h-[auto] bg-[#222222]'>
          <div className='mt-6 max-w-7xl'>
            <h4 className='mb-2 font-bold'>Recent Trades</h4>
            <TradeTable agentDetail={agentDetail} />
          </div>
        </div>
      ),
    },
    {
      id: 1,
      label: 'Summary',
      component: (
        <div className='mt-6'>
          <h4 className='mb-2 font-bold'>Summary</h4>
          <p className='mb-4 text-sm text-gray-400'>
            {agentDetail?.description}
          </p>

          {agentDetail?.highLights && (
            <h4 className='mb-2 font-bold'>Highlights</h4>
          )}
          {agentDetail?.highLights &&
            agentDetail?.highLights?.map((item) => {
              return (
                <ul className='text-sm text-gray-400 list-disc list-inside'>
                  <li>{'item'}</li>
                </ul>
              );
            })}
        </div>
      ),
    },
  ];

  const [tab, setTab] = useState(tabs[0]);
  const [graphData, setGraphData] = useState(null);

  return (
    <div className='min-h-screen bg-[#1E1E1E] text-white'>
      {/* Header */}
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex items-center gap-4 py-6'>
          <button className='text-white hover:text-gray-300'>
            <ChevronLeft size={24} />
          </button>
          <h1 className='text-[20px] font-bold tracking-[-0.8px] uppercase'>
            Agent Details
          </h1>
        </div>

        {/* Main Card */}
        <div className='rounded-[48px] border-2 border-white/15 bg-[#242424] p-8 mb-8'>
          <div className='flex flex-col md:flex-row gap-8'>
            {/* Left side - Image */}
            <div className='w-full md:w-[300px] shrink-0'>
              <img
                src='/circuit-board.jpg'
                alt='AI Agent'
                className='w-full aspect-square rounded-lg object-cover'
              />
            </div>

            {/* Right side - Details */}
            <div className='flex-1'>
              <div className='flex flex-col md:flex-row justify-between mb-4'>
                <div className='flex items-center gap-4 mb-4 md:mb-0'>
                  <h2 className='text-xl font-bold'>AI AGENT NAME</h2>
                  <span className='px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm'>
                    Video
                  </span>
                  <div className='flex items-center gap-1'>
                    <Star className='w-4 h-4 fill-yellow-400 text-yellow-400' />
                    <span>4.4</span>
                    <span className='text-gray-400'>(200 reviews)</span>
                  </div>
                </div>
                <div className='text-right'>
                  <span className='text-gray-400'>M Cap.</span>
                  <span className='ml-2'>513K</span>
                </div>
              </div>

              <p className='text-gray-400 mb-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                ut.
              </p>

              <div className='mb-6'>
                <span className='text-gray-400'>Pricing:</span>
                <span className='ml-2'>11 $MAN ($0.01) per task</span>
              </div>

              <div className='flex flex-col sm:flex-row gap-4'>
                <button className='flex-1 py-3 px-6 bg-[#CCFF00] text-black rounded-full hover:bg-[#CCFF00]/90'>
                  Hire Agent
                </button>
                <button className='flex-1 py-3 px-6 border border-white/20 rounded-full hover:bg-white/5'>
                  Buy $MAN
                </button>
                <button className='flex-1 py-3 px-6 border border-white/20 rounded-full hover:bg-white/5'>
                  Rate Agent
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className='mb-8'>
          <div className='flex items-center gap-2 mb-4'>
            <Settings className='text-[#E5A264]' />
            <h3 className='text-[#E5A264] text-lg font-semibold'>
              Agent Features
            </h3>
          </div>
          <div className='space-y-2 text-gray-400'>
            <p>
              • Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
            <p>
              • Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className='mb-8'>
          <div className='flex items-center gap-2 mb-4'>
            <div className='w-6 h-6 bg-purple-500/20 rounded flex items-center justify-center'>
              <span className='text-purple-300'>⚡</span>
            </div>
            <h3 className='text-lg font-semibold'>Use cases</h3>
          </div>
          <div className='space-y-2 text-gray-400'>
            <p>
              1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
            <p>
              2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
            <p>
              3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
            <p>
              4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
          </div>
        </div>

        {/* Reviews Section */}
        <div className='mb-8'>
          <div className='flex items-center gap-2 mb-4'>
            <div className='w-6 h-6 bg-[#0BDA96]/20 rounded flex items-center justify-center'>
              <Star className='w-4 h-4 text-[#0BDA96]' />
            </div>
            <h3 className='text-lg font-semibold'>Reviews</h3>
          </div>
          <div className='space-y-2 text-gray-400'>
            <p>
              1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
            <p>
              2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
            <p>
              3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
            <p>
              4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const { query } = ctx;
  const getAgentUrl = `${FANTV_API_URL}/v1/agent/${query.agentId}`;

  try {
    const response = await fetcher.get(getAgentUrl);
    const agentData = response?.data;

    return {
      props: {
        agentDetail: agentData,
        agentId: query.agentId || null,
      },
    };
  } catch (error) {
    console.error('Error fetching document types:', error);

    return {
      props: {
        agentDetail: [],
        agentId: query.agentId || null,
        error: 'Failed to fetch document types.',
      },
    };
  }
}
