<template>
  <section class="container">
    <div>
      <h1>{{ post.fields.title }}</h1>
      <h6 class="text-muted mb-3">
        Published by {{ post.fields.author }} at {{ post.fields.publishedDate | moment("D MMM YYYY") }}
      </h6>
      <vue-markdown :source="post.fields.content"></vue-markdown>
    </div>
  </section>
</template>

<script>

export default {
  async asyncData({ app, params }) {
    const post = await app.$axios.$get('https://cdn.contentful.com/spaces/u9pladvg7uno/environments/master/entries/'+ params.id +'?access_token=cc9916998dab56e8fbaccd4b05df1efa4db9eaea85a989c4358c464103dbb959')
    return { post: post }
  }
}
</script>

<style>
</style>

