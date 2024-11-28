import { Link } from 'react-router-dom';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';
import { FaCartShopping } from 'react-icons/fa6'; // Import the FaCartShopping icon

const BookCards = ({ headline, books }) => {
    // Filter out the book at index 2 (remove the "tomorrow" book)
    const filteredBooks = books.filter((_, index) => index !== 2);

    // console.log(filteredBooks.length); // Check if filteredBooks has items

    return (
        <div className='my-16 px-4 lg:px-24'>
            <h2 className='text-5xl text-center font-bold text-black my-5'>
                {headline}
            </h2>

            {/* cards */}
            <div className='mt-12'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper w-full h-full"
                >
                    {filteredBooks.length > 0 ? (
                        filteredBooks.map((book) => (
                            <SwiperSlide key={book._id}>
                                <Link to={`/book/${book._id}`}>
                                    <div className='relative'>
                                        <img src={book.imageURL} alt="" />
                                        <div className='absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded'>
                                            <FaCartShopping className='w-4 h-4 text-white' />
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <h3>{book.bookTitle}</h3>
                                            <p>{book.authorName}</p>
                                        </div>
                                        <div>
                                            <p>$10.00</p>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))
                    ) : (
                        <div>No books available</div>
                    )}
                </Swiper>
            </div>
        </div>
    );
};

export default BookCards;
