import React, { useState } from "react";
import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";
import { useLoaderData, useParams } from 'react-router-dom';

const EditBooks = () => {
  const { id } = useParams();
  const { bookTitle, authorName, imageURL, category, bookDescription, bookPdfUrl, price } = useLoaderData(); // Add price here
  
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design"
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  // handle book submission
  const handleUpdate = (event) => { 
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfUrl = form.bookPdfUrl.value;
    const price = form.price.value;  // Get price value from the form

    const updateBookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPdfUrl,
      price,  // Add price to the update object
    };

    // Update book data
    fetch(`http://localhost:5000/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateBookObj)
    })
      .then(res => res.json())
      .then(data => {
        alert("Book is updated successfully!!");
      });
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update the book data</h2>
      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* First row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="Book name" defaultValue={bookTitle} required />
          </div>
          {/* Author Name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" name="authorName" type="text" placeholder="Author Name" defaultValue={authorName} required />
          </div>
        </div>
        {/* Second row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput id="imageURL" name="imageURL" type="text" placeholder="Book image URL" defaultValue={imageURL} required />
          </div>
          {/* Category */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookCategory" value="Book Category" />
            </div>
            <select
              id="bookCategory"
              name="categoryName"
              className="w-full rounded border-gray-300"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Book Description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            name='bookDescription'
            placeholder="Write your book description"
            required
            className='w-full'
            rows={6}
            defaultValue={bookDescription}
          />
        </div>

        {/* Book PDF Link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPdfUrl" value="Book PDF URL" />
          </div>
          <TextInput
            id="bookPdfUrl"
            name='bookPdfUrl'
            type="text"
            placeholder="bookPdfUrl"
            required
            defaultValue={bookPdfUrl}
          />
        </div>

        {/* Book Price */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="price" value="Book Price ($)" />
          </div>
          <TextInput
            id="price"
            name="price"
            type="number"
            placeholder="Price"
            required
            defaultValue={price} // Assuming price was passed in useLoaderData
          />
        </div>

        <Button type="submit" className='mt-5'>Update Book</Button>
      </form>
    </div>
  );
}

export default EditBooks;
