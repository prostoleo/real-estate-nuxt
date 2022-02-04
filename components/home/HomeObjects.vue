<template>
  <section class="object">
    <BaseContainer>
      <h2 class="object__title">Объекты недвижимости</h2>

      <ul class="object__wrapper">
        <li
          v-for="object in objects"
          :key="object.id"
          class="object__card card"
          :style="`background: url(http://localhost:1337${object.attributes.image.data.attributes.url}); background-size: cover;
  background-repeat: no-repeat`"
        >
          <h3
            class="card__title"
            :class="textCardHouse(object.attributes.title)"
          >
            {{ object.attributes.title }}
          </h3>
          <p
            class="card__paragraph"
            :class="textCardHouse(object.attributes.title)"
          >
            {{ object.attributes.subtitle }}
          </p>
        </li>
      </ul>
    </BaseContainer>
  </section>
</template>

<script>
import qs from 'qs';
import { fetchData } from '~/utilities/fetchData.js';

export default {
  data() {
    return {
      objects: null,
    };
  },

  async fetch() {
    const query = qs.stringify(
      {
        fields: ['title', 'subtitle'],
        populate: {
          image: {
            populate: 'data',
          },
        },
      },
      {
        encodeValuesOnly: true,
      }
    );

    try {
      const result = await fetchData(
        `http://localhost:1337/api/categoris?${query}`
      );
      console.log('result: ', result);

      if (!result.data) {
        throw new Error(
          `Status code ${result.error.status}: ${result.error.message}`
        );
      }

      this.objects = result.data;
    } catch (error) {
      console.warn(`💣💣💣 ${error}`);
    }
  },

  computed: {},

  methods: {
    textCardHouse(type) {
      return type === 'Дома' ? 'text-font-dark' : '';
    },
  },
};
</script>

<style lang="scss" scoped>
.object {
  @apply py-10;

  // .object__title

  &__title {
    @apply text-2xl mb-[1.5em] text-font-dark font-bold;
  }

  // .object__wrapper

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    // gap: min(3.5vw, 1.4375rem);
    gap: 1rem;
    @include mq(lg) {
      gap: 1.4375rem;
    }
  }

  // .object__card

  &__card {
  }
}
.card {
  // rounded-md
  @apply relative rounded-md overflow-hidden p-4;

  @include adaptive-value-min-max(height, 192, 320);

  // --flat-size: 250%;
  --flat-size: 275%;
  background-size: cover;
  background-repeat: no-repeat;

  &--flat {
  }
  &--house {
    .card__title {
      @apply text-font-dark;
    }

    .card__paragraph {
      @apply text-font-dark;
    }
  }
  &--area {
  }
  &--room {
  }

  // .card__title

  &__title {
    @apply text-base font-bold mb-[0.5em] text-white lg:text-2xl;
  }

  // .card__paragraph

  &__paragraph {
    @apply text-sm font-medium text-white max-w-[25ch] lg:text-base;
  }

  // .card__bg

  /* &__bg {
    @apply absolute top-0 left-0 right-0 bottom-0 w-full h-full -z-10;

    &--flat {
      &::before {
        content: '';

        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        width: 100%;
        height: 100%;

        background: linear-gradient(
          180deg,
          #42688f 0%,
          #42688f 19.27%,
          rgba(71, 105, 147, 0) 100%
        );
        z-index: 1;

        mix-blend-mode: darken;
      }
    }
    &--house {
    }
    &--area {
    }
    &--room {
    }
  } */

  // .card__bg-img

  /* &__bg-img {
    @apply absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover object-center rounded-md;

    &--flat {
      width: 255%;
      height: 100%;
      object-position: 0% 75%;
    }
    &--house {
    }
    &--area {
    }
    &--room {
    }
  } */
}
</style>
