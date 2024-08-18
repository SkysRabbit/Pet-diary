import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PetForm from './PetForm';

interface Pet {
    id: number;
    name: string;
    species: string;
    age: number;
}

interface Props {
    pets: Pet[];
}

interface EditProps {
    editPet: Pet;
}

const EditPetForm: React.FC = () => {
    const param = useParams<{ id: string }>();
    const id = param.id;
    const [pet, setPet] = useState<Pet | null>(null);
    
    // useEffect(() => {
    //     // 模擬從API獲取寵物資訊的函數
    //     const fetchPetDetails = async (id: number) => {
    //         try {
    //             // 在這裡進行從API獲取寵物資訊的操作，這裡用setTimeout模擬一個非同步的API調用
    //             const response = await fetch(`API_URL/${id}`);
    //             const data = await response.json();
    //             setPet(data); // 將從API獲取的寵物資訊設置到state中
    //             setLoading(false); // 資料加載完成，設置loading狀態為false
    //         } catch (error) {
    //             console.error('Error fetching pet details:', error);
    //             setLoading(false); // 資料加載失敗，設置loading狀態為false
    //         }
    //     };

    //     // 呼叫fetchPetDetails函數，獲取指定ID的寵物資訊
    //     if (id) {
    //         fetchPetDetails(parseInt(id));
    //     }
    // }, [id]); // 在id發生變化時重新獲取寵物資訊

    if (!id) {
        return (<div>No ID provided</div>)
    }
    const fetchPetDetails = (petId: number) => {
        // 此處獲取寵物資訊的邏輯，暫時使用假資料
        const petDetails = {
            id: petId,
            name: 'Max',
            species: 'Cat',
            age: 2,
        };
        return petDetails;
    };

    // 從 API 或其他來源獲取編輯的寵物資訊
    const initialPet = fetchPetDetails(parseInt(id));
    return (
        <PetForm onSubmit={(pet) => alert(`${pet.name} submitted`)} initialPet={initialPet} />
    )
}

export default EditPetForm;