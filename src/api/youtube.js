import axios from "axios"

const KEY = "AIzaSyDUM6KZg9KKDql6IlOUotYFHisO6Fznd7Q"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
})