import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import news1 from "../../assets/news/news-1.png"
import news2 from "../../assets/news/news-2.png"
import news3 from "../../assets/news/news-3.png"
import news4 from "../../assets/news/news-4.png"
import { Link } from 'react-router-dom';

const news = [
    {
        "id": 1,
        "title": "Global Climate Summit Calls for Urgent Action",
        "description": "World leaders gather at the Global Climate Summit to discuss urgent strategies to combat climate change, focusing on reducing carbon emissions and fostering renewable energy solutions.",
        "image": news1,
        "category": "Environment",
        "date": "Oct 1, 2025"
    },
    {
        "id": 2,
        "title": "Breakthrough in AI Technology Announced",
        "description": "A major breakthrough in artificial intelligence has been announced by researchers, with new advancements promising to revolutionize industries from healthcare to finance.",
        "image": news2,
        "category": "Technology",
        "date": "Sep 28, 2025"
    },
    {
        "id": 3,
        "title": "New Space Mission Aims to Explore Distant Galaxies",
        "description": "NASA has unveiled plans for a new space mission that will aim to explore distant galaxies, with hopes of uncovering insights into the origins of the universe.",
        "image": news3,
        "category": "Science",
        "date": "Sep 25, 2025"
    },
    {
        "id": 4,
        "title": "Stock Markets Reach Record Highs Amid Economic Recovery",
        "description": "Global stock markets have reached record highs as signs of economic recovery continue to emerge following the challenges posed by the global pandemic.",
        "image": news4,
        "category": "Finance",
        "date": "Sep 22, 2025"
    }
]

const News = () => {
  return (
    <div className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4'>
            <div className='text-center mb-12'>
                <h2 className='text-4xl font-bold text-gray-900 mb-4'>Literary Insights</h2>
                <p className='text-gray-600'>Stay updated with book reviews, author interviews, and reading guides</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
                {
                    [
                        {
                            title: "The Books You Need to Read in 2023",
                            description: "This is the blog we know you've all been waiting for. We present the top 10 titles for 2023 in fiction, non-fiction and children's books; a glorious mix of masterful storytelling...",
                            image: news1
                        },
                        {
                            title: "February's Best Children's Books", 
                            description: "Some of the finest children's authors currently writing have books publishing this month, from Natasha Farrant to Elle McNicoll and from Tahereh Mafi to Harriet Muncaster...",
                            image: news2
                        },
                        {
                            title: "What to Read Next After Damascus Station",
                            description: "A spy thriller with real authenticity due to its author's previous career as a CIA operative, Damascus Station has proven to be a phenomenal word-of-mouth hit...",
                            image: news3
                        },
                        {
                            title: "The Best Dark Academia Books",
                            description: "Abounding in sinister secrets - sometimes magical, sometimes not - locked in the libraries and halls of mysterious educational institutions, dark academia has become...",
                            image: news4
                        }
                    ].map((item, index) => (
                        <article key={index} className='bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group cursor-pointer transform hover:scale-105'>
                            <div className='flex flex-col md:flex-row'>
                                <div className='md:w-1/3'>
                                    <img 
                                        src={item.image} 
                                        alt={item.title}
                                        className='w-full h-48 md:h-full object-cover'
                                    />
                                </div>
                                <div className='md:w-2/3 p-6'>
                                    <h3 className='text-xl font-bold text-gray-900 group-hover:text-orange-600 mb-3 transition-colors duration-300'>
                                        {item.title}
                                    </h3>
                                    <div className='w-12 group-hover:w-20 h-1 bg-orange-600 mb-4 transition-all duration-300'></div>
                                    <p className='text-gray-600 text-sm mb-4 leading-relaxed'>
                                        {item.description}
                                    </p>
                                    <Link 
                                        to="/" 
                                        className='inline-flex items-center text-orange-600 hover:text-orange-700 font-medium transition-colors'
                                    >
                                        Read more →
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default News