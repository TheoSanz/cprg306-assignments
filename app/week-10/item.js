import React from 'react';

const Item = ({ item, onSelect }) => {
    return (
        <div onClick={() => onSelect(item)} className="p-4 mb-4 bg-gray-800 cursor-pointer rounded shadow-lg hover:bg-gray-700 transition duration-200 max-w-xs">
            <div className="text-xl font-bold flex items-center">
                {item.name}
                <span className="ml-2">{item.emoji}</span>
            </div>
            <div className="text-sm mt-1">Qty {item.quantity} - {item.category}</div>
        </div>
    );
};

export default Item;
