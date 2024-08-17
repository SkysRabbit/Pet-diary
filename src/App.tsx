import React, { Fragment, ReactNode } from 'react';
import PetManagementPage from './pages/PetManagementPage';
// import './output.css';

type ListProps<Item> = {
  data: Item[]
  getKey: (item: Item) => React.Key
  getRow: (item: Item) => ReactNode
}

function List<Item>({ data, getKey, getRow }: ListProps<Item>) {
  return (
    <>
      {data.map(item => (
          <Fragment key={getKey(item)}>{getRow(item)}</Fragment>
        ))}
    </>
  )
}

const App = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <nav className='bg-white shadow-sm'>
        <div className='container mx-auto px-4 py-2'>
          <h1 className='text-xl font-bold'>Pet Management System</h1>
        </div>
      </nav>
      <div className='container mx-auto py-8'>
        <PetManagementPage />
      </div>
      <List
        data={[
          {id:1, name:'Angel', like: 'Culture'},
          {id:2, name:'Alex', like: 'Gardening'}
        ]}
        getKey={person => person.id}
        getRow={person => <p>{person.name}</p>}
      />
    </div>
  )
}

export default App;
