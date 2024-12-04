import React from 'react';
import { Share2 } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="bg-blue-600 w-full rounded-xl p-6 text-white mb-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Muscle Heatmap</h1>
        <button className="p-2 hover:bg-blue-700 rounded-full">
          <Share2 size={24} />
        </button>
      </div>
      <p className="text-lg">Last 30 days</p>
    </div>
  );
};

export default Header;