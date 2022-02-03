<template>
  <section class="dwelling py-6">
    <BaseContainer>
      <div class="dwelling__wrapper">
        <div class="dwelling__upper">
          <h2 class="dwelling__title">
            <span class="dwelling__title-icon"
              ><img src="/img/icons/primary/key.svg" alt="иконка ключа"
            /></span>
            Квартиры
          </h2>
          <!-- /.dwelling__title -->

          <nuxt-link class="dwelling__link" to=""> Смотреть все </nuxt-link>
          <!-- /.dwelling__link -->
        </div>
        <!-- /.dwelling__upper -->

        <!-- <client-only> -->
        <div class="swiper dwelling__cards">
          <ul class="swiper-wrapper">
            <DwellingCard
              v-for="index in 7"
              :key="index"
              class="swiper-slide"
            />
          </ul>
          <!-- If we need scrollbar -->
          <div class="swiper-scrollbar"></div>
        </div>
        <!-- </client-only> -->
        <!-- /.dwelling__cards -->
      </div>
    </BaseContainer>
  </section>
</template>

<script>
// core version + navigation, pagination modules:
// import Swiper from 'swiper/swiper-bundle';
// import Swiper and modules styles
// import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css';
import DwellingCard from '../DwellingCard.vue';

export default {
  components: {
    DwellingCard,
  },
  data() {
    return {
      swiper: null,
    };
  },
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
      this.handleSwiper();
    }
  },

  methods: {
    handleSwiper() {
      const { Swiper, Scrollbar } = require('swiper');

      this.swiper = new Swiper('.swiper', {
        slidesPerView: 'auto',
        spaceBetween: 12,
        centeredSlides: true,
        centeredSlidesBounds: true,

        modules: [Scrollbar],

        /* keyboard: {
          enabled: true,
          onlyInViewPort: false,
        }, */

        scrollbar: {
          el: '.swiper-scrollbar',
          hide: true,
        },

        breakpoints: {
          900: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  padding-bottom: 0.75rem;
}
.swiper-scrollbar {
  bottom: -4px;
}
.dwelling {
  // .dwelling__wrapper

  &__wrapper {
  }

  // .dwelling__upper

  &__upper {
    @apply flex items-center justify-between mb-[1.5em];
  }

  // .dwelling__title

  &__title {
    @apply inline-flex items-center gap-x-2 text-lg font-bold text-font-dark;

    // .dwelling__title-icon
    &-icon {
      @apply w-5 h-5;

      img {
      }
    }
  }

  // .dwelling__link

  &__link {
    @apply text-primary font-medium relative;

    &::before {
      content: '';
      position: absolute;
      bottom: 2%;
      left: 0;
      right: 0;

      width: 100%;
      height: 1px;

      background: $primary;

      transform-origin: left center;
      transform: scaleX(0%);
      opacity: 0;
      transition: all 150ms ease-in-out;
    }

    &:hover::before {
      transform: scaleX(100%);
      opacity: 1;
    }
  }

  // .dwelling__cards

  &__cards {
    // @apply flex items-center justify-start gap-x-3 overflow-auto;

    // display: flex;
    // align-items: center;

    // justify-content: flex-start;
    // gap: 1rem;
    // overflow: scroll;
  }

  // .dwelling__card

  &__card {
  }
}

.info {
  // .info__price

  &__price {
    @apply font-bold;
  }

  // .info__area

  &__area {
  }

  // .info__floors

  &__floors {
  }

  // .info__address

  &__address {
    @apply font-medium;
  }
}
</style>
