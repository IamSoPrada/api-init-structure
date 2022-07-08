import {axiosInstance} from "./index.js";
import {apiRoutes} from "./routes.js";

class PostsService {

    getAllPosts = async () => {
        try{
            const {data, status} = await axiosInstance.get(apiRoutes.posts())
            console.log("posts", data)
            console.log("status", status)
            return data
        } catch(e) {
            console.error(e.toString())
            throw new Error(e.toString())
        }
    }

    createPost = async (payload) => {
        try{
            const {data, status} = await axiosInstance.post(apiRoutes.posts(), payload)
            console.log("posts", data)
            console.log("status", status)
            return data
        } catch(e) {
            console.error(e.toString())
            throw new Error(e.toString())
        }
    }


    updatePost = async (payload) => {
        try{
            const {data, status} = await axiosInstance.put(`${apiRoutes.posts()}${payload.id}`, payload)
            console.log("post", data)
            console.log("status", status)
            return data
        } catch(e) {
            console.error(e.toString())
            throw new Error(e.toString())
        }
    }
}

export default PostsService