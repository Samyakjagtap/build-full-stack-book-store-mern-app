import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import BookCard from '../books/BookCard';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';


const Recommened = () => {
   

    const {data: books = [], isLoading, isError, error} = useFetchAllBooksQuery();
    
    console.log('Recommended - books data:', books);
    console.log('Recommended - isLoading:', isLoading);
    console.log('Recommended - isError:', isError);
    console.log('Recommended - error:', error);
  return (
    <div className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4'>
            <div className='text-center mb-12'>
                <div className='flex items-center justify-center mb-4'>
                    <h2 className='text-4xl font-bold text-gray-900'>Handpicked Just For You</h2>
                </div>
                <p className='text-gray-600'>Based on your reading preferences and community favorites</p>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={24}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                    }
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    books.length > 0 && books.slice(8, 18).map((book, index) => (
                        <SwiperSlide key={index}>
                            <BookCard book={book} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </div>
  )
}

export default Recommened