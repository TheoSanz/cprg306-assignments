"use client";
import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items, onItemSelect }) => {
    const [sortBy, setSortBy] = useState('name');

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    return (
        <div>
            <div className="mb-4">
                <button
                    className={`mr-2 p-2 ${sortBy === 'name' ? 'bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white' : 'bg-gray-500'}`}
                    onClick={() => setSortBy('name')}
                >
                    Sort by Name
                </button>
                <button
                    className={`p-2 ${sortBy === 'category' ? 'bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white' : 'bg-gray-500'}`}
                    onClick={() => setSortBy('category')}
                >
                    Sort by Category
                </button>
            </div>
            <div className="flex flex-col gap-2">
                {sortedItems.map((item) => (
                    <Item key={item.id || item.name} item={item} onSelect={onItemSelect} />
                ))}
            </div>
        </div>
    );
};

export default ItemList;
