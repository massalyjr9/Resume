import React from 'react';

interface ExperienceProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const Experience: React.FC<ExperienceProps> = ({
  title,
  company,
  location,
  period,
  description
}) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-lg text-gray-700 mt-2">{company}</p>
      <div className="flex justify-between items-center mt-2 text-gray-600">
        <span>{location}</span>
        <span>{period}</span>
      </div>
      <ul className="mt-4 space-y-2">
        {description.map((item, index) => (
          <li key={index} className="text-gray-600">• {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;