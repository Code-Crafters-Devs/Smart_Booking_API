import React from 'react';

const RecommendationCard = ({ title, description, imageUrl }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            {imageUrl && <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />}
            <div className="p-4">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    );
};

export default RecommendationCard;