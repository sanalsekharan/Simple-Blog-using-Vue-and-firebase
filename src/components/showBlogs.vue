<template lang="html">
  <div v-theme = "'narrow'" id="show-blogs">
    <div v-show="!loading" class="loader"></div>
    <div v-show="loading">
      <h1>All Blog Articles</h1>
      <input type="text" v-model="search" placeholder="Blog Search"/>
      <div class="single-blog" v-for="blog in filteredBlogs">
        <router-link :to= "'/blog/'+blog.id"><h2 v-randomColor>{{blog.title | to-upperCase}}</h2></router-link>
        <article>
          {{blog.content | snippet}}
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import searchMixins from '../mixins/searchMixins.js'
export default {
  data() {
    return {
      blogs:[],
      search: '',
      loading: false
    }
  },
  created(){
    this.$http.get('https://myblog-46a92.firebaseio.com/posts.json/')
    .then(function(data){
      return data.json()
    }).then(function(data){
      var blogsArray = [];
      for (let key in data){
        data[key].id = key;
        blogsArray.push(data[key]);
      }
      this.blogs = blogsArray;
      this.loading = true;
    });
  },
  computed: {

  },
  // createing local filters
  filters: {
    toUpperCase(value){
      return value.toUpperCase();
    }
  },
  // creating local directives
  directives: {
    'randomColor': {
      bind (el, bind, vnode) {
        el.style.color = '#' + Math.random().toString().slice(2, 8)
      }
    }
  },
  mixins: [searchMixins]

}
</script>

<style lang="css">
#show-blogs{
  max-width: 800px;
  margin: 0 auto;
}
.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
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
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
  margin: 0 auto;
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
