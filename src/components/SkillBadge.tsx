import React from 'react';

interface SkillBadgeProps {
  name: string;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Expert';
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, level }) => {
  const getLevelColor = () => {
    switch (level) {
      case 'Expert':
        return 'bg-purple-100 text-purple-600';
      case 'Avancé':
        return 'bg-blue-100 text-blue-600';
      case 'Intermédiaire':
        return 'bg-green-100 text-green-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className={`px-4 py-2 rounded-full ${getLevelColor()} flex items-center gap-2`}>
      <span className="font-medium">{name}</span>
      <span className="text-sm opacity-75">• {level}</span>
    </div>
  );
};

export default SkillBadge;