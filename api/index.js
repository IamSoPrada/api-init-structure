import axios from "axios";
import PostsService from "./postsService.js";

const BASE_URL="https://jsonplaceholder.typicode.com"

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    'Content-type': 'application/json; charset=UTF-8',
});


class BackendService {
    posts = new PostsService()
    //static comments = new Comments()
}
export default BackendService