<template>
  <header class="header py-2 absolute top-0 left-0 right-0 z-10">
    <BaseContainer>
      <div class="header__upper upper flex items-center justify-between">
        <div class="upper__left flex w-5/12 items-center justify-start gap-3">
          <nuxt-link to="/" class="upper__logo">
            <img class="upper__img" src="/img/logo/logo-on-dark.png" alt="" />
          </nuxt-link>
          <h3
            class="upper__title uppercase text-xs text-white opacity-70 hidden md:block"
          >
            Проверенная база недвижимости <br />г. Старый Оскол
          </h3>
        </div>
        <div
          class="upper__right right flex items-end gap-4 text-white md:flex-col md:gap-1"
        >
          <a
            href="tel:88005113908"
            class="right__phone text-white font-bold text-sm"
          >
            8 (800) 511-39-08
          </a>
          <span class="right__address hidden md:block">
            Старый Оскол, Лесной проспект 19
          </span>
          <button
            class="md:hidden"
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
        <!-- <button
          class="lower__burger hidden md:block"
          aria-label="открыть / закрыть меню"
        >
          <img src="/img/icons/burger.svg" alt="" />
        </button> -->
        <transition name="menu">
          <div
            v-if="isMenuOpen"
            class="lower_wrapper fixed h-screen bg-white inset-0 w-3/4 max-w-[350px] z-30 shadow px-4 py-14 md:static md:h-auto md:inset-null md:w-full md:px-0 md:py-0 md:bg-transparent md:text-white md:flex md:items-center md:max-w-full"
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
              class="lower__btn mt-8 md:mt-0 md:ml-auto"
              aria-label="Подать заявку"
            >
              Подать заявку
            </BaseButton>
            <!-- <BaseButton
            class="lower__btn mt-8 btn-lg with-icon-left leading-none bg-transparent text-black font-bold"
            aria-label="Подать заявку"
          >
            <img class="-rotate-1" src="/img/icons/phone.svg" alt="" />
            <span>Показать номер</span>
          </BaseButton> -->

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
  </header>
</template>

<script>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

export default {
  data() {
    return {
      isMenuOpen: false,
      mdBreakpoint: false,
      isSmallerMd: null,
    }
  },

  computed: {
    iconMenu() {
      return this.isMenuOpen ? 'close' : 'burger'
    },
  },

  watch: {
    /* mdBreakpoint(val, prevVal) {
      console.log('val: ', val)
      // console.log('val: ', val)
      if (val.value) {
        this.isMenuOpen = true
      }
    }, */

    isSmallerMd(val, prevVal) {
      if (val) {
        this.isMenuOpen = false
      } else {
        this.isMenuOpen = true
      }
    },
  },

  mounted() {
    const breakpoints = useBreakpoints(breakpointsTailwind)
    // console.log('breakpoints: ', breakpoints)
    // console.log('breakpoints: ', breakpoints)
    // console.log('this.breakpoints: ', this.breakpoints)
    this.isSmallerMd = breakpoints.isSmaller('md')
    // console.log('this.isSmallerMd: ', this.isSmallerMd)

    /* this.mdBreakpoint = breakpoints.md.value
    console.log('this.mdBreakpoint: ', this.mdBreakpoint) */
  },

  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
  },
}
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
