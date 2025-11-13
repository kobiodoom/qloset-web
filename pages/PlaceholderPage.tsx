
import React from 'react';

interface PlaceholderPageProps {
  pageTitle: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ pageTitle }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm">
      <h1 className="text-3xl font-bold mb-4">{pageTitle}</h1>
      <p className="text-lg text-gray-600">
        This feature is coming soon. Stay tuned for updates!
      </p>
    </div>
  );
};

export default PlaceholderPage;
