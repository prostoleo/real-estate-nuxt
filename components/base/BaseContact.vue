<template>
  <section class="contact">
    <BaseContainer>
      <div class="contact__wrapper">
        <div class="contact__content content">
          <h2 class="content__title">Подберем для вас квартиру мечты</h2>
          <!-- /.content__title -->
          <p class="content__paragraph">
            Отправьте заявку онлайн сразу в несколько банков и сократите время
            оформления ипотеки.
          </p>
          <!-- /.content__paragraph -->
          <div class="content__img">
            <img
              srcset="/img/contact/bg-mobile.jpg 110vw, /img/contact/bg.jpg 100vw"
              sizes="(max-width: 767px) 110vw, 100vw"
              src="/img/contact/bg.jpg"
              alt=""
            />
          </div>
          <!-- /.content__img -->
        </div>
        <!-- /.contact__content -->
        <form class="contact__form form">
          <h3 class="form__title">Оставьте заявку</h3>
          <!-- /.form__title -->
          <p class="form__paragraph">
            Наш менеджер свяжется с вами для уточнения деталей
          </p>
          <!-- /.form__paragraph -->
          <div class="form__inputs">
            <input
              id="form-input-name"
              type="text"
              class="form__input form__input--name"
              placeholder="Ваше имя"
            />
            <input
              id="form-input-email"
              type="email"
              class="form__input form__input--email"
              placeholder="Ваш email"
            />
            <input
              id="form-input-phone"
              type="text"
              class="form__input form__input--phone"
              placeholder="Ваш телефон"
            />
          </div>
          <BaseButton
            class="block w-full rounded-md font-semibold mt-[1.5em] hover:opacity-80 focus:grayscale-[20%] lg:text-[18px]"
          >
            Отправить заявку
          </BaseButton>
          <!-- /.form__inputs -->
        </form>
        <!-- /.contact__form -->
      </div>
      <!-- /.contact__wrapper -->
    </BaseContainer>
  </section>
  <!-- /.contact -->
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.contact {
  @apply bg-[#fafafa] mt-7 py-7 overflow-clip lg:relative lg:h-[768px];

  // .contact__wrapper

  &__wrapper {
    @apply flex items-start justify-between;
  }

  // .contact__content

  &__content {
  }

  // .contact__form

  &__form {
  }
}
.content {
  // @apply;
  @apply flex flex-col overflow-x-visible mb-[2em];

  // .content__title

  &__title {
    @apply text-black text-[28px] font-bold leading-[1.05]  mb-[0.65em] lg:z-10 lg:max-w-[22ch] lg:text-[42px];
  }

  // .content__paragraph

  &__paragraph {
    @apply text-black text-sm mb-[1em] max-w-[450px] lg:z-10 lg:text-xl lg:max-w-[35ch];
  }

  // .content__img

  &__img {
    @apply w-[110vw] -translate-x-[10vw] max-h-[300px];

    position: relative;
    padding-bottom: min(300px, 75%);

    @include mq(med-lg) {
      padding-bottom: min(350px, 75%);
    }

    @include mq(lg) {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      transform: translateX(0);
      max-height: unset;
      padding-bottom: 0;

      z-index: 0;
    }

    img {
      @apply block absolute inset-0 w-full h-full object-cover max-h-[300px] md:max-h-[350px] lg:static lg:max-h-full;
    }
  }
}
.form {
  @apply max-w-lg lg:z-10 lg:opacity-[0.999] lg:bg-white lg:p-6 lg:rounded-lg;
  // lg:absolute lg:top-11 lg:left-[62%] lg:bg-white lg:p-5 lg:rounded-md

  // .form__title

  &__title {
    @apply text-[22px] text-font-dark font-semibold mb-[0.5em] leading-[1.1] lg:text-[30px];
  }

  // .form__paragraph

  &__paragraph {
    @apply text-[14px] text-font-dark mb-[1em] lg:max-w-[35ch] lg:text-[18px];
  }

  // .form__inputs

  &__inputs {
    @apply flex flex-col gap-y-2;
  }

  // .form__input

  &__input {
    @apply px-4 py-2 rounded-md border border-stroke-color text-font-dark font-medium placeholder:border-font-gray focus:outline focus:outline-2 focus:outline-accent;
  }

  // .form__input--name

  &__input--name {
  }

  // .form__input--email

  &__input--email {
  }

  // .form__input--phone

  &__input--phone {
  }
}
</style>
