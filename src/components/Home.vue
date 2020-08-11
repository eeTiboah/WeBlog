<template>
  <div class="container">
    <h2>Trending</h2>
    <div class="posts">
    <paginate name="posts" :list="posts" :per="10">
        <li v-for="post in paginated('posts')" :key="post.id" class="jpost waves-effect">
        <router-link :to="{ name: 'Post', params: {id: post.id} }">{{ post.title | capitalize }}</router-link>
        <hr>
        </li>
    </paginate>
    </div>
    <div class="center">
        <div class="pagination">
            <paginate-links for="posts" :async="true" :show-step-links="true" class="page-links"></paginate-links>
        </div>
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
    },
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
}
</script>

<style scoped>
h2{
    text-align: center;
    
}
.container{
    padding-top: 1em;
    padding-bottom: 1em;
    margin-top: 3em;
    margin-bottom: 3em;
    height: auto;
}
.jpost{
    line-height: 2;
    display: block;
    cursor: pointer;
    padding: 10px;
    width: 30em;
    text-decoration: none;
    list-style-type: none;
    color: #424242;
}

.posts{
    margin: auto;
    width: 50%;
}

.center{
    text-align: center;
    
}

.pagination{
    cursor: pointer;
}

ul li{
    list-style: none;
}

.pagination a.active{
    /* display: inline-block;
    text-align: center; */
    color: #424242 !important;
}

</style>