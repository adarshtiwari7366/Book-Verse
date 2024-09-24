import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from "flowbite-react";
const UploadBook = () => {
  const bookCategories=[
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Biography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Humour",
    "Romance",
    "Religion",
    "Art and Design"
  ]
  const [selectedBookCategory,setSelectedBookCategory]=useState(bookCategories[0]);
  const handleChangeSelectedValue = (event) => {
    // console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  }
  //handle book submission
  const handleBookSubmit = (event)=>{
    event.preventDefault();
    const form=event.target;
    const bookTitle=form.bookTitle.value;
    // console.log(bookTitle);
    const authorName=form.authorName.value;
    const category=form.categoryName.value;
    const imageURL=form.imageURL.value;
    const bookDescription=form.bookDescription.value;
    const bookPDFUrl=form.bookPDFUrl.value;

    const bookObj={
      bookTitle,authorName,imageURL,category,bookDescription,bookPDFUrl
    }
    console.log(bookObj)
    // send data to db
    fetch("https://bookverse-1.onrender.com/upload-book/",{
      method:"POST",
      headers:{
        "Content-type":"application/json",
      },
      body:JSON.stringify(bookObj)
    }).then(res=>res.json()).then(data=>{
      // console.log(data);
      alert("Book uploaded successfully!!")
      form.reset();
    })
  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload a book</h2>
      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row */}
      <div className='flex gap-8'>
        {/* book name */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="Book name" required />
      </div>
      {/* author name */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" name="authorName" type="text" placeholder="Author name" required />
      </div>
      </div>
      {/* second row */}
      <div className='flex gap-8'>
        {/* image url */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book Image URL" />
        </div>
        <TextInput id="imageURL" name="imageURL" type="text" placeholder="Book Image URL" required />
      </div>
      {/* category */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book Category" />
        </div>
        <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory}
        onChange={handleChangeSelectedValue}>
          {
            bookCategories.map((option)=><option key={option} value={option}>{option}</option>)
          }

        </Select>
      </div>
      </div>
      {/* book desc */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription" placeholder="Write your book description..." req
        uired rows={8} className='w-full'/>
      </div>
      {/* book pdf */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="Book PDF URL" />
        </div>
        <TextInput id="bookPDFUrl" name="bookPDFURL" type="text" placeholder="Book PDF URL" required />
      </div>

      <Button type="submit" className='mt-5'>Upload Book</Button>
    </form>
    </div>
  )
}

export default UploadBook