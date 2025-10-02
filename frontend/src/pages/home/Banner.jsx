import React from 'react'

import bannerImg from "../../assets/banner.png"
// Import book cover images
import book1 from "../../assets/books/book-1.png"
import book2 from "../../assets/books/book-2.png"
import book3 from "../../assets/books/book-3.png"
import book4 from "../../assets/books/book-4.png"
import book5 from "../../assets/books/book-5.png"
import book6 from "../../assets/books/book-6.png"

const Banner = () => {
  return (
    <>
      {/* Hero Section */}
      <div className='bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-8 md:p-16 mb-12'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
          <div className='md:w-1/2 w-full'>
            <div className='mb-4'>
              <span className='inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800'>
                ⭐ Fresh This Week
              </span>
            </div>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight'>
              Discover Your Next{' '}
              <span className='text-orange-600'>Literary Adventure</span>
            </h1>
            <p className='text-lg text-gray-600 mb-8 max-w-lg'>
              Immerse yourself in carefully curated stories that inspire, challenge, and transport you to new worlds. From pulse-pounding thrillers to transformative memoirs.
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              
            </div>
          </div>
          
          <div className='md:w-1/2 w-full flex justify-center'>
            <div className='relative'>
              {/* Animated Book Images */}
              <div className='flex space-x-8'>
                <div className='book-popup book-float book-1 cursor-pointer transform hover:scale-110 transition-transform duration-300'>
                  <img 
                    src={book1} 
                    alt="Book Cover" 
                    className='w-44 h-56 object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300'
                  />
                </div>
                <div className='book-popup book-float book-2 cursor-pointer transform hover:scale-110 transition-transform duration-300'>
                  <img 
                    src={book2} 
                    alt="Book Cover" 
                    className='w-44 h-56 object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300'
                  />
                </div>
                <div className='book-popup book-float book-3 cursor-pointer transform hover:scale-110 transition-transform duration-300'>
                  <img 
                    src={book3} 
                    alt="Book Cover" 
                    className='w-44 h-56 object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300'
                  />
                </div>
              </div>
              
              {/* Additional floating books for more dynamic effect */}
              <div className='absolute -top-8 -left-6 book-popup book-float book-small-1 cursor-pointer transform hover:scale-110 transition-transform duration-300'>
                <img 
                  src={book4} 
                  alt="Book Cover" 
                  className='w-32 h-40 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'
                />
              </div>
              <div className='absolute -top-6 -right-8 book-popup book-float book-small-2 cursor-pointer transform hover:scale-110 transition-transform duration-300'>
                <img 
                  src={book5} 
                  alt="Book Cover" 
                  className='w-32 h-40 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'
                />
              </div>
              <div className='absolute top-16 -right-16 book-popup book-float book-small-3 cursor-pointer transform hover:scale-110 transition-transform duration-300'>
                <img 
                  src={book6} 
                  alt="Book Cover" 
                  className='w-28 h-36 object-cover rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner