import React, { useState } from 'react';

type SearchBarProp = {
    onSearch: (query: string) => void
}

const SearchBar: React.FC<SearchBarProp> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(searchQuery);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-8">
            <div className='flex items-center mb-2'>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleChange}
                    placeholder="Search pets..."
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded ml-2">Search</button>
        </form>
    );
}

export default SearchBar;
