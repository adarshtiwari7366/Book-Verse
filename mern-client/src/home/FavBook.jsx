import React from 'react'
import FavBookImg from "../assets/favoritebook.jpg"
import { Link } from 'react-router-dom'
const FavBook = () => {
  return (
    <div id="About" className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
            <img src={FavBookImg} alt="" className='rounded md:w-10/12'/>
        </div>
        <div className='md:w-1/2 space-y-6'>
            <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your 
            Favourite <span className='text-blue-700'>Book Here!</span></h2>
            <p className='mb-10 text-lg md:w-5/6'>Welcome to BookVerse, your ultimate online destination for book lovers. Dive into a vast library of fiction, non-fiction, classics, and contemporary bestsellers, curated to suit every taste. Whether you're an avid reader or just beginning your literary journey, BookVerse offers personalized recommendations, book reviews, and reading challenges to make your experience unique and engaging. Join us to unlock a world of stories and share your passion for reading with a vibrant community.</p>
                {/* stats */}
            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                <div>
                    <h3 className='text-3xl font-bold'>800+</h3>
                    <p className='text-base'>Book Listing</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>550+</h3>
                    <p className='text-base'>Users Registered</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>1200+</h3>
                    <p className='text-base'>PDFs Downloads</p>
                </div>
            </div>
            <Link to='/shop' className='mt-8 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2
            rounded hover:bg-black transition-all duration-300'>Explore More</button></Link>
        </div>
    </div>
  )
}

export default FavBook