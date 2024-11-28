import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// React icons
import { FaStar } from "react-icons/fa6";
import { Avatar } from "flowbite-react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center mb-10'>Our Customers</h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {/* Review 1 */}
          <SwiperSlide className='shadow-2x1 bg-white py-8 px-4 md:m-5 rounded-1g border'>
            <div className='space-y-6'>
              <div className='text-amber-500 flex gap-2'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className='mt-7'>
                <p className='mb-5'>This bookstore has an amazing collection! I found the perfect book for my weekend read.</p>
                <Avatar
                  alt="avatar of Mark Ping"
                  img="https://via.placeholder.com/150/FF5733/FFFFFF?text=Mark"
                  rounded
                  className='w-10 mb-4'
                />
                <h5 className='text-lg font-medium'>Mark Ping</h5>
                <p className='text-base'>CEO of ABC Company</p>
              </div>
            </div>
          </SwiperSlide>

          {/* Review 2 */}
          <SwiperSlide className='shadow-2x1 bg-white py-8 px-4 md:m-5 rounded-1g border'>
            <div className='space-y-6'>
              <div className='text-amber-500 flex gap-2'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className='mt-7'>
                <p className='mb-5'>This bookstore has the perfect blend of classics and new releases. It’s my favorite weekend spot!</p>
                <Avatar
                  alt="avatar of Emily Carter"
                  img="https://via.placeholder.com/150/337AFF/FFFFFF?text=Emily"
                  rounded
                  className='w-10 mb-4'
                />
                <h5 className='text-lg font-medium'>Emily Carter</h5>
                <p className='text-base'>Teacher</p>
              </div>
            </div>
          </SwiperSlide>

          {/* Review 3 */}
          <SwiperSlide className='shadow-2x1 bg-white py-8 px-4 md:m-5 rounded-1g border'>
            <div className='space-y-6'>
              <div className='text-amber-500 flex gap-2'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className='mt-7'>
                <p className='mb-5'>Great variety and an excellent customer service team. They helped me find exactly what I needed!</p>
                <Avatar
                  alt="avatar of James Patel"
                  img="https://via.placeholder.com/150/28A745/FFFFFF?text=James"
                  rounded
                  className='w-10 mb-4'
                />
                <h5 className='text-lg font-medium'>James Patel</h5>
                <p className='text-base'>Software Engineer</p>
              </div>
            </div>
          </SwiperSlide>

          {/* Review 4 */}
          <SwiperSlide className='shadow-2x1 bg-white py-8 px-4 md:m-5 rounded-1g border'>
            <div className='space-y-6'>
              <div className='text-amber-500 flex gap-2'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className='mt-7'>
                <p className='mb-5'>Affordable prices and a cozy atmosphere. I could stay here all day!</p>
                <Avatar
                  alt="avatar of Sophia Bennett"
                  img="https://via.placeholder.com/150/FFC107/FFFFFF?text=Sophia"
                  rounded
                  className='w-10 mb-4'
                />
                <h5 className='text-lg font-medium'>Sophia Bennett</h5>
                <p className='text-base'>College Student</p>
              </div>
            </div>
          </SwiperSlide>

          {/* Review 5 */}
          <SwiperSlide className='shadow-2x1 bg-white py-8 px-4 md:m-5 rounded-1g border'>
            <div className='space-y-6'>
              <div className='text-amber-500 flex gap-2'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className='mt-7'>
                <p className='mb-5'>The collection here is unmatched. Always find unique titles for my personal library.</p>
                <Avatar
                  alt="avatar of Rajesh Sharma"
                  img="https://via.placeholder.com/150/E83E8C/FFFFFF?text=Rajesh"
                  rounded
                  className='w-10 mb-4'
                />
                <h5 className='text-lg font-medium'>Rajesh Sharma</h5>
                <p className='text-base'>Entrepreneur</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Review;
