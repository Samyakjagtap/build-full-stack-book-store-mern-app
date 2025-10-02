const getBaseUrl = () => {
    return import.meta.env.PROD 
        ? "https://your-backend-service-name.onrender.com" 
        : "http://localhost:5000"
}

export default getBaseUrl;