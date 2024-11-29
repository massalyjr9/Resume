import React from 'react';

interface EducationProps {
  title: string;
  school: string;
  location: string;
  period: string;
}

const Education: React.FC<EducationProps> = ({
  title,
  school,
  location,
  period
}) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-lg text-gray-700 mt-2">{school}</p>
      <div className="flex justify-between items-center mt-2 text-gray-600">
        <span>{location}</span>
        <span>{period}</span>
      </div>
    </div>
  );
};

export default Education;