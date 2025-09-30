const http = require('http');

const options = {
  hostname: 'localhost',
  port: 5000,
  path: '/api/books',
  method: 'GET'
};

const req = http.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);
  
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log('Response:', data);
    try {
      const books = JSON.parse(data);
      console.log(`Number of books: ${books.length}`);
    } catch (e) {
      console.log('Response is not valid JSON');
    }
  });
});

req.on('error', (error) => {
  console.error('Error:', error.message);
});

req.end();