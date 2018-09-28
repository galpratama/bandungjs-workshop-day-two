<template>
  <section class="container">
    <div>
      <BlogHead 
        :title="'Blog Saya'"
        :subtitle="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, ea!'"/>
        <BlogHead 
        :title="'Blog Kamu'"
        :subtitle="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, ea!'"/>
        <BlogHead/>
      <b-card 
        v-for="blog in blogs" 
        :key="blog.sys.id"
        :title="blog.fields.title"
        class="mb-3">
          <h6 class="text-muted">
            Published by {{ blog.fields.author }} at {{ blog.fields.publishedDate | moment("D MMM YYYY") }}
          </h6>
          <p class="card-text">
            {{ blog.fields.summary }}
          </p>
          <nuxt-link 
            :to="'blog/' + blog.sys.id "
            class="card-link">
            Read More 
          </nuxt-link>
      </b-card>
    </div>
  </section>
</template>

<script>

import BlogHead from '@/components/Head.vue'

export default {
  async asyncData({ app }) {
    const blogs = await app.$axios.$get('https://cdn.contentful.com/spaces/u9pladvg7uno/environments/master/entries?access_token=cc9916998dab56e8fbaccd4b05df1efa4db9eaea85a989c4358c464103dbb959&content_type=blog&include=10')
    return { blogs: blogs.items }
  },
  components: {
    BlogHead
  }
}
</script>

<style>
</style>

