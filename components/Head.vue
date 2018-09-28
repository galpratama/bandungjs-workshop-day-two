<template>
  <div>
    <h1>{{ title }}</h1>
    <h6 class="mb-4">{{ subtitle }}</h6>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      default: 'This is title',
      type: String
    },
    subtitle: {
      default: 'This is subtitle',
      type: String
    }
  }
}
</script>
