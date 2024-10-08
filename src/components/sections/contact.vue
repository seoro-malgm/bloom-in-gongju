<template>
  <div id="contact">
    <div class="content">
      <header>
        <h5>Credits</h5>
      </header>
      <ul class="list-credits">
        <li v-for="item in items" :key="item.name">
          <div class="item">
            <div class="category">{{ item.role }}</div>
            <div class="name">{{ item.name }}</div>
            <div class="company">
              {{ item.company }}
              <a v-if="item.sns" :href="item.sns" target="_blank">
                <Icon icon="rivet-icons:link-external" />
              </a>
            </div>
          </div>
        </li>
      </ul>
      <div class="mt-20">
        <ul
          class="flex items-center px-4 max-lg:flex-wrap max-lg:flex-col max-lg:px-10"
        >
          <li
            v-for="index in 5"
            :key="index"
            class="w-full h-auto px-4 max-lg:px-10 max-lg:mb-4"
          >
            <img
              :src="`/partner_${index - 1}.png`"
              alt="파트너 로고"
              class="block h-[48px] w-auto object-contain mx-auto"
            />
          </li>
        </ul>
      </div>
      <div class="mt-10 flex flex-col items-center">
        <h5 class="text-xl lg:text-2xl font-bold">문의</h5>
        <span>041-852-0876 </span>
        <span class="text-sm">혹은 </span>
        <span>피어나다 공식 인스타그램</span>
        <a
          href="https://www.instagram.com/bloom.in_gongju"
          target="_blank"
          class="flex items-center gap-2"
        >
          <Icon icon="mdi:instagram" /> bloom.in_gongju
        </a>
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

const items = [
  {
    company: "공주시청년문화예술인네트워크",
    name: "조성호",
    role: "무대기획 및 감독",
  },
  {
    company: "클래시미디어랩",
    name: "조권행",
    role: "기술감독",
  },
  {
    company: "브로콜리숲",
    name: "김주임",
    role: "캐릭터 디자인 & 애니메이션",
    sns: "https://www.instagram.com/kimjooim/",
  },
  {
    company: "사계반상",
    name: "강승희",
    role: "식사 및 음료(F&B)",
    sns: "https://www.instagram.com/for_seasondining/",
  },
  {
    company: "서로맑음 스튜디오",
    name: "이상준",
    role: "디자인 전체, 웹사이트 개발 및 홍보",
    sns: "https://www.instagram.com/seoro_malgm/",
  },
  {
    company: "",
    name: "김윤화",
    role: "SNS 마케팅",
  },
];
</script>

<style lang="postcss" scoped>
#contact {
  @apply relative  pt-10 pb-20 text-center mb-40 px-4;
  .content {
    @apply container mx-auto;
    header {
      @apply text-lg lg:text-4xl mb-12;
    }
    .list-credits {
      @apply grid grid-cols-1 lg:grid-cols-2 gap-8;
      .item {
        @apply flex items-center max-lg:flex-col gap-1 lg:gap-4 justify-center;
        .category {
          @apply text-base lg:text-lg;
        }
        .name {
          @apply text-xl lg:text-2xl;
        }
        .company {
          @apply text-sm lg:text-base font-noto;
          @apply flex items-center gap-2;
          a {
            @apply -mt-1 text-xl;
          }
        }
      }
    }
  }
}
</style>
