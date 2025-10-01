const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Import the Book model
const Book = require('./src/books/book.model');

// Read books data from frontend books.json file
const booksJsonPath = path.join(__dirname, '../frontend/public/books.json');
let sampleBooks = [];

try {
    const booksData = fs.readFileSync(booksJsonPath, 'utf8');
    const booksFromJson = JSON.parse(booksData);
    
    // Transform the data to match the backend schema (remove _id field as MongoDB will generate it)
    sampleBooks = booksFromJson.map(book => {
        const { _id, ...bookWithoutId } = book;
        return bookWithoutId;
    });
    
    console.log(`Loaded ${sampleBooks.length} books from books.json`);
} catch (error) {
    console.error('Error reading books.json:', error);
    process.exit(1);
}

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