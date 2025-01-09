import React, { useRef, useState, useEffect } from 'react';

interface Card {
  id: number;
  title: string;
  description: string;
}

const DEFAULT_COLOR =
  'text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-200 dark:text-black dark:hover:bg-gray-700';

const techColor: any = {
  ReactJS: 'bg-sky-400 text-sky-900',
  'Node.js':
    'text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800',
  MongoDB: 'bg-emerald-400 text-emerald-900',
  '.NET Core':
    'text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800',
  'SQL Server':
    'text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400',
  NestJS:
    'text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800',
  'API Gateway':
    'text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 dark:focus:ring-[#F7BE38]/50',
  'Azure Function':
    'text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-nonedark:focus:ring-[#2557D6]/50',
  'AZ Service Bus':
    'text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80',
  Web3: 'text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400',
  RabbitMQ:
    'text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400',
  Docker:
    'text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800',
  GraphQL:
    'text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300  dark:border-purple-400 dark:text-white dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900',
  ElasticSearch:
    'text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700',
};

const projects = [
  {
    projectName: 'CXwow',
    mainTechnicals: [
      'Node.js',
      'MongoDB',
      'API Gateway',
      'Azure Function',
      'AZ Service Bus',
    ],
    description:
      'Link with shopify allows users to count orders, automatically assign feedback from customers through AI-model.',
    position: 'Senior Backend Developer',
    contribute: '',
  },
  {
    projectName: 'CTRwow',
    mainTechnicals: [
      '.NET Core',
      'MongoDB',
      'API Gateway',
      'Azure Function',
      'AZ Service Bus',
    ],
    description:
      'Drag and drop platform to create sales landing pages, also allows users to analyze heatmaps.',
    position: 'Senior Backend Developer',
    contribute: '',
  },
  {
    projectName: 'Wallet',
    mainTechnicals: ['.NET Core', 'Node.js', 'ReactJS', 'Docker', 'Web3'],
    description:
      'Web3 platform, get coins data on onchain, store and provide information to mobile app, SSO.',
    position: 'Leader Backend',
    contribute: '',
  },
  {
    projectName: 'US_Kaplan',
    mainTechnicals: [
      '.NET Core',
      'ReactJS',
      'GraphQL',
      'Identity Server 4',
      'Docker',
    ],
    description:
      'E-learning platform, allows admin to create questions and users to answer questions to calculate scores, multitenant and change users in the same account.',
    position: 'Software Engineer',
    contribute: '',
  },
  {
    projectName: 'Milano-Coffee',
    mainTechnicals: ['.NET Core', 'Angular', 'ElasticSearch', 'RabbitMQ'],
    description:
      'Manage inventory orders of Milano coffee chain, create orders and issue invoices when purchasing coffee.',
    position: 'Junior Fullstack Developer',
    contribute: '',
  },
];

const CardPullEffect: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const cards: Card[] = [
    { id: 1, title: 'DFO GPC', description: 'This is the first card.' },
    { id: 2, title: 'Card 2', description: 'This is the second card.' },
    { id: 3, title: 'Card 3', description: 'This is the third card.' },
    { id: 4, title: 'Card 4', description: 'This is the fourth card.' },
    { id: 5, title: 'Card 5', description: 'This is the fifth card.' },
    { id: 6, title: 'Card 6', description: 'This is the fifth card.' },
  ];

  const cardHeight = 400; // Height of each card
  const threshold = cardHeight / 3; // When a card reaches 50% of the next card

  const handleScroll = (): void => {
    if (!containerRef.current) return;
    setScrollPosition(containerRef.current.scrollTop);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className='relative h-[600px] overflow-y-scroll scrollbar-hidden'
      style={{
        WebkitOverflowScrolling: 'touch', // For smoother scrolling on mobile
      }}
    >
      <div
        style={{ height: `${cards.length * cardHeight}px` }}
        className='relative'
      >
        {projects.map((card, index) => {
          const {
            projectName,
            mainTechnicals,
            description,
            position,
            contribute,
          } = card;
          const start = index * cardHeight;

          // Determine opacity and translateY based on scroll position
          const opacity = Math.min(
            Math.max(1 - Math.abs(scrollPosition - start) / threshold, 0),
            1
          );
          const translateY = Math.min(
            Math.max(scrollPosition - start, 0),
            cardHeight
          );

          return (
            <div
              key={index}
              className='absolute w-full flex items-center justify-center'
              style={{
                height: `${cardHeight}px`,
                top: `${start}px`,
                opacity,
                transform: `translateY(${translateY + 0.5}px)`,
                transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
              }}
            >
              <div className='h-[300px] w-[90%] max-w-[800px] min-w-[425px] dark:bg-slate-800 shadow-xl rounded-lg p-6 flex flex-col items-center justify-center'>
                <div className='p-4'>
                  <div className='flex flex-col items-center gap-y-2 md:flex-row'>
                    {/* <a
                      className='hover:text-cyan-400'
                      href='/demo/astro-boilerplate'
                    >
                    </a> */}
                    <div className='text-xl font-semibold hover:text-cyan-400 dark:text-white'>
                      {projectName}
                    </div>
                    <div className='ml-3 flex flex-wrap gap-2 items-center justify-center'>
                      {mainTechnicals.map((item, index) => (
                        <div
                          key={index}
                          className={`rounded-md px-2 py-1 text-xs font-semibold bg-fuchsia-400 ${
                            techColor[item] || DEFAULT_COLOR
                          }`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='w-full'>
                    <button className='inline-flex p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 mt-2'>
                        <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                        {position}
                        </span>
                    </button>

                  </div>
                  <p className='mt-3 text-gray-500 dark:text-gray-200'>{description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardPullEffect;
