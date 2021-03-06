<template>
  <header
    class="header py-2"
    :class="{ 'absolute top-0 left-0 right-0 z-10': !isNotHome }"
  >
    <BaseContainer>
      <div class="header__upper upper flex items-center justify-between">
        <div class="upper__left flex w-5/12 items-center justify-start gap-3">
          <nuxt-link to="/" class="upper__logo">
            <img
              class="upper__img"
              :class="{ 'max-w-[180px]': isNotHome }"
              :src="`/img/logo/${logoSrc}`"
              alt=""
            />
          </nuxt-link>
          <h3
            class="upper__title uppercase text-xs opacity-70 hidden md:block"
            :class="{ 'text-font-dark': isNotHome, 'text-white': !isNotHome }"
          >
            Проверенная база недвижимости <br />г. Старый Оскол
          </h3>
        </div>
        <div
          class="upper__right right flex items-end gap-4 md:flex-col md:gap-1"
          :class="{ 'text-dark': isNotHome, 'text-white': !isNotHome }"
        >
          <a href="tel:88005113908" class="right__phone font-bold text-sm">
            8 (800) 511-39-08
          </a>
          <span class="right__address hidden md:block">
            Старый Оскол, Лесной проспект 19
          </span>
          <button
            class="md:hidden"
            :class="{ 'z-40': isMenuOpen }"
            :aria-label="`${isMenuOpen ? 'закрыть' : 'открыть'} меню`"
            @click="toggleMenu"
          >
            <img :src="`/img/icons/${iconMenu}.svg`" alt="" />
          </button>
        </div>
      </div>
      <div
        class="header__lower lower md:flex md:py-4 md:my-3 md:border-t-[1px] md:border-b-[1px] md:border-green-50/20"
      >
        <transition name="menu">
          <div
            v-if="isMenuOpen"
            class="lower_wrapper fixed h-screen bg-white inset-0 w-3/4 max-w-[350px] z-30 px-4 py-14 md:static md:h-auto md:inset-null md:w-full md:bg-transparent md:flex md:items-center md:max-w-full"
            :class="{
              'text-font-dark md:py-3 border-y border-solid border-y-gray':
                isNotHome,
              'shadow md:text-white md:px-0 md:py-0': !isNotHome,
            }"
          >
            <nav class="lower__nav nav md:mr-4">
              <ul
                class="nav__list font-bold text-base flex flex-col gap-1 md:flex-row"
              >
                <li class="nav__item">
                  <a href="" class="nav__link p-0.5">Квартиры</a>
                </li>
                <li class="nav__item">
                  <a href="" class="nav__link p-0.5">Дома</a>
                </li>
                <li class="nav__item">
                  <a href="" class="nav__link p-0.5">Участки</a>
                </li>
                <li class="nav__item">
                  <a href="" class="nav__link p-0.5">Комнаты</a>
                </li>
                <li class="nav__item">
                  <a href="" class="nav__link p-0.5">Услуги агенства</a>
                </li>
                <li class="nav__item">
                  <a href="" class="nav__link p-0.5 md:ml-2">Контакты</a>
                </li>
              </ul>
            </nav>

            <BaseButton
              class="lower__btn mt-8 rounded-md font-bold md:mt-0 md:ml-auto"
              aria-label="Подать заявку"
            >
              Подать заявку
            </BaseButton>

            <a
              href="tel:88005113908"
              class="lower__phone text-black font-bold block mt-10 md:hidden"
            >
              8 (800) 511-39-08
            </a>

            <span class="right__address block mt-3 md:hidden">
              Старый Оскол, Лесной проспект 19
            </span>
          </div>
        </transition>
      </div>
    </BaseContainer>

    <div
      v-if="isMenuOpen"
      class="overlay fixed h-screen w-screen bg-black/30 inset-0 z-[10] md:hidden"
      @click="closeMenu"
    ></div>
  </header>
</template>

<script></script>

<script>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

export default {
  props: {
    isNotHome: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isMenuOpen: false,
      mdBreakpoint: false,
      isSmallerMd: null,
    };
  },

  computed: {
    iconMenu() {
      return this.isMenuOpen ? 'close' : 'burger';
    },

    logoSrc() {
      console.log('this.isNotHome: ', this.isNotHome);
      return this.isNotHome ? 'logo-footer.png' : 'logo-on-dark.png';
    },
  },

  watch: {
    isSmallerMd(val, prevVal) {
      if (val) {
        this.isMenuOpen = false;
      } else {
        this.isMenuOpen = true;
      }
    },
  },

  mounted() {
    const breakpoints = useBreakpoints(breakpointsTailwind);
    this.isSmallerMd = breakpoints.isSmaller('md');

    window.addEventListener('resize', this.onResize);
  },

  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },

    closeMenu() {
      this.isMenuOpen = false;
    },

    onResize() {
      if (this.isSmallerMd === true) {
        this.isMenuOpen = false;
      } else if (this.isSmallerMd === false) {
        this.isMenuOpen = true;
      }
    },
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
};
</script>

<style lang="scss" scoped>
/* Анимации появления и исчезновения могут иметь */
/* различные продолжительности и динамику.       */
.menu-enter-active {
  transition: all 0.3s ease;
}
.menu-leave-active {
  transition: all 0.8s ease-out;
}
.menu-enter, .menu-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(-20%);
  opacity: 0;
}
/* @tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .nav__link p-0.5 {
    @apply p-0.5;
  }
} */

.header {
  &::before {
    position: absolute;
    inset: 0;

    background: white;
    z-index: -1;
    opacity: 0.2;
  }
}
</style>
