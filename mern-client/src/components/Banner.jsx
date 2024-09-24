import React, { useState } from 'react'
import BannerCard from '../home/BannerCard'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Banner = () => {
   const [books,setBook]=useState([])
   const [searchBook,setSearchBook]=useState('')
   const navigate=useNavigate();

   const findAllBook=async()=>{
    const response=await fetch('https://bookverse-1.onrender.com/all-books',{
      method:'GET',
    })

    const data=await response.json()
    setBook(data)
  } 
  useEffect(() => {
    findAllBook()
  }, [])
  
  function findBookId(books, bookTitleToSearch) {
    bookTitleToSearch = bookTitleToSearch.charAt(0).toUpperCase() + bookTitleToSearch.slice(1).toLowerCase();
  return books.find((book) => book.bookTitle.toLowerCase() === bookTitleToSearch.toLowerCase());
}
    
    const handleSearch=()=>{
      const foundBook = findBookId(books, searchBook);

      if (foundBook) {
         navigate(`/book/${foundBook._id}`)
      } else {
        alert(`Book '${searchBook}' not found`);
      }
    }
    
    



   
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/* left side */}
            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-5xl font-bold leading-snug text-black'>Ultimate Destination for
                <span className='text-blue-700'> Book Lovers</span>
                </h2>
                <p className='md:w-4/5'>Dive into a World of Stories. Explore. Discover. Connect. Join us to unlock a world of stories and share your passion for reading with a vibrant community.
                </p>
                <input type="text" name="search" id="search" placeholder='Search a book'
                className='py-2 px-2 rounded-s-sm outline-none' value={searchBook} onChange={(e)=>{setSearchBook(e.target.value)}} />
                <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black 
                transition-all ease-in duration-200' onClick={handleSearch}>Search</button>
            </div>
            {/* right side */}
            <div>
                <BannerCard/>
            </div>
        </div>
    </div>
  )
}

export default Banner