<template>
  <div class="site-section">
    <h3>What do we do?</h3>
    <p>You might not have heard of us, but we're the people behind the following impactful programmes</p>
    <div class="grid grid--4">
      <div v-for="{ title, content } in gridItems" :key="title">
        <h4>{{ title }}</h4>
        <p>{{ content }}</p>
        <button class="site-button site-button--red site-button--rounded site-button--border">
          Read more
        </button>
      </div>
    </div>
    <button class="site-button site-button--red site-button--rounded site-button--border">
      More about what we do
    </button>
  </div>
</template>

<script>
export default {
  /**
   * All of the content in these components should be moved to props if they are being re-used. 
   */
  data() {
    return {
      gridItems: [
      {
          title: "Get online week",
          content: "Lorem ipsum dolor sit amet"
        },
        {
          title: "Learn my way",
          content: "Lorem ipsum dolor sit amet"
        },
        {
          title: "Make it click",
          content: "Lorem ipsum dolor sit amet"
        },
        {
          title: "Digital you",
          content: "Lorem ipsum dolor sit amet"
        }
      ]
    }
  }
}
</script>