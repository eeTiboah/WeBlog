import Home from '../components/Home.vue'
import Post from '../components/Post.vue'

export const routes = [
        {
            path: '',
            name: 'Home',
            component: Home
        },
        {
            path: '/post/:id/',
            name: 'Post',
            component: Post
        }
]