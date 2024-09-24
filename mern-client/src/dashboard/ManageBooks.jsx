import React, { useEffect, useState } from 'react'
import { Table } from "flowbite-react";
import {Link} from "react-router-dom";
const ManageBooks = () => {
  const [allBooks,setAllBooks]=useState([])
  useEffect(()=>{
    fetch("https://bookverse-1.onrender.com/all-books").then(res=>res.json()).then(data=>setAllBooks(data));
  },[])
  //to delete a book
  const handleDelete=(id)=>{
    fetch(`https://bookverse-1.onrender.com/book/${id}`,{
      method:"DELETE"
    }).then(res=>res.json()).then(data=>{
      fetch("https://bookverse-1.onrender.com/all-books").then(res=>res.json()).then(data=>setAllBooks(data));
    })
  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Your books</h2>
      {/* table for book data */}
      <Table className='lg:w-[1180px]'>
      <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          {/* <Table.HeadCell>Price</Table.HeadCell> */}
          <Table.HeadCell>
            <span>Edit and Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {
          // allBooks.map((item,index)=><Table.Body className="divide-y">
          //   <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          //         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          //           {index+1}
          //         </Table.Cell>
          //         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          //           {item.bookTitle}
          //         </Table.Cell>
          //         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          //           {item.authorName}
          //         </Table.Cell>
          //         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          //           {item.category}
          //         </Table.Cell>
          //         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          //           $10
          //         </Table.Cell>
          //     </Table.Row>
          // </Table.Body>)
        }
        
          <Table.Body className="divide-y">
          {
            allBooks.map((item,index)=>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {index+1}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {item.bookTitle}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {item.authorName}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {item.category}
                  </Table.Cell>
                  {/* <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    $10
                  </Table.Cell> */}
                  <Table.Cell>
                    <Link className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5"
                    to={`/admin/dashboard/edit-books/${item._id}`}>
                        Edit
                    </Link>
                    <button onClick={()=>handleDelete(item._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</button>
                  </Table.Cell>
              </Table.Row>
            )
          }
        </Table.Body>
        
      </Table>
    </div>
  )
}

export default ManageBooks