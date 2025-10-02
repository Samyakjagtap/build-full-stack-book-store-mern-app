import React, { useEffect, useState } from 'react'
import BookCard from '../books/BookCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';

const categories = [
  "Choose a genre", 
  "Business", 
  "Books", 
  "Marketing", 
  "Horror", 
  "Young-adult", 
  "Fantasy", 
  "Romance", 
  "Classic", 
  "Children", 
  "Philosophy", 
  "Sci-fi", 
  "Thriller", 
  "Mystery", 
  "Indian-literature", 
  "Self-help", 
  "Spirituality", 
  "Biography", 
  "Memoir", 
  "Historical-fiction", 
  "Drama"
]

const TopSellers = () => {
    
    const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

   const {data: books = [], isLoading, isError, error} = useFetchAllBooksQuery();
   
   console.log('TopSellers - books data:', books);
   console.log('TopSellers - isLoading:', isLoading);
   console.log('TopSellers - isError:', isError);
   console.log('TopSellers - error:', error);
  
    const filteredBooks = selectedCategory === "Choose a genre" ? books : books.filter(book => {
        // Handle category matching with proper formatting
        const bookCategory = book.category?.toLowerCase();
        const selectedCat = selectedCategory.toLowerCase().replace(/\s+/g, '-');
        console.log('Filtering:', { bookCategory, selectedCat, selectedCategory, match: bookCategory === selectedCat });
        return bookCategory === selectedCat;
    })
    
    console.log('Filtered books:', filteredBooks.length, 'out of', books.length);

    return (
        <div className='py-16 bg-gray-50'>
            <div className='max-w-7xl mx-auto px-4'>
            <div className='mb-12'>
                <h2 className='text-4xl font-bold text-gray-900 mb-2'>Bestsellers</h2>
                <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
                    <p className='text-gray-600 mb-4 md:mb-0'>Most loved by our community of readers</p>
                    <div className='relative'>
                        <select 
                            value={selectedCategory} 
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className='appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 cursor-pointer'
                        >
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category === "Choose a genre" ? "All Genres" : 
                                     category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                </option>
                            ))}
                        </select>
                        <div className='absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none'>
                            <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    navigation={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        }
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        filteredBooks.length > 0 && filteredBooks.map((book, index) => (
                            <SwiperSlide key={index}>
                                <div className='relative'>
                                    <div className='absolute top-4 left-4 z-10'>
                                        <span className='bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold'>
                                            #{index + 1} Bestseller
                                        </span>
                                    </div>
                                    <BookCard book={book} showRanking={true} />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>


        </div>
    )
}

export default TopSellers