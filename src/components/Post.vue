<template>
  <div>
      <div>
        <h2>Hi there</h2>
        <p> {{post.title}}</p>
        <p>{{ post.body }}</p>
      </div>
      <div>
          <ul>
              <li v-for="comment in comments" :key="comment.id">
                  <p>{{ comment.name }}</p>
                  <p>{{ comment.body }}</p>
              </li>
          </ul>
          <div>
              <button @click="commentIs = !commentIs">Comment</button>
              <div v-if="commentIs">
                  <form @submit.prevent="addComments">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" v-model="details.name">
                    <label for="comment">Comment</label>
                    <input type="text" name="comment" id="comment" v-model="details.body">
                    <button>Submit</button>
                  </form>
                  
              </div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
    data(){
        return {
            id: this.$route.params.id,
            post: {},
            comments: [],
            commentIs: false,
            details: {
                name: "",
                body: ""
            }
        }
    },
    created(){
        this.getPosts(),
        this.getComments()
    },
    methods: {
        getPosts(){
            this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id).then(
            response=> response.json()
        ).then(
            data => this.post = data
            )
        },
        getComments(){
            this.$http.get('https://jsonplaceholder.typicode.com/comments?postId=' + this.id).then(
                response => response.json()
            ).then(
                data => {this.comments = data
                console.log(this.comments)}
            )
        },
        addComments(){
            this.comments.push(this.details)
            this.details.name = ""
            this.details.body = ""
        }
    }
}
</script>

<style>

</style>