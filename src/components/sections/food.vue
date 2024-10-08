<template>
  <div id="food">
    <div class="content">
      <ul class="list-categories">
        <li
          v-for="category in ['Dining', 'Drinks']"
          :key="category"
          class="food-category"
        >
          <h4 class="category-title">{{ category }}</h4>
          <ul class="list-food">
            <li
              v-for="food in items[category]"
              :key="food.id"
              class="food-item"
            >
              <article class="item">
                <header>
                  <div class="location">{{ food.location }}</div>
                  <div class="name">{{ food.name }}</div>
                </header>
                <div class="description">
                  <p>{{ food.description }}</p>
                  <span v-if="food.additionalInfo">
                    {{ food.additionalInfo }}
                  </span>
                  <small v-if="food.isDrink" class="block">
                    * 만 19세 미만 주류제공 불가
                  </small>
                </div>
              </article>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import food from "@/data/food";

const props = defineProps({
  data: {
    type: String,
    default: null,
  },
});
const emit = defineEmits();
const items = computed(() => {
  return {
    Dining: food.filter((item) => item.category === "Dining"),
    Drinks: food.filter((item) => item.category === "Drinks"),
  };
});
</script>

<style lang="postcss" scoped>
#food {
  @apply relative bg-brown py-10 text-center mb-24;
  .content {
    @apply container mx-auto;
    h4 {
      @apply text-xl lg:text-4xl;
    }
  }
  .list-categories {
    .food-category {
      @apply mb-12;
      .category-title {
        @apply text-lg lg:text-3xl mb-4 mt-12;
      }
      .list-food {
        @apply grid grid-cols-1 lg:grid-cols-4 gap-4 content-center;
        .food-item {
          @apply mb-4;
          &:nth-child(even) {
            @apply lg:mt-32;
          }
          header {
            @apply flex justify-center items-center mb-3;
            .location {
              @apply text-sm lg:text-base bg-white text-primary px-3 py-2 rounded-full font-noto me-4;
            }
            .name {
              @apply text-lg lg:text-xl;
            }
          }
          .description {
            @apply text-sm lg:text-base px-4 lg:px-2;
          }
        }
      }
    }
  }
}
</style>
