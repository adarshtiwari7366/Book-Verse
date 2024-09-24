import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const BestSellerBooks = () => {
    const [books,setBooks]=useState([]);
    useEffect(()=>{
        fetch("https://bookverse-1.onrender.com/all-books").then(res=>res.json()).then(data=>setBooks(data.slice(0,8)));
    },[])
  return (
    <BookCards books={books} headline="Best Seller Books"/>
  )
}

export default BestSellerBooks
