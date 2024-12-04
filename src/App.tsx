import React, { useState } from 'react';
import MuscleMap from './components/MuscleMap';

function App() {
  const [selectedMuscle, setSelectedMuscle] = useState<string>('');

  const handleMuscleClick = (muscle: string) => {
    setSelectedMuscle(muscle === selectedMuscle ? '' : muscle);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <MuscleMap 
        selectedMuscle={selectedMuscle}
        onMuscleClick={handleMuscleClick}
      />
    </div>
  );
}

export default App;