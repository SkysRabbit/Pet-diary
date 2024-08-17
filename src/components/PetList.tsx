import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PetForm from './PetForm';
import EditPetForm from './EditPetForm';
import SearchBar from './SearchBar';

interface Pet {
    id: number;
    name: string;
    species: string;
    age: number;
}

interface Props {
    pets: Pet[];
    searchQuery: string;
    filter: {species?: string; age?: number};
}

interface EditProps {
    editPet: Pet;
}

const PetList: React.FC<Props> = ({ pets, searchQuery, filter }) => {
    const [petList, setPetList] = useState<Pet[]>(pets);
    const [editPet, setEditPet] = useState<Pet | null>(null);

    useEffect(() => {
        // 初始化寵物列表
        setPetList(pets);
    }, [pets]);

    useEffect(() => {
        let filteredList = pets;
        if (filter.species) {
            filteredList = filteredList.filter(pet => pet.species === filter.species);
        }
        if (filter.age) {
            filteredList = filteredList.filter(pet => pet.age === Number(filter.age));
        }
        setPetList(filteredList);
    }, [pets, filter]);

    // 根據搜索關鍵詞過濾寵物列表
    const filteredPets = petList.filter(pet =>
        pet.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleDelete = (id: number) => {
        // Delete pet
        alert(`Delete pet id ${id}`);
    };

    return (
        <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Pet List</h2>
            {filteredPets.length === 0 ? (
                <p className="text-gray-500">No pets found.</p>
            ) : (
                <ul className="divide-y divide-gray-200">
                    {filteredPets.map(pet => (
                        <li key={pet.id} className="py-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-bold">{pet.name}</h3>
                                    <p className="text-sm text-gray-500">{pet.species} - {pet.age} years old</p>
                                </div>
                                <div className="flex space-x-4">
                                    <Link 
                                        to={`/edit/${pet.id}`} 
                                        className="text-blue-500 px-4 py-2 bg-slate-100 hover:text-blue-700 hover:bg-slate-200 rounded shadow" 
                                        onClick={() => setEditPet(pet)}
                                    >
                                        Edit
                                    </Link>
                                    <button className="text-red-500 px-4 py-2 bg-slate-100 hover:text-red-700 hover:bg-slate-200 rounded shadow" onClick={() => handleDelete(pet.id)}>Delete</button>
                                </div>
                            </div>
                        </li>
                    ))}
                    {/* 如果 editPet 不為空，渲染編輯表單 */}
                    {editPet && <EditPetForm />}
                </ul>
            )}
        </div>
    );
};

export default PetList;
