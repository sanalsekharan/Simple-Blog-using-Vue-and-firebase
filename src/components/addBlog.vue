<template>
  <div id="add-blog">
    <div v-show="loading" class="loader"></div>
    <div v-show="!loading">
      <h2>Add a New Blog Post</h2>
      <form v-show="!submitted">
        <label>Blog Title:</label>
        <input type="text" required v-model.lazy ='blog.title'/>
        <label>Blog Content:</label>
        <textarea rows="8" cols="80" v-model.lazy ='blog.content'></textarea>
        <div id="checkboxes">
          <label>Technologies</label>
          <input type="checkbox" value="Technologies" v-model="blog.categories">
          <label>People</label>
          <input type="checkbox" value="People" v-model="blog.categories">
          <label>Food</label>
          <input type="checkbox" value="Food" v-model="blog.categories">
          <label>Fun Zone</label>
          <input type="checkbox" value="Fun Zone" v-model="blog.categories">
        </div>
        <label>Author</label>
        <select v-model='blog.author'>
          <option v-for="author in authors">{{author}}</option>
        </select>
        <button type="button" name="button" @click.prevent='post'>Add Blog</button>
      </form>
      <div v-show="submitted">
        <h3>Thanks for adding your post</h3>
      </div>
      <div id="preview">
        <h3>Preview Blog</h3>
        <p>Blog title : {{blog.title}}</p>
        <p>Blog content:</p>
        <p>{{blog.content}}</p>
        <p>Blog Categories</p>
        <ul>
          <li v-for="category in blog.categories">{{category}}</li>
        </ul>
        <label>Author: {{blog.author}}</label>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data (){
    return{
      blog:{
        title:'',
        content:'',
        categories:[],
        author:''
      },
      authors:[
        'sanal','akhil','rohith'
      ],
      submitted: false,
      loading: false
    }
  },
  methods:{
    post(){

      this.$http.post('https://myblog-46a92.firebaseio.com/posts.json',this.blog).then(function (data) {
        this.submitted = true;
        this.loading = false;
      });
    }
  }
}
</script>


<style scoped >

#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
  margin-top: 10px;
}
#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label{
  display: inline-block;
}
.loader {
  margin: 0 auto;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
