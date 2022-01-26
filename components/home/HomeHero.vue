<template>
  <section class="hero pt-12 md:pt-20 text-white">
    <BaseContainer class="h-full">
      <div class="hero__bg">
        <img
          srcset="/img/hero/hero-bg-mobile.jpg 100vw,
           /img/hero/hero-bg.jpg 100vw"
          sizes="(max-width: 767px) 100vw, 100vw"
          src="/img/hero/hero-bg-mobile.jpg"
          alt="фоновое изображение дома у реки"
          class="hero__bg-img"
        />
      </div>
      <h1
        class="hero__title font-bold mt-36 text-2xl leading-tight max-w-[20ch] md:max-w-[30ch] md:text-4xl md:mt-[min(8rem, 20%)"
      >
        Покупка и продажа недвижимости в Старом Осколе
      </h1>

      <!-- absolute bottom-0 left-0 right-0 w-full -->
      <div class="hero__search search">
        <div class="search__category-row flex items-center gap-3 overflow-auto">
          <button class="btn search__category selected">Квартиры</button>
          <button class="btn search__category">Дома</button>
          <button class="btn search__category">Участки</button>
          <button class="btn search__category">Комнаты</button>
        </div>

        <div class="search__bottom-wrapper">
          <div class="search__rooms-row">
            <button class="btn search__rooms">1</button>
            <button class="btn search__rooms selected">2</button>
            <button class="btn search__rooms">3</button>
            <button class="btn search__rooms">4+</button>
          </div>

          <div class="search__price-area-wrapper">
            <div class="search__price-row price-row">
              <h2 class="price-row__title">Цена</h2>
              <div class="price-row__input-block">
                <input
                  id="price-row-input-min"
                  type="text"
                  class="price-row__input price-row__input-min"
                  placeholder="от"
                />
                <input
                  id="price-row-input-max"
                  type="text"
                  class="price-row__input price-row__input-max"
                  placeholder="до"
                />
              </div>
            </div>
            <div class="search__area-row area-row">
              <h2 class="area-row__title">Площадь</h2>
              <div class="area-row__input-block">
                <input
                  id="area-row-input-min"
                  type="text"
                  class="area-row__input area-row__input-min"
                  placeholder="от"
                />
                <input
                  id="area-row-input-max"
                  type="text"
                  class="area-row__input area-row__input-max"
                  placeholder="до"
                />
              </div>
            </div>
          </div>
        </div>

        <BaseButton
          class="mt-8 text-[14px] py-3 font-bold rounded-md leading-none"
          :class="{
            'btn-lg': isSmallerMdComp,
            'ml-auto block': !isSmallerMdComp,
          }"
          ><span class="-translate-y-2">Показать предложения</span></BaseButton
        >
      </div>
    </BaseContainer>
  </section>
</template>

<script>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

export default {
  data() {
    return {
      mdBreakpoint: false,
      isSmallerMd: null,
    }
  },

  computed: {
    isSmallerMdComp() {
      // console.log('this.isSmallerMd: ', this.isSmallerMd)
      return this.isSmallerMd
    },
  },

  mounted() {
    const breakpoints = useBreakpoints(breakpointsTailwind)
    this.isSmallerMd = breakpoints.isSmaller('md')
  },

  methods: {},
}
</script>

<style lang="scss" scoped>
.search__category {
  @apply rounded-3xl bg-white/70 border border-solid border-gray-200 px-4 py-2;
}

