import { useEffect, useState } from "react"

export const useOnline =()=>{
    const [isOnline,setIsOnline] = useState(true);
    
    const handeleOnline =()=>{
        setIsOnline(true);
    }

    const handleOffline = () =>{
        setIsOnline(false)
    }

    useEffect(()=>{
        window.addEventListener('online',handeleOnline);
        window.addEventListener('offline',handleOffline);

        return ()=>{
            window.removeEventListener('online',handeleOnline);
            window.removeEventListener('offline',handleOffline);
        }
    },[])
    
    return isOnline;

}

