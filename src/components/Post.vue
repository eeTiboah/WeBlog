<template>
  <div class="container">
      <div class="post-info">
        <p style="font-weight: bold;"> {{post.title| capitalize}}</p>
        <p>{{ post.body | capitalize }}</p>
      </div>
      <div class="post-info">
          <ul>
              <li v-for="comment in comments" :key="comment.id">
                  <p style="font-weight: bold;"><i class="material-icons">person</i>{{ comment.name | capitalize }}</p>
                  <p>{{ comment.body | capitalize }}</p>
              </li>
          </ul>
          <div>
              <button @click="commentIs = !commentIs" class="btn-large waves-effect grey darken-3 "> Add Comment</button>
              <div v-if="commentIs" class="row">
                  <form @submit.prevent="addComments" class="col s12">
                      <div class="row">
                      <div class="col s12">
                        <label for="name">Your Name</label>
                        <input type="text" name="name" id="name" v-model="details.name" class="validate">
                      </div>
                      <div class="col s12">
                        <label for="comment">Your Comment</label>
                        <input type="text" name="comment" id="comment" v-model="details.body" class="validate">
                      </div>
                    
                    <button class="btn waves-effect grey darken-3 btn">Submit</button>
                    </div>
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
            if (this.details.name && this.details.body){
                this.comments.push(this.details)
                this.details = {}
            }
            
        }
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
.container{
    margin: auto;
    width: 50%;
}

.post-info{
    margin: 20px;
}
</style>