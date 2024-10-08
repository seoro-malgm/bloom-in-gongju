<template>
  <header id="gnb" :class="{ pinned: pinned }">
    <h2 class="title">
      <span
        v-for="(char, index) in title"
        :key="index"
        class="char"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        {{ char }}
      </span>
    </h2>
    <router-link to="/">
      <img src="/logo.png" alt="피어나다" id="logo" />
    </router-link>
  </header>
</template>

<script setup>
const title = "먹거리와 함께하는 로컬 종합콘텐츠 공연";

const props = defineProps({
  pinned: {
    type: Boolean,
    default: true,
  },
});
const emit = defineEmits();
</script>

<style lang="postcss" scoped>
#gnb {
  @apply fixed top-7 lg:top-8 left-1/2 -translate-x-1/2 z-[100];
  @apply w-full flex flex-col items-center justify-center;
  @apply max-lg:max-w-[268px] lg:max-w-[480px];
  transition: max-width 0.8s cubic-bezier(0.86, 0, 0.07, 1);
  .title {
    @apply text-xs lg:text-xs -mb-1 lg:-mb-2;
    .char {
      @apply mx-[2px] lg:mx-[2px];
    }
  }
  &.pinned {
    .title {
      @apply text-sm lg:text-2xl -mb-3 lg:-mb-8;
      .char {
        @apply mx-[4px] lg:mx-[6px];
      }
    }
    @apply max-lg:max-w-[92vw] lg:max-w-[1280px];
  }

  .title {
    @apply font-bold font-noto flex max-w-[70%] flex-wrap justify-center;

    .char {
      @apply inline-flex;
      animation: float 2s ease-in-out infinite;
      transition: font-size 0.3s cubic-bezier(0.86, 0, 0.07, 1);
    }
  }
  #logo {
    @apply block w-full h-auto;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}
</style>
