<template>
  <div id="hero">
    <Transition appear name="fade-blur">
      <div class="bloom-full" :class="{ 'blur-md': !pinned }">
        <img src="/images/bloom_full.svg" alt="" />
      </div>
    </Transition>
    <img
      class="info-image"
      src="/info.png"
      alt="시간,공간정보: 2024년 10월 25일 오후 6시 30분 시작, 공주시청년센터에서"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const props = defineProps({
  pinned: {
    type: Boolean,
    default: true,
  },
});

const isLoaded = ref(false);

onMounted(() => {
  // 컴포넌트가 마운트된 후 약간의 지연을 주어 트랜지션 효과가 보이도록 합니다.
  setTimeout(() => {
    isLoaded.value = true;
  }, 100);
});
</script>

<style lang="postcss" scoped>
#hero {
  @apply lg:min-h-screen relative pb-20;
  .bloom-full {
    @apply flex justify-end items-end pt-24 lg:pt-32;
    transition: filter 0.8s cubic-bezier(0.86, 0, 0.07, 1);

    img {
      @apply block;
      @apply max-lg:h-[35rem] max-lg:w-auto max-lg:max-w-[unset];
      @apply lg:h-auto lg:w-screen lg:max-w-[90vw];
    }

    &.pinned {
      @apply blur-md;
    }
  }
}

.fade-blur-enter-active,
.fade-blur-leave-active {
  transition: opacity 2s ease, filter 4s ease;
}

.fade-blur-enter-from,
.fade-blur-leave-to {
  opacity: 0;
  filter: blur(2px);
}

.fade-blur-enter-to,
.fade-blur-leave-from {
  opacity: 1;
  filter: blur(0);
}

.info-image {
  @apply absolute bottom-0 left-1/2 -translate-x-1/2 block;
  @apply w-full max-lg:max-w-[72vw] h-auto;
  @apply lg:max-w-[720px];
}
</style>
