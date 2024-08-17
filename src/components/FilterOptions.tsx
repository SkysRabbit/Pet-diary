import React, { useState } from 'react';

interface FilterOptionsProps {
    onFilter: (filter: Filter) => void;
}

interface Filter {
    species?: string;
    age?: number;
}

const FilterOptions: React.FC<FilterOptionsProps> = ({ onFilter }) => {
    const [filter, setFilter] = useState<Filter>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilter(prevFilter => ({ ...prevFilter, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onFilter(filter);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-8">
            <div className="flex items-center mb-4">
                <label htmlFor="species" className="text-sm font-bold mr-2">Species:</label>
                <select
                    id="species"
                    name="species"
                    value={filter.species || ''}
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-3 py-2"
                >
                    <option value="">All</option>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    <option value="Bird">Bird</option>
                    {/* Add more options as needed */}
                </select>
            </div>
            <div className="flex items-center">
                <label htmlFor="age" className="text-sm font-bold mr-2">Age:</label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    min={0}
                    value={filter.age || ''}
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-3 py-2 w-20"
                />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-2">Apply Filter</button>
        </form>
    );
}

export default FilterOptions;
