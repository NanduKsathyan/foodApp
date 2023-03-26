import { useContext } from "react";
import UserContext from '../context/UserContext';


const Contact =()=>{
    const {user} = useContext(UserContext)
    return (
        <div>
            <p>Contact Us</p>
            <address>
                <p>{user?.name}</p>
                <p>{user?.email}</p>
            </address>
        </div>
    )
}
export default Contact