<template>
  <section class="service -translate-y-[2px]">
    <BaseContainer>
      <h2 class="service__title">Сервисы</h2>

      <ul class="service__wrapper">
        <li class="service__item item">
          <div class="item__img">
            <img
              src="/img/icons/dolar.svg"
              alt="иконка доллара"
              class="item__img-icon"
            />
          </div>
          <div class="item__content">
            <h3 class="item__title">
              Оценка рыночной стоимости<br />
              вашего жилья
            </h3>
            <p class="item__paragraph">Узнайте сколько стоит ваш дом</p>
          </div>
        </li>
        <li class="service__item item">
          <div class="item__img">
            <img
              src="/img/icons/thumb-up.svg"
              alt="иконка пальца вверх"
              class="item__img-icon"
            />
          </div>
          <div class="item__content">
            <h3 class="item__title">
              Ипотека для покупки<br />
              квартиры
            </h3>
            <p class="item__paragraph">Подайте заявку на ипотеку</p>
          </div>
        </li>
        <li class="service__item item">
          <div class="item__img">
            <img
              src="/img/icons/file.svg"
              alt="иконка документа"
              class="item__img-icon"
            />
          </div>
          <div class="item__content">
            <h3 class="item__title">
              Договор покупки жилого<br />
              помещения
            </h3>
            <p class="item__paragraph">Сделайте все юридически правильно</p>
          </div>
        </li>
      </ul>
    </BaseContainer>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.service {
  @apply py-4 md:py-7;

  // .service__title

  &__title {
    @apply text-xl text-font-dark font-bold mb-[1.75em];
  }

  // .service__wrapper

  &__wrapper {
    @apply flex flex-col gap-4 md:flex-row md:gap-0 md:justify-between md:-translate-x-6;
    width: calc(100% + 0.75em);
  }

  // .service__item

  &__item {
  }
}
.item {
  // max-w-[min(30%, 300px)]
  @apply py-3 border-b-[1px] border-stroke-color basis-full md:border-b-0 md:border-r-[1px] md:py-0 md:pl-6 md:pr-1.5 md:flex md:gap-x-3;

  max-width: max(30%, 300px);

  // .item__img

  &__img {
    @apply inline-flex justify-center items-center bg-primary rounded-md mb-[0.75em] w-[34px] h-[34px] p-1.5;

    // .item__img-icon
    &-icon {
      @apply w-7 h-7 object-contain;
    }
  }

  // .item__content

  &__content {
    @apply md:-translate-y-[0.25em];
  }

  // .item__title

  &__title {
    @apply text-base text-black font-semibold mb-[0.5em] leading-tight w-fit max-w-[27ch];
  }

  // .item__paragraph

  &__paragraph {
    @apply text-sm text-font-dark w-fit;
  }
}
</style>
