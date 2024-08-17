import React, { useState } from 'react';
import { Router, Routes, Route, Link, BrowserRouter, createBrowserRouter, useParams } from 'react-router-dom';
import PetList from '../components/PetList';
import PetForm from '../components/PetForm';
import SearchBar from '../components/SearchBar';
import FilterOptions from '../components/FilterOptions';
import EditPetForm from '../components/EditPetForm';
import SimpleForm from '../components/SimpleForm';

/* <Route path="/edit/:id" element={<PetList pets={[]} />} /> */
interface Pet {
    id: number;
    name: string;
    species: string;
    age: number;
}



const PetManagementPage: React.FC = () => {
    const initialPets: Pet[] = [
        { id: 1, name: 'Max', species: 'Dog', age: 3},
        { id: 2, name: 'Lucy', species: 'Cat', age: 2},
        { id: 3, name: 'Matt', species: 'Dog', age: 6},
        { id: 4, name: 'Katty', species: 'Dog', age: 4},
        { id: 5, name: 'Barbie', species: 'Cat', age: 5},
    ]

    const [searchQuery, setSearchQuery] = useState<string>('');
    const [filter, setFilter] = useState<{ species?: string; age?: number}>({});

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    const handleFilter = (filter: { species?: string; age?: number}) => {
        console.log(filter);
        setFilter(filter);
    };
    
    return (
        <BrowserRouter>
            <div className="flex min-h-screen">
                {/* 導航連結 */}
                <nav className="bg-white shadow-sm p-4">
                    <div className='container mx-auto'>
                        {/* 寵物管理標題 */}
                        <h1 className="text-3xl font-bold"><Link to="/">Pet Management</Link></h1>
                        <ul className='mt-4'>
                            <li className="mr-4 block hover:bg-gray-200 p-2">
                                {/* 使用 Link 元件設置新增寵物頁面的連結 */}
                                <Link to="/add" className="text-blue-500 hover:text-blue-700 block">Add New Pet</Link>
                            </li>
                            <li className="mr-4 block hover:bg-gray-200 p-2">
                                <Link to="/simpleForm" className="text-blue-500 hover:text-blue-700 block">Simple register form</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className='flex-1 bg-gray-100'>
                <div className="container mx-auto p-4">
                {/* 路由設定 */}
                <Routes>
                    <Route path="/" element={
                        <>
                            {/* 搜尋欄 */}
                            <SearchBar onSearch={handleSearch} />

                            {/* 篩選選項 */}
                            <FilterOptions onFilter={handleFilter} />

                            {/* 寵物列表 */}
                            <PetList pets={initialPets} searchQuery={searchQuery} filter={filter} />
                        </>
                    } />
                    <Route path="/add" element={<PetForm onSubmit={(pet) => console.log(pet)} />} />
                    <Route path="/edit/:id" element={<EditPetForm />} />
                    <Route path='/simpleForm' element={<SimpleForm />} />
\                </Routes>
                </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default PetManagementPage;