.hero {
  @apply min-h-[630px] relative md:pb-20;

  // .hero__bg
  &__bg {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;

    width: 100%;
    height: 50%;

    z-index: -1;

    @include mq(med-lg) {
      height: 100% !important;
    }
    // position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      width: 100%;
      height: 100%;

      background: linear-gradient(
        104.46deg,
        rgba(10, 20, 30, 0.5428) 17.83%,
        rgba(10, 12, 14, 0) 26.31%
      );
      background-size: cover;
      // background-position: center center;
      background-repeat: no-repeat;
      background-blend-mode: darken;

      z-index: 2;

      @include mq(med-lg) {
        background: linear-gradient(
          101.85deg,
          rgba(10, 20, 30, 0.4543) 38.78%,
          rgba(10, 12, 14, 0) 55.09%
        );
        transform: matrix(1, 0, 0, -1, 0, 0);
      }
    }

    &::after {
      @include mq(med-lg) {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        width: 100%;
        height: 100%;

        background: $overlay;
        opacity: 0.6;
        background-size: cover;
        // background-position: center center;
        background-repeat: no-repeat;
        mix-blend-mode: overlay;

        z-index: 1;
      }
    }

    &-img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;

      @include mq(med-lg) {
        object-position: 10% 50%;
      }
    }
  }

  // .hero__title

  &__title {
  }

  // .hero__search

  &__search {
  }
}
.search {
  @apply text-black mt-14 text-sm md:text-base md:mt-7;

  // .search__bottom-wrapper
  &__bottom-wrapper {
    @apply md:mt-3 md:flex md:items-center md:flex-wrap md:rounded-lg md:bg-white md:p-4 lg:flex-nowrap lg:justify-start lg:gap-[1rem]

    /* @include mq(med-lg) {
      background: white;
      border-radius: 1em;

      display: flex;
      align-items: center;
      flex-wrap: wrap;
    } */;
  }

  // .search__category-row

  &__category-row {
  }

  // .search__category

  &__category {
    @apply rounded-3xl bg-white/70 border border-solid border-stroke-color px-4 py-[0.3em] md:bg-gray-900 md:text-white md:font-semibold md:border-transparent;

    &.selected {
      @apply bg-gray-900 text-white border-transparent z-[5] md:bg-white md:text-font-dark;
    }
  }

  // .search__rooms-row

  &__rooms-row {
    @apply mt-5 flex justify-start md:mt-0;
    // border-color: $stroke-color;
  }

  // .search__rooms

  &__rooms {
    @apply border border-r-0 border-solid border-stroke-color px-[1.75em] py-[0.5em];

    &:first-of-type {
      @apply rounded-tl-lg rounded-bl-lg;
    }

    &:last-of-type {
      @apply border-r rounded-tr-lg rounded-br-lg;
    }

    &.selected {
      @apply text-blue-400 bg-blue-100 outline outline-[1px] outline-blue-400 outline-offset-[-1px];
    }
  }

  // .search__price-row

  &__price-row {
  }

  // .search__area-row

  &__area-row {
  }
}

.search__price-area-wrapper {
  margin-top: 1.5rem;
  max-width: 100%;

  --input-width: 100px;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  ////=========

  // display: grid;
  // grid-template-columns: repeat(3, max-content);
  // grid-template-rows: repeat(2, 1fr);

  // grid-auto-flow: column;

  // gap: 1rem 0;

  // align-content: center;

  @include mq(med-lg) {
    // margin-top: 0;
    flex-direction: row;
    // display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;

    // gap: 0;
  }

  @include mq(lg) {
    flex-direction: row;
    flex-wrap: nowrap;
    margin-top: 0;
    gap: 1rem;
  }

  @include mq(xl) {
    --input-width: 150px;
    gap: 1.5rem;
  }
}

.price-row {
  @apply flex items-center justify-start gap-x-2 lg:w-max lg:gap-x-4;

  // .price-row__title

  &__title {
    @apply text-font-dark w-[80px] lg:w-max;
  }

  // .price-row__input-block

  &__input-block {
    @apply max-w-[75%] flex items-center;

    @include mq(lg) {
      max-width: unset;
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: repeat(2, var(--input-width));
      gap: 0.5rem;
    }
  }

  // .price-row__input

  &__input {
    @apply block max-w-[110px] rounded-lg px-[1em] py-[0.5em] border border-r-0 border-solid border-stroke-color leading-none w-max md:border-r-[1px] lg:inline-block lg:max-w-[var(--input-width)] lg:rounded-none lg:border-0 lg:border-b lg:border-r-0 lg:border-gray-300 focus:z-[1];
  }

  // .price-row__input-min

  &__input-min {
    @apply border-r-0 rounded-tr-none rounded-br-none;
  }

  // .price-row__input-max

  &__input-max {
    @apply rounded-tl-none rounded-bl-none border-r-[1px] lg:border-r-0;
  }
}
.area-row {
  @apply flex items-center justify-start gap-x-2  lg:mt-0 lg:gap-x-4;

  // .area-row__title

  &__title {
    @apply text-font-dark w-[80px] lg:w-max;
  }

  // .area-row__input-block

  &__input-block {
    @apply max-w-[75%] flex items-center;

    @include mq(lg) {
      max-width: unset;
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: repeat(2, var(--input-width));
      gap: 0.5rem;
    }
  }

  // .area-row__input

  &__input {
    @apply block max-w-[110px] rounded-lg px-[1em] py-[0.5em] border border-r-0 border-solid border-stroke-color leading-none w-max md:border-r-[1px] lg:inline-block lg:max-w-[var(--input-width)] lg:rounded-none lg:border-0 lg:border-b lg:border-r-0 lg:border-gray-300 focus:z-[1];
  }

  // .area-row__input-min

  &__input-min {
    @apply border-r-0 rounded-tr-none rounded-br-none;
  }

  // .area-row__input-max

  &__input-max {
    @apply rounded-tl-none rounded-bl-none border-r-[1px] lg:border-r-0;
  }
}
</style>
