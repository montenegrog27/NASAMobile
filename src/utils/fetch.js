const API_KEY = "wVUbpvzBsoqU1aBqwVfPGIz4w3tNrHeqolhoMoe8";
const API_URL = "https://api.nasa.gov/planetary/apod";

export default async (urlParams) => {
    try {
        const response = await fetch(`${API_URL}?api_key=${API_KEY}${urlParams?.length > 0? urlParams : ""}`,
        )
        const data = await response.json()
        return Promise.resolve(data)
    } catch (error) {
        return Promise.reject        
    }
}