const getBaseUrl = () => {
    return import.meta.env.PROD 
        ? "https://build-full-stack-book-store-mern-app-1.onrender.com/" 
        : "http://localhost:5000"
}

export default getBaseUrl;