<template>
  <footer class="footer">
    <BaseContainer>
      <div class="footer__wrapper">
        <div class="footer__wrapper-top top-block">
          <div class="top-block__first-col first-col">
            <div class="first-col__logo">
              <img
                src="/img/logo/logo-footer.png"
                alt="логотип компании"
                class="first-col__logo-img"
              />
            </div>
            <!-- /.first-col__logo -->
            <ul class="first-col__socials socials">
              <li class="socials__item">
                <a href="callto:+79524342730" class="socials__link">
                  <img
                    src="/img/icons/footer-phone.png"
                    alt="иконка телефона"
                    class="socials__link-img"
                  />
                  <span class="socials__link-text"> +7 (952) 434-27-30 </span>
                </a>
              </li>
              <li class="socials__item">
                <a href="mailto:info@DP-Agent.ru" class="socials__link">
                  <img
                    src="/img/icons/footer-mail.png"
                    alt="иконка почты"
                    class="socials__link-img"
                  />
                  <span class="socials__link-text"> info@DP-Agent.ru</span>
                </a>
              </li>
              <li class="socials__item">
                <a
                  href="https://yandex.ru/maps/10649/stariy-oskol/geo/3_y_kvartal/1499079774/?ll=37.838481%2C51.289889&z=16.49"
                  class="socials__link"
                >
                  <img
                    src="/img/icons/footer-address.png"
                    alt="иконка адреса"
                    class="socials__link-img socials__link-img--address"
                  />
                  <span class="socials__link-text">
                    г. Старый Оскол, м-он Дубрава квартал 3, дом 31 а</span
                  >
                </a>
              </li>
            </ul>
            <!-- /.first-col__socials socials -->
          </div>
          <!-- /.top-block__first-col first-col -->

          <div class="second-col">
            <div class="second-col__catalogue catalogue">
              <h4 class="catalogue__title">Каталог</h4>

              <ul class="catalogue__list">
                <li class="catalogue__item">
                  <a href="" class="catalogue__link">Квартиры</a>
                </li>
                <li class="catalogue__item">
                  <a href="" class="catalogue__link">Дома</a>
                </li>
                <li class="catalogue__item">
                  <a href="" class="catalogue__link">Участки</a>
                </li>
                <li class="catalogue__item">
                  <a href="" class="catalogue__link">Комнаты</a>
                </li>
              </ul>
            </div>
            <!-- /.second-col__catalogue catalogue -->
            <div class="second-col__services services">
              <h4 class="services__title">Услуги</h4>

              <ul class="services__list">
                <li class="services__item">
                  <a href="" class="services__link">Заключение договора</a>
                </li>
                <li class="services__item">
                  <a href="" class="services__link">Ипотека</a>
                </li>
                <li class="services__item">
                  <a href="" class="services__link"
                    >Юридическое сопровождение</a
                  >
                </li>
                <li class="services__item">
                  <a href="" class="services__link">Оценка стоимости</a>
                </li>
              </ul>
            </div>
            <!-- /.second-col__catalogue catalogue -->
          </div>
          <!-- /.second__col -->
        </div>
        <!-- /.footer__wrapper-top -->

        <div class="footer__wrapper-bottom bottom-block">
          <div class="bottom-block__partners">
            <div class="bottom-block__partners-img">
              <img
                src="/img/partners/metal-invest-bank.png"
                alt="партнер Металинвестбанк"
              />
            </div>
            <!-- /.bottom-block__partners-img -->
            <div class="bottom-block__partners-img">
              <img src="/img/partners/sber-bank.png" alt="партнер Сбербанк" />
            </div>
            <!-- /.bottom-block__partners-img -->
            <div class="bottom-block__partners-img">
              <img
                src="/img/partners/investor-bank.png"
                alt="партнер Инвесторбанк"
              />
            </div>
            <!-- /.bottom-block__partners-img -->
          </div>
          <!-- /.bottom-block__partners -->

          <div class="bottom-block__copy">
            <small>&copy; 2015 - 2022, "Деловой подход"</small>
          </div>
          <!-- /.bottom-block__copy -->

          <div class="bottom-block__politics">
            <small>
              <a href="">Политика конфиденциальности</a>
            </small>
          </div>
          <!-- /.bottom-block__copy -->
        </div>
        <!-- /.footer__wrapper-bottom -->
      </div>
      <!-- /.footer__wrapper -->
    </BaseContainer>
  </footer>
  <!-- /.footer -->
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
  @apply py-6 bg-white;

  // .footer__wrapper

  &__wrapper {
  }

  // .footer__wrapper-top

  &__wrapper-top {
  }

  // .footer__wrapper-bottom

  &__wrapper-bottom {
  }
}
.top-block {
  @apply lg:flex lg:justify-between;

  // .top-block__first-col

  &__first-col {
  }
}
.first-col {
  @apply mb-8 lg:mb-0;

  // .first-col__logo

  &__logo {
    @apply max-w-[250px] mb-4 lg:max-w-[350px];
  }

  // .first-col__logo-img

  &__logo-img {
    @apply w-full h-full object-contain;
  }

  // .first-col__socials

  &__socials {
  }
}
.socials {
  @apply flex flex-col gap-2;

  // .socials__item

  &__item {
  }

  // .socials__link

  &__link {
    @apply flex items-center justify-start gap-x-2 lg:gap-x-3;
  }

  // .socials__link-img

  &__link-img {
    @apply w-6 h-6;

    &--address {
      @apply w-7 h-full;
    }
  }

  // .socials__link-text

  &__link-text {
    @apply text-font-dark leading-none;
  }
}
.second-col {
  @apply md:flex md:items-center md:gap-x-10;

  // .second-col__catalogue

  &__catalogue {
    @apply mb-5;
  }

  // .second-col__services

  &__services {
    @apply mb-5;
  }
}
.catalogue {
  // .catalogue__title

  &__title {
    @apply text-3xl font-semibold text-font-dark mb-[0.65em];
  }

  // .catalogue__list

  &__list {
    @apply flex flex-col gap-3;
  }

  // .catalogue__item

  &__item {
  }

  // .catalogue__link

  &__link {
    @apply text-font-dark;
  }
}
.services {
  // .services__title

  &__title {
    @apply text-3xl font-semibold text-font-dark mb-[0.65em];
  }

  // .services__list

  &__list {
    @apply flex flex-col gap-3;
  }

  // .services__item

  &__item {
  }

  // .services__link

  &__link {
    @apply text-font-dark;
  }
}
.bottom-block {
  @apply lg:flex lg:justify-between lg:items-baseline lg:mt-10;

  // .bottom-block__partners

  &__partners {
    @apply flex items-center gap-x-3 mt-10 lg:mt-0 lg:order-2;
  }

  // .bottom-block__partners-img

  &__partners-img {
  }

  // .bottom-block__copy

  &__copy {
    @apply mt-9 mb-3 text-font-gray opacity-[85] lg:mt-0 lg:-translate-y-1 lg:order-1;
  }

  // .bottom-block__politics

  &__politics {
    @apply lg:-translate-y-1 lg:order-3;

    a {
      @apply text-font-gray opacity-[85] hover:border-b hover:border-solid hover:border-b-accent;
    }
  }
}
</style>
