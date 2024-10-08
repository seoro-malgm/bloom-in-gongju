<template>
  <div id="timeline">
    <div class="content">
      <header>
        <h4>Timeline</h4>
      </header>
      <div class="content">
        <img src="/images/timeline.png" alt="타임라인" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: String,
    default: null,
  },
});
const emit = defineEmits();
</script>

<style lang="postcss" scoped>
#timeline {
  @apply relative py-10 text-center mb-24;
  .content {
    @apply container mx-auto text-center lg:px-2;
    header {
      @apply mb-12;
      h4 {
        @apply text-xl lg:text-4xl;
      }
    }

    img {
      @apply w-full max-w-[1280px] mx-auto;
    }
  }
}
</style>
