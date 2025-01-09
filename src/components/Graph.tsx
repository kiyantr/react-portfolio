// src/components/MindmapGraph.tsx

import React from "react";
import Node, { GraphNode } from "./Node";

  
  export const mindmapData: GraphNode = {
    id: 'root',
    label: 'Technicals',
    color: 'text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80',
    children: [
      {
        id: 'backend',
        label: 'Backend',
        color: 'bg-blue-500',
        children: [
          { id: 'nodejs', label: 'NodeJS', color: 'bg-blue-300' },
          { id: 'nestjs', label: 'NestJS', color: 'bg-blue-300' },
          { id: 'dotnet', label: '.NET', color: 'bg-blue-300' },
        ],
      },
      {
        id: 'frontend',
        label: 'Frontend',
        color: 'bg-green-500',
        children: [{ id: 'reactjs', label: 'ReactJS', color: 'bg-green-300' }],
      },
      {
        id: 'database',
        label: 'Database',
        color: 'bg-purple-500',
        children: [
          { id: 'sql', label: 'SQL', color: 'bg-purple-300' },
          { id: 'mssql', label: 'MSSQL', color: 'bg-purple-300' },
          { id: 'mongodb', label: 'MongoDB', color: 'bg-purple-300' },
        ],
      },
      {
        id: 'messageBroker',
        label: 'Message Broker',
        color: 'bg-yellow-500',
        children: [
          { id: 'sns', label: 'SNS', color: 'bg-yellow-300' },
          { id: 'sqs', label: 'SQS', color: 'bg-yellow-300' },
          { id: 'azure', label: 'ServiceBus', color: 'bg-yellow-300' },
        ],
      },
      {
        id: 'cache',
        label: 'Cache',
        color: 'bg-red-500',
        children: [{ id: 'redis', label: 'Redis', color: 'bg-red-300' }],
      },
      {
        id: 'other',
        label: 'Other',
        color: 'text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
        children: [
          { id: 'jenkins', label: 'Jenkins', color: 'text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800' },
          { id: 'docker', label: 'Docker', color: 'text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800' },
        ],
      },
    ],
  };

const MindmapGraph: React.FC = () => {
  return (
    <div className="flex justify-center items-start p-10 overflow-x-auto">
      <Node node={mindmapData} parentColor="" isRoot={true} />
    </div>
  );
};

export default MindmapGraph;
