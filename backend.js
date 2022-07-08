import BackendService from "./api/index.js";

const singlePost = {
    id: 101,
    title: 'Ramir',
    body: 'Abdulov',
    userId: 1,
}

const JSONPlaceholderAPI = new BackendService()
const posts = await JSONPlaceholderAPI.posts.getAllPosts()
const createdPost = await JSONPlaceholderAPI.posts.createPost(singlePost)

console.log('created post : ', createdPost)