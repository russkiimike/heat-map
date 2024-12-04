import React from 'react';
import { Muscle } from '../types/muscles';

interface MuscleViewProps {
  muscles: Muscle[];
  selectedMuscle: string;
  onMuscleClick: (muscle: string) => void;
  title: string;
}

const MuscleView: React.FC<MuscleViewProps> = ({ muscles, selectedMuscle, onMuscleClick, title }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">{title}</h2>
      <div className="relative w-full aspect-[414/736]">
        <svg
          viewBox="0 0 414 736"
          className="w-full h-full"
          style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }}
        >
          <rect width="414" height="736" fill="#1e40af" rx="20" />
          {muscles.map((muscle) => (
            <path
              key={muscle.id}
              className={`cursor-pointer transition-colors duration-200 ${
                selectedMuscle === muscle.id
                  ? 'fill-orange-500 stroke-white'
                  : 'fill-transparent stroke-white hover:fill-orange-300/50'
              }`}
              strokeWidth="2"
              onClick={() => onMuscleClick(muscle.id)}
              d={muscle.pathData}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default MuscleView;