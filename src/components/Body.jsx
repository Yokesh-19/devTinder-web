import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import NavBar from './NavBar'
import { useDispatch, useSelector } from 'react-redux'
import {addUser} from "../utils/useSlice"
import { useEffect } from 'react'
import axios from 'axios'
import {BASE_URL} from "../utils/constants"

export const Body = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const userData = useSelector((store) => store.user);     //gets the user data if the token or cookie is present[loggedIn]

   const fetchUser = async () => {
    if(userData)
    {
      return ;
    }
    try
    {
      const res = await axios.get(BASE_URL + "/profile/view",{
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    }
    catch(err)
    {
      if(err.response?.status === 401)
      {
        navigate("/login");
      }
       console.error(err);
    }
   };

   useEffect(() =>{
      fetchUser();       //Only make api call when no data is store
   }, []);


  return (
    <div className="min-h-screen flex flex-col">
        <NavBar/>      {/*//every page will contain navbar*/}
        <div className="flex-grow">
          <Outlet/>     {/*//any children of body will render over here*/}
        </div>
        <Footer/>
    </div>
  )
}
