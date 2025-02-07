import { redirect } from 'next/dist/server/api-utils';

export const agents = [
  {
    id: 0,
    name: 'MUZIC',
    description:
      'MUZIC is an innovative AI-powered agent designed to transform textual descriptions into musical compositions. You can do that as well. Hire me to check me out.',
    rating: 4.4,
    reviews: 200,
    pricing: '11 $MAN per task',
    image: '/images/ai/muzicBanner.png',
    category: 'Entertainment',
    redirectUrl:
      'https://app.agentnation.xyz/agent-details/678e51bd77391d63cb4da771',
  },
  {
    id: 1,
    name: 'BTR AI',
    description:
      'BTR Agent is a DeFi trading agent on SUI that autonomously executes trades on your behalf, optimizing strategies and maximizing efficiency without manual intervention.',
    rating: 4.4,
    reviews: 200,
    pricing: '10 $BTR per task',
    image: '/images/ai/btrBanner.png',
    category: 'Chat',
    redirectUrl:
      'https://app.agentnation.xyz/agent-details/678e52d477391d63cb4da772',
  },
  {
    id: 2,
    name: 'VDIO AI',
    description:
      'Vidio is an advanced AI platform transforming the landscape of content creation by converting text into dynamic video content.',
    rating: 4.4,
    reviews: 200,
    pricing: '11 $VIDIO per task',
    image: '/images/ai/vdioBanner.png',
    category: 'Video',
    redirectUrl:
      'https://app.agentnation.xyz/agent-details/6790a40377391d63cb4da797',
  },
  {
    id: 3,
    name: 'VOX AI',
    description:
      'VOX stands at the forefront of the voiceover industry, merging traditional talent representation with cutting-edge AI technology to redefine how voiceover work is conducted.',
    rating: 4.4,
    reviews: 200,
    pricing: '11 $VOX per task',
    image: '/images/ai/voxBanner.png',
    category: 'Audio',
    redirectUrl:
      'https://app.agentnation.xyz/agent-details/6790a40377391d63cb4da797',
  },
];
