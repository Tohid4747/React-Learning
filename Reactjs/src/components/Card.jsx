import React from 'react'
const  Card=(props)=>{
  return (
    <div className="w-64 bg-white rounded-2xl shadow-lg p-5 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      
      <img
        src={props.profilePhoto}
        alt={props.name}
        className="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-4 border-blue-500"
      />

      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        {props.name}
      </h1>

      <h2 className="text-lg font-semibold text-gray-600 mb-2">
        Age: {props.age}
      </h2>

      <p className="text-gray-500 mb-1">
        📍 {props.city}
      </p>

      <p className="text-blue-600 font-medium mb-5">
        {props.profession}
      </p>

      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 active:scale-95 transition-all duration-200">
        Add Friend
      </button>

    </div>
  );
}

export default Card;