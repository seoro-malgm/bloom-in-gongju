<template>
  <div id="introduction">
    <div class="content">
      <h4 class="title">
        <span
          v-for="(char, index) in title"
          :key="index"
          class="char"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          {{ char }}
        </span>
      </h4>
      <div>
        <strong class="block text-lg lg:text-2xl"
          >본 공연은 무대 관람 후 식사가 제공되는 종합컨텐츠 공연입니다.</strong
        >
        <div class="mt-2 mb-8 text-sm lg:text-base">
          행사순서: 오프닝 - 무대관람 - 저녁식사
        </div>
      </div>
      <hr class="mt-2 mb-6" />
      <p class="px-8 leading-7 lg:leading-10 text-sm lg:text-base">
        지역에서 지속가능한 먹거리를 탐구하기 위해 공주의 예술가, 기획가,
        디자이너, 식음료 전문 청년들이 모였습니다. <br />
        전국 8도 식재료로 구성된 푸짐한 한 상과 재기발랄한 애니메이션, 화려하고
        멋진 무대를 경험하고 싶으시다면 10.25. 18:30 공주시청년센터에서 만나요
      </p>
    </div>
  </div>
</template>

<script setup>
const title = "먹거리와 함께하는 로컬 종합콘텐츠 공연 ?";

const props = defineProps({
  data: {
    type: String,
    default: null,
  },
});
const emit = defineEmits();
</script>

<style lang="postcss" scoped>
#introduction {
  @apply relative bg-brown py-10 lg:py-24 text-center mb-40 px-4 z-[2];
  .title {
    @apply font-noto font-bold text-lg lg:text-4xl mb-4 lg:mb-6;
    .char {
      @apply inline-flex;
      animation: float 1.5s ease-in-out infinite;
      @apply max-lg:mx-[2px] mx-1;
    }
  }
  .content {
    @apply container mx-auto;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
