import React from 'react'
import { FiShoppingCart, FiHeart } from 'react-icons/fi'
import { getImgUrl } from '../../utils/getImgUrl'

import { Link } from'react-router-dom'

import { useDispatch } from'react-redux'
import { addToCart } from '../../redux/features/cart/cartSlice'

const BookCard = ({book}) => {
    const dispatch =  useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:scale-105 cursor-pointer">
            <div className="flex flex-col">
                <div className="relative overflow-hidden bg-gray-100 aspect-[3/4]">
                    <Link to={`/books/${book._id}`}>
                        <img
                            src={`${getImgUrl(book?.coverImage)}`}
                            alt={book?.title}
                            className="w-full h-full object-cover transition-transform duration-300"
                        />
                    </Link>
                    <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 group">
                        <FiHeart className="w-4 h-4 text-gray-600 group-hover:text-red-500 transition-colors" />
                    </button>
                </div>

                <div className="p-6">
                    <Link to={`/books/${book._id}`}>
                        <h3 className="text-xl font-bold text-gray-900 hover:text-orange-600 mb-3 transition-colors">
                            {book?.title}
                        </h3>
                    </Link>
                    <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                        {book?.description.length > 60 ? `${book.description.slice(0, 60)}...` : book?.description}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <span className="text-xl font-bold text-gray-900">₹ {book?.newPrice}</span>
                            {book?.oldPrice && (
                                <span className="text-sm text-gray-500 line-through ml-2">₹ {book?.oldPrice}</span>
                            )}
                        </div>
                    </div>
                    <button 
                        onClick={() => handleAddToCart(book)}
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                        <FiShoppingCart className="w-4 h-4" />
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BookCard