import React, { useState } from 'react';

const UserReview = ({handleReview,handleRatingChange,rating}) => {
    
    return (
        //         <div className="flex flex-col min-w-6xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100" >
        // 	<div className="flex flex-col items-center w-full" >
        // 		<h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
        // 		<div className="flex flex-col items-center py-6 space-y-3" >
        // 			<span className="text-center">How was your experience?</span>
        // 			<div className="flex space-x-3" >
        // 				<button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
        // 					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
        // 						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        // 					</svg>
        // 				</button>
        // 				<button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
        // 					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
        // 						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        // 					</svg>
        // 				</button>
        // 				<button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
        // 					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
        // 						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        // 					</svg>
        // 				</button>
        // 				<button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
        // 					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
        // 						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        // 					</svg>
        // 				</button>
        // 				<button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
        // 					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-gray-600">
        // 						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        // 					</svg>
        // 				</button>
        // 			</div>
        // 		</div>
        // 		<div className="flex flex-col w-full" >
        // 			<textarea rows="3" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
        // 			<button type="button" className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400">Leave feedback</button>
        // 		</div>
        // 	</div>
        // 	<div className="flex items-center justify-center" >
        // 		<a rel="noopener noreferrer" href="#" className="text-sm dark:text-gray-400">Maybe later</a>
        // 	</div>
        // </div>

        <form onSubmit={handleReview} className="flex flex-col p-6 space-y-6 md:py-0 md:px-6">
            <label className="block">
                <span className="mb-2">User Name:</span>
                <input type="text" name='username' placeholder="user name" className="block w-full rounded-md shadow-sm focus:ring border p-2 border-[#dbb878] focus:ri focus:ri dark:bg-gray-800" />
            </label>
            {/* <div className='text-center'>
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
            </div> */}

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
            <button type="submit" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ri dark:bg-[#dbb878] dark:text-gray-900 focus:ri hover:ri">Submit</button>
        </form>
    );
};

export default UserReview;