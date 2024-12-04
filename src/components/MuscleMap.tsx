import React from 'react';
import { frontMuscles, backMuscles } from '../data/muscleData';
import Header from './Header';
import Legend from './Legend';
import MuscleView from './MuscleView';

interface MuscleMapProps {
  selectedMuscle: string;
  onMuscleClick: (muscle: string) => void;
}

const MuscleMap: React.FC<MuscleMapProps> = ({ selectedMuscle, onMuscleClick }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <MuscleView
          muscles={frontMuscles}
          selectedMuscle={selectedMuscle}
          onMuscleClick={onMuscleClick}
          title="Front View"
        />
        <MuscleView
          muscles={backMuscles}
          selectedMuscle={selectedMuscle}
          onMuscleClick={onMuscleClick}
          title="Back View"
        />
      </div>
      <Legend />
    </div>
  );
};

export default MuscleMap;