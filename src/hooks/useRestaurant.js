import { useEffect, useState } from "react"
import {RESTAURANT_MENU_URL} from "../util/constants";

export const  useRestaurant =(id)=>{
    const [resaurant,setResaurant] = useState(null);

    const getRestaurantInfo =async ()=>{
        let res = await fetch(RESTAURANT_MENU_URL +id);
        let resaurant = await res.json();
        setResaurant(resaurant?.data?.cards)
    }
    useEffect(()=>{

        getRestaurantInfo();
        
    },[])

    return resaurant
}