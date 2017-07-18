export default{
  computed: {
    filteredBlogs: function () {
      this.search = this.search.toLowerCase()
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search)
      })
    }
  }
}
