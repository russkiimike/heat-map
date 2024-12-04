import React from 'react';

const Legend: React.FC = () => {
  return (
    <div className="w-full mt-6">
      <div className="flex justify-between items-center text-sm font-medium text-gray-600">
        <span>Least Worked</span>
        <span>Most Worked</span>
      </div>
      <div className="h-2 bg-gradient-to-r from-blue-100 to-orange-500 rounded-full mt-2" />
    </div>
  );
};

export default Legend;