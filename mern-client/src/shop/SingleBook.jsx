import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaDownload } from "react-icons/fa6";

const SingleBook = () => {
    const { _id, bookTitle, imageURL, authorName, bookDescription,bookPDFUrl} = useLoaderData();

    return (
        <div className='min-h-screen w-full bg-teal-100 flex flex-col justify-center items-center py-10'>
            <div className='w-full lg:px-24 flex flex-col md:flex-row items-center justify-between gap-10'>
                {/* Book Image */}
                <div className='md:w-1/3 flex justify-center md:justify-start'>
                    <img 
                        src={imageURL} 
                        className='object-cover w-[200px] h-[300px] rounded-md' 
                        alt={bookTitle} 
                    />
                </div>

                {/* Book Information */}
                <div className='md:w-2/3 flex flex-col items-start'>
                    <div>
                        <p className='text-4xl font-bold my-3'>{bookTitle}</p>
                        <p className='text-xl my-3'><span className='italic'>By </span>{authorName}</p>
                        <p>{bookDescription}</p>
                    </div>
                    <div className='mt-10'>
                        <a 
                            href={bookPDFUrl} 
                            className='block text-center'
                        >
                            <button 
                                className='flex justify-center items-center bg-blue-700 text-white font-semibold px-5 py-2
                                rounded hover:bg-black transition-all duration-300'
                            >
                                <FaDownload />
                                <span className='ml-5'>Get PDF</span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBook;
