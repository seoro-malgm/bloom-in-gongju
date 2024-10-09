<template>
  <div id="wrapper">
    <global-header :pinned="pinned" />
    <router-view :pinned="pinned" />

    <ul class="list-seeds">
      <transition-group name="dandelion-seed" appear>
        <li
          v-for="index in 100"
          :key="index"
          class="seed-item"
          :style="[
            seedStyles[index - 1],
            { transitionDelay: `${index * 100}ms` },
          ]"
        >
          <img :src="`/images/seed_${index % 10}.svg`" alt="" />
        </li>
      </transition-group>
    </ul>

    <!-- floating button -->
    <div class="floating-button">
      <a
        class="link-btn"
        to="https://m.booking.naver.com/booking/5/bizes/1226049/items/6157479"
        target="_blank"
      >
        지금 예약하기
        <Icon icon="material-symbols:bookmark-check" class="icon" />
        <span class="tooltip"> 30명 선착순! </span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, computed } from "vue";
import { useWindowScroll } from "@vueuse/core";

const wrapper = ref();
const { y } = useWindowScroll();
const pinned = computed(() => {
  return y.value <= 800;
});

import GlobalHeader from "@/components/GlobalHeader.vue";

const seedStyles = ref([]);

const getRandomStyle = () => {
  const size = 4 + Math.random() * 20; // 6rem에서 4rem 사이의 랜덤 크기
  return {
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    transform: `translate(-50%, -50%)`,
    width: `${size}vw`,
    height: `${size}vw`,
  };
};

const initializeSeedStyles = () => {
  seedStyles.value = Array(100)
    .fill(null)
    .map(() => getRandomStyle());
};

const handleScroll = () => {
  const scrollPosition = window.pageYOffset;
  const seeds = document.querySelectorAll(".seed-item");
  seeds.forEach((seed, index) => {
    const speed = 0.1 + index * 0.005; // 패럴랙스 효과 강도 감소
    const baseTransform = `translate(-50%, -50%)`;
    seed.style.transform = `${baseTransform} translateY(${
      scrollPosition * speed
    }px)`;
  });
};

onMounted(() => {
  initializeSeedStyles();
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="postcss" scoped>
#wrapper {
  @apply overflow-hidden relative h-auto;

  .list-seeds {
    @apply absolute inset-0;
    pointer-events: none;
    user-select: none;
  }

  .seed-item {
    @apply absolute;
    transition: all 0.5s ease-out;
    img {
      @apply w-full h-full object-contain;
    }
  }
}

.dandelion-seed-enter-active,
.dandelion-seed-leave-active {
  transition: all 0.5s ease-out;
}

.dandelion-seed-enter-from,
.dandelion-seed-leave-to {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.5) rotate(45deg);
}

.dandelion-seed-enter-to,
.dandelion-seed-leave-from {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1) rotate(0deg);
}

@keyframes float {
  0%,
  100% {
    transform: translate(-50%, -50%) translateY(0);
  }
  50% {
    transform: translate(-50%, -50%) translateY(8%);
  }
}

.seed-item {
  animation: float 5s ease-in-out infinite;
  animation-delay: calc(var(--index) * 0.5s);
  opacity: 0.85;
}

.floating-button {
  @apply fixed max-lg:bottom-10 lg:top-8 max-lg:left-1/2 max-lg:-translate-x-1/2 lg:right-8 z-[200];
  .link-btn {
    @apply bg-white text-secondary px-4 py-2 rounded-full text-sm shadow-xl transition-all cursor-pointer;
    @apply flex items-center font-noto font-bold text-lg lg:text-xl;
    @apply relative;
    .icon {
      @apply text-xl lg:text-2xl lg:-mt-1;
    }
    .tooltip {
      @apply absolute left-1/2 -translate-x-1/2 -translate-y-4 -top-5 mb-2 bg-black text-nowrap text-xs px-3 py-1 rounded-lg;
      animation: toggle 1s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
      &:before {
        content: "";
        @apply absolute left-1/2 -translate-x-1/2 -bottom-1;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 8px solid black;
      }
    }
    &:hover {
      @apply bg-secondary text-white scale-105;
    }
  }
}

@keyframes toggle {
  0%,
  100% {
    transform: translate(-50%, 0);
  }
  50% {
    transform: translate(-50%, -4px);
  }
}
</style>
