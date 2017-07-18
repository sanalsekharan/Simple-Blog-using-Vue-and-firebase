<template lang="html">
  <div id="single-blog">
    <div v-show="!loading" class="loader"></div>
    <div v-show="loading">
      <h1>{{blog.title}}</h1>
      <article>{{blog.content}}</article>
      <p>Author : {{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      id:this.$route.params.id,
      blog:{},
      loading:false
    }
  },
  created(){
    this.$http.get('https://myblog-46a92.firebaseio.com/posts/'+this.id+'.json')
    .then(function(data){
      return data.json()
    }).then(function(data){
        this.blog = data;
        this.loading = true;
    });
  },
}
</script>

<style lang="css">
#single-blog{
  max-width: 950px;
  margin: 0 auto;
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
