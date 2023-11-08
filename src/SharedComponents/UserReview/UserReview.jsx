import React, { useState } from 'react';

const UserReview = ({ handleReview, handleRatingChange, rating }) => {

  return (

    <form onSubmit={handleReview} method="dialog" className="flex flex-col p-6 space-y-6 md:py-0 md:px-6">
      <label className="block">
        <span className="mb-2">User Name:</span>
        <input type="text" name='username' placeholder="user name" className="block w-full rounded-md shadow-sm focus:ring border p-2 border-[#dbb878] focus:ri focus:ri dark:bg-gray-800" />
      </label>

      <div className='text-center'>
        <div className="rating">
          {[1, 2, 3, 4, 5].map((value) => (
            <input
              key={value}
              type="radio"
              name="rating"
              value={value}
              className="mask mask-star-2 bg-[#dbb878]"
              onChange={handleRatingChange}
              checked={rating === value}
            />
          ))}
        </div>
      </div>

 
      <label className="block">
        <span className="mb-2">Feedback:</span>
        <textarea rows="3" name='comment' className="block w-full rounded-md focus:ring focus:ri focus:ri dark:bg-gray-800 border p-2 border-[#dbb878]"></textarea>
      </label>
      <button type="submit" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ri  dark:bg-[#dbb878] dark:text-gray-900 focus:ri hover:ri">Submit</button>

      <form method="dialog" className='text-center'>
        {/* if there is a button in form, it will close the modal */}
        <button className="btn text-white btn-error">Close</button>
      </form>
    </form>
  );
};

export default UserReview;