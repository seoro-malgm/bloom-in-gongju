<template>
  <div>
    <section-hero :pinned="pinned" />
    <!-- 인사말 -->
    <section-introduction />

    <!-- 음악가 -->
    <section-artists />
    <!-- 음식 -->
    <section-food />

    <!-- 타임라인 -->
    <section-timeline />
    <!-- 문의 -->
    <section-contact />
  </div>
</template>

<script setup>
import SectionHero from "@/components/sections/hero.vue";
import SectionIntroduction from "@/components/sections/introduction.vue";
import SectionArtists from "@/components/sections/artists.vue";
import SectionFood from "@/components/sections/food.vue";
import SectionTimeline from "@/components/sections/timeline.vue";
import SectionContact from "@/components/sections/contact.vue";

const props = defineProps({
  pinned: {
    type: Boolean,
    default: true,
  },
});
const emit = defineEmits();
</script>

<style lang="postcss" scoped></style>
