import React, { useEffect, useState } from 'react'
import { Card } from "flowbite-react";
import { useNavigate } from 'react-router-dom';

const Shop = () => {
  const navigate=useNavigate()
  const [books,setBooks]=useState([]);
  useEffect(()=>{
    fetch("https://bookverse-1.onrender.com/all-books").then(res=>res.json()).then(data=>setBooks(data));
  },[]);
  return (
    <div className='mt-28 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center'>All books are here</h2>
        <div  className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
              {
                books.map(book=><Card onClick={()=>{navigate(`/book/${book._id}`)}} className='cursor-pointer'>
                  <img src={book.imageURL} alt=""  className='h-96'/>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {book.bookTitle}
                  </h5>
                  {/* <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                  </p> */}
                  <p >{book.authorName}</p>
                </Card>)
              }
        </div>
    </div>
  )
}

export default Shop