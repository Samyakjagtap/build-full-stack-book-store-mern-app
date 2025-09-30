const mongoose = require('mongoose');
require('dotenv').config();

// Import the Book model
const Book = require('./backend/src/books/book.model');

// Sample books data
const sampleBooks = [
    {
        title: "To Kill a Mockingbird",
        description: "A gripping tale of racial injustice and childhood innocence in the American South.",
        category: "fiction",
        trending: true,
        coverImage: "book-1.png",
        oldPrice: 15.99,
        newPrice: 12.99
    },
    {
        title: "1984",
        description: "George Orwell's dystopian masterpiece about totalitarian surveillance and control.",
        category: "fiction",
        trending: true,
        coverImage: "book-2.png",
        oldPrice: 14.99,
        newPrice: 11.99
    },
    {
        title: "The Great Gatsby",
        description: "F. Scott Fitzgerald's classic novel about the Jazz Age and the American Dream.",
        category: "fiction",
        trending: false,
        coverImage: "book-3.png",
        oldPrice: 13.99,
        newPrice: 10.99
    },
    {
        title: "Think and Grow Rich",
        description: "Napoleon Hill's timeless guide to success and wealth building.",
        category: "business",
        trending: true,
        coverImage: "book-4.png",
        oldPrice: 18.99,
        newPrice: 15.99
    },
    {
        title: "The Hobbit",
        description: "J.R.R. Tolkien's beloved fantasy adventure of Bilbo Baggins.",
        category: "adventure",
        trending: false,
        coverImage: "book-5.png",
        oldPrice: 16.99,
        newPrice: 13.99
    }
];

async function addSampleBooks() {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.DB_URL);
        console.log('Connected to MongoDB');

        // Clear existing books (optional)
        await Book.deleteMany({});
        console.log('Cleared existing books');

        // Add sample books
        const result = await Book.insertMany(sampleBooks);
        console.log(`Successfully added ${result.length} books to the database`);

        // Close connection
        await mongoose.connection.close();
        console.log('Database connection closed');
    } catch (error) {
        console.error('Error adding sample books:', error);
    }
}

addSampleBooks();