import React, { useState } from 'react'
import UserCard from './UserCard';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/useSlice';

const EditProfile = ({user}) => {
     const [firstName,setFirstName] = useState(user.firstName);
     const [lastName,setLastName] = useState(user.lastName);
     const [age,setAge] = useState(user.age);
     const [gender,setGender] = useState(user.gender);
     const [photourl,setPhotourl] = useState(user.photourl);
     const [error,setError] = useState("");
     const dispatch = useDispatch();
     const [showtoast,setShowtoast] = useState(false);

     const saveProfile = async () =>{
        try
        {
            const res = await axios.patch(BASE_URL + "/profile/edit",
                {firstName,lastName,age,gender,photourl},                //api call to backend api
                {withCredentials:true}
            )
            dispatch(addUser(res?.data?.data));
           setShowtoast(true);

           setTimeout(() => {
            setShowtoast(false);
           },2000);
        }
        catch(err)
        {
            setError(err?.response?.data);
        }
     }


  return (
    <>
    <div className='flex justify-center my-10'>
     <div className='flex  justify-center mx-10 '> 
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify center">Edit Profile </h2>
          <div>
              
              {/* First Name */}
              <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">First Name</span>
              </div>

              <input
                type="text"
                value={firstName}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>

               {/* Last Name */}
              <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Last Name</span>
              </div>

              <input
                type="text"
                value={lastName}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setLastName(e.target.value)}
              />

            </label>
               {/* Age */}
              <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Age</span>
              </div>

              <input
                type="text"
                value={age}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setAge(e.target.value)}
              />
            </label>

               {/* Gender  */}
              <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Gender</span>
              </div>

              <input
                type="text"
                value={gender}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setGender(e.target.value)}
              />
            </label>

               {/* Photo  Url  */}
              <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Photo URL</span>
              </div>

              <input
                type="text"
                value={photourl}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setPhotourl(e.target.value)}
              />
            </label>

          </div>
          <p className='text-red-500'>{error}</p>
          <div className="card-actions justify-center m-2"> 
            <button  className="btn  btn-primary" onClick={saveProfile}>Save Profile</button>
          </div>
        </div>
      </div>
    </div>
    <UserCard user={{firstName, lastName, gender, photourl, age}}/>
    </div>
    {showtoast && (
  <div className="toast toast-top toast-center">
    <div className="alert alert-success">
      <span>Profile saved successfully.</span>
    </div>
  </div>)}
  </>
  )
}

export default EditProfile