import React, { useEffect, useState } from 'react';

type PetFormProps = {
    onSubmit: (pet: Pet) => void
    initialPet?: Pet
}

type Pet = {
    name: string
    species: string
    age: number
}

const PetForm: React.FC<PetFormProps> = ({ onSubmit, initialPet }) => {
    const [pet, setPet] = useState<Pet>(initialPet || { name: '', species: '', age: 0 });

    useEffect(() => {
        if (initialPet) {
            setPet(initialPet);
        }
        console.log(initialPet);
    }, [initialPet]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setPet(prevPet => ({ ...prevPet, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(pet);

        // API
        console.log("Submitting pet data", pet);
    };

    return (
        <form onSubmit={handleSubmit} className="mt-8">
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-bold mb-2">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={pet.name}
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="species" className="block text-sm font-bold mb-2">Species</label>
                <input
                    type="text"
                    id="species"
                    name="species"
                    value={pet.species}
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="age" className="block text-sm font-bold mb-2">Age</label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    value={pet.age}
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow">Submit</button>
        </form>
    );
}

export default PetForm;
