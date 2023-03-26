import { useContext } from "react"
import UserContext from "../context/UserContext"

const Footer =()=>{
    let {user,setUser}= useContext(UserContext);
    
    const handleUserContext=()=>{
        setUser({name:'New User',email:'new email'})
    }
    return <div className="bg-gray-200 text-center py-5 mt-10">
        <p>Made with <span className="text-red-500">&#x2665;</span> by {user?.name}</p>
        <button onClick={handleUserContext} className='border border-black p-2 px-4 mt-5 hover:shadow'>change user context</button>
    </div>
}
export default Footer

