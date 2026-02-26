import React from 'react'

const UserCard = (props) => {

   const {firstName, lastName, photourl, age, gender} = props.user;

  return (
    <div className="card bg-base-300 w-96 shadow-xl">
  <figure>
    <img
      src={photourl}
      alt="photo"
    />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName + " " + lastName}</h2>
     {age && gender && <p>{age + " " + gender}</p>}
    <div className="card-actions justify-center my-4">

      <button className="btn btn-secondary">Ignore</button>
      <button className="btn btn-primary">Interested</button>
    </div>
  </div>
</div>
  )
}

export default UserCard