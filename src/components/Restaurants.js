import { useState } from 'react';
import {useAllRestaurants} from '../hooks/useAllRestaurant';
import RestaurantCard from './RestaurantCard';

const Restaurants =()=>{
    let restaurants = useAllRestaurants();
    const [searchValue,setSearchValue]=useState('');
    console.log(restaurants)
    if(!restaurants) return <h1>Loading</h1>
    return (<div className='mt-10'>
        <div className='flex justify-center mb-10'>
            <input type='text' placeholder="Restarant Name" value={searchValue} className='border border-red-500 p-2 max-w-5xl focus:none'
            onChange={(e)=>setSearchValue(e.target.value)}/> 
            <button className="p-2  text-white  bg-red-500">Search</button>
        </div>
        {searchValue?<p className='m-2 ml-5 text-gray-400'>SEARCH VALUE OF <span className='text-black text-xl font-semibold'>{searchValue}</span></p>:null}
        <div className='flex flex-wrap gap-5 justify-evenly'>
        {restaurants?.map(restaurant=>{
            return <RestaurantCard key ={restaurant?.data?.data?.id} {...restaurant?.data?.data}/>
        })}
        </div>
       
    </div>)
}

export default Restaurants