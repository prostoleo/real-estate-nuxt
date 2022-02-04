<template>
  <li class="dwelling__card card">
    <header class="card__header">
      <div class="swiper-card-img card__gallery relative">
        <ul class="swiper-wrapper-card h-full flex">
          <li
            v-for="index in 6"
            :key="index + Date.now().toString().slice(-4)"
            class="swiper-wrapper-card__slide card__gallery-item basis-100% flex-grow flex-shrink-0"
          >
            <img
              :src="`https://source.unsplash.com/random?sig=${getRandomInt(
                1,
                100
              )}`"
              alt=""
            />
          </li>
        </ul>

        <div class="swiper-pagination">
          <span
            v-for="index in 6"
            :id="`card-header-pagination-bullet-${index}`"
            :key="index + Date.now().toString().slice(-4)"
            class="card-header-pagination-bullet"
          ></span>
        </div>
        <!-- /.card__gallery-item -->
      </div>
      <!-- /.card__gallery -->
    </header>
    <div class="card__content">
      <div class="card__body">
        <h3 class="card__title">Новая квартира</h3>
        <!-- /.card__title -->
        <div class="card__info info">
          <h4 class="info__price">7 777 777 P</h4>
          <!-- /.info__price -->
          <span class="info__area"> 76.4 м </span>
          <!-- /.info__area -->
          <span class="info__floors">2/22 эт.</span>
          <!-- /.info__floors -->
          <span class="info__address"> ул. Раменки, д. 21 </span>
          <!-- /.info__address -->
        </div>
        <!-- /.card__info info -->
      </div>
      <!-- /.card__body -->
      <footer class="card__footer">
        <span v-if="isPhoneShown === true" class="card__footer-phone">
          +7 (999) 999-99-99
        </span>
        <!-- /.card__footer-phone -->
        <BaseButton
          v-else
          class="btn card__btn px-5 py-3 with-icon-left flex w-full hover:outline-accent hover:outline hover:outline-2 focus:outline-accent focus:outline focus:outline-2"
        >
          <img
            src="/img/icons/phone.svg"
            alt="иконка телефона"
            class="absolute top-1/2 left-5 -translate-x-[50%] -translate-y-[50%] -rotate-[5deg]"
          />
          <span class="leading-none -translate-y-[2px] mx-auto"
            >Показать телефон</span
          >
        </BaseButton>
      </footer>
      <!-- /.card__footer -->
    </div>
    <!-- /.card__content -->
  </li>
  <!-- /.dwelling__card card -->
</template>

<script>
export default {
  data() {
    return {
      isPhoneShown: false,
      activeSlide: null,
    };
  },

  watch: {},

  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
      this.bulletEls = Array.from(
        document.querySelectorAll('.swiper-pagination-bullet')
      );
      // console.log('this.bulletEls: ', this.bulletEls);

      this.handleSwiper();
    }
  },

  methods: {
    handleSwiper() {
      const { Swiper, Pagination } = require('swiper');

      const that = this;

      this.swiper = new Swiper('.swiper-card-img', {
        slidesPerView: 'auto',
        direction: 'horizontal',
        wrapperClass: 'swiper-wrapper-card',
        slideClass: 'swiper-wrapper-card__slide',

        bulletClass: 'card-header-pagination-bullet',
        bulletActiveClass: 'card-header-pagination-bullet-active',

        centeredSlides: true,
        centeredSlidesBounds: true,

        modules: [Pagination],

        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        on: {
          slideChange() {
            that.bulletEls.forEach((bullet) => {
              bullet.classList.remove('card-header-pagination-bullet-active');
            });

            // console.log('this: ', this);
            const newI = this?.activeIndex;
            // console.log('newI: ', newI);
            // console.log('that: ', that);
            // console.log('that.bulletEls: ', that.bulletEls);

            that.bulletEls[newI].classList.add(
              'card-header-pagination-bullet-active'
            );
          },
        },
      });
      // console.log('this.swiper: ', this.swiper);
    },

    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
};
</script>

<style lang="scss" scoped>
:root {
  --swiper-pagination-color: white !important;
  --swiper-theme-color: white !important;
}
.swiper-slide-active {
  z-index: 10;
}

.swiper-pagination > .card-header-pagination-bullet {
  background: var(--swiper-pagination-color, white) !important;
  background-color: white !important;
  opacity: 0.2 !important;

  // &-active {
}
.swiper-pagination > .card-header-pagination-bullet-active {
  opacity: 1 !important;
}

.card {
  @apply flex-grow-0 flex-shrink-0 basis-64 rounded-md overflow-hidden border border-stroke-color max-w-[256px];

  display: grid;
  grid-template-rows: 153px auto;

  // .card__header

  &__header {
    @apply max-h-[153px] lg:max-h-[202px];
  }

  // .card__gallery

  &__gallery {
    @apply h-full w-full;
  }

  // .card__gallery-item

  &__gallery-item {
    @apply h-full w-full;

    img {
      @apply h-full w-full object-cover;
    }
  }

  // .card__content

  &__content {
    @apply px-3 py-4;
  }

  // .card__body

  &__body {
  }

  // .card__title

  &__title {
    @apply text-base font-semibold text-accent mb-[0.75em];
  }

  // .card__info

  &__info {
    // @apply grid grid-flow-row grid-cols-4;
    // display: grid;
    // grid-auto-flow: column;
    // grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    // grid-auto-rows: 1fr;
    // grid-template-rows: repeat(2, auto);

    display: flex;
    align-items: center;
    // justify-content: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;

    gap: 0.25rem 1rem;

    & > * {
      @apply w-max text-font-dark font-semibold;
    }
  }

  // .card__footer

  &__footer {
    @apply mt-7;
  }

  // .card__btn

  &__btn {
  }
}
</style>
