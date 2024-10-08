<template>
  <div class="content">
    <ul class="list-categories">
      <li
        v-for="category in ['Local Artists', 'House Band']"
        :key="category"
        class="artist-category"
      >
        <h2 class="category-title">{{ category }}</h2>
        <ul class="list-artists">
          <li
            v-for="artist in items[category]"
            :key="artist.id"
            class="artist-item"
          >
            <figure class="artists-list-item">
              <div class="image-wrap">
                <img :src="`/images/artists/${artist.id}.jpg`" alt="artist" />
              </div>
              <figcaption>
                <h3 class="name">{{ artist.name }}</h3>
                <p class="role">{{ artist.role }}</p>
              </figcaption>
            </figure>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from "vue";
import artists from "@/data/artists";
const items = computed(() => {
  return artists.reduce((acc, artist) => {
    if (!acc[artist.category]) {
      acc[artist.category] = [];
    }
    acc[artist.category].push(artist);
    return acc;
  }, {});
});
</script>

<style lang="postcss" scoped>
.content {
  @apply container mx-auto;
  .list-categories {
    @apply text-center px-8 mb-12;
    .category-title {
      @apply text-xl lg:text-3xl font-bold mb-8 font-noto;
    }
  }
  .list-artists {
    @apply grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 mb-24;
    .artists-list-item {
      .image-wrap {
        @apply aspect-square overflow-hidden rounded-full relative;
        img {
          @apply absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto min-h-full object-cover;
        }
      }
      figcaption {
        @apply text-center py-2;
        .name {
          @apply text-lg lg:text-2xl font-bold;
        }
        .role {
          @apply text-sm lg:text-lg font-noto;
        }
      }
    }
  }
}
</style>
