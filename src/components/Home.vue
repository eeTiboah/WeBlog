<template>
  <div>
    <h2>Welcome to WeBlog</h2>
    <div class="posts">
    <paginate name="posts" :list="posts" :per="10">
        <div v-for="post in paginated('posts')" :key="post.id" class="jpost">
        <h2>{{ post.title }}</h2>
        <router-link :to="{ name: 'Post', params: {id: post.id} }">Read</router-link>
        <hr>
        </div>
    </paginate>

    <paginate-links for="posts" :async="true" :show-step-links="true"
    :step-links="{
        next: 'Next',
        prev: 'Previous'
    }"
    >
    </paginate-links>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            posts: [],
            paginate: ['posts']
        }
    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(
            response=> response.json()
        ).then(
            data=> {
                this.posts = data.slice(0, 50)
                }
            )
    }
}
</script>

<style>
.jpost{
    display: block;
    cursor: pointer;
    padding: 10px;
    width: 30em;
}
</style>