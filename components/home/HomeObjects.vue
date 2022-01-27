<template>
  <section class="object">
    <BaseContainer>
      <h2 class="object__title">Объекты недвижимости</h2>

      <ul class="object__wrapper">
        <li class="object__card card card--flat">
          <h3 class="card__title">Квартиры</h3>
          <p class="card__paragraph">Лучшие квартиры в Старом Осколе</p>
          <!-- <div class="card__bg card__bg--flat">
            <img
              src="/img/service/service-flat.jpg"
              alt=""
              class="card__bg-img card__bg-img--flat"
            />
          </div> -->
        </li>
        <li class="object__card card card--house">
          <h3 class="card__title">Дома</h3>
          <p class="card__paragraph">Уютные новые дома с теплоизоляцией</p>
          <!-- <div class="card__bg card__bg--house">
            <img
              src="/img/service/service-house.jpg"
              alt=""
              class="card__bg-img card__bg-img--house"
            />
          </div> -->
        </li>
        <li class="object__card card card--area">
          <h3 class="card__title">Участки</h3>
          <p class="card__paragraph">
            Более 200 выгодных участков от 150 тыс. р. за сотку.
          </p>
          <!-- <div class="card__bg card__bg--area">
            <img
              src="/img/service/service-area.jpg"
              alt=""
              class="card__bg-img card__bg-img--area"
            />
          </div> -->
        </li>

        <li class="object__card card card--room">
          <h3 class="card__title">Комнаты</h3>
          <p class="card__paragraph">Выгодный вариант жилья от 700 тыс.руб.</p>
          <!-- <div class="card__bg card__bg--room">
            <img
              src="/img/service/service-room.jpg"
              alt=""
              class="card__bg-img card__bg-img--room"
            />
          </div> -->
        </li>
      </ul>
    </BaseContainer>
  </section>
</template>

<script>
export default {}
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

  &--flat {
    // background: url(/img/service/service-flat.jpg),
    //   linear-gradient(
    //     -240deg,
    //     #577da3 10%,
    //     #3c5f87 35.27%,
    //     rgb(46, 74, 112) 110%
    //   );
    // background-size: var(--flat-size) calc(var(--flat-size) / 1.779), 100% 35%;
    // background-position: 80% -42%, 50% 0%;
    // background-repeat: no-repeat;
    // background-blend-mode: normal;
    // background-position:

    background: url(/img/service/service-flat-new.jpg);
    background-size: cover;
    background-repeat: no-repeat;
  }
  &--house {
    // background: url(/img/service/service-house.jpg),
    //   linear-gradient(
    //     180deg,
    //     #42688f 0%,
    //     #42688f 19.27%,
    //     rgba(71, 105, 147, 0) 100%
    //   );
    // background-size: 200%;
    // background-position: 91% -15%;
    // background-repeat: no-repeat;
    // background-blend-mode: darken;

    background: url(/img/service/service-house-new.jpg);
    background-size: cover;
    background-repeat: no-repeat;

    .card__title {
      @apply text-font-dark;
    }

    .card__paragraph {
      @apply text-font-dark;
    }
  }
  &--area {
    // background: url(/img/service/service-area.jpg),
    //   linear-gradient(
    //     180deg,
    //     #42688f 0%,
    //     #42688f 19.27%,
    //     rgba(71, 105, 147, 0) 100%
    //   );
    // background-size: 200%;
    // background-position: 91% -15%;
    // background-repeat: no-repeat;
    // background-blend-mode: darken;

    background: url(/img/service/service-area-new.jpg);
    background-size: cover;
    background-repeat: no-repeat;
  }
  &--room {
    // background: url(/img/service/service-room.jpg),
    //   linear-gradient(
    //     180deg,
    //     #42688f 0%,
    //     #42688f 19.27%,
    //     rgba(71, 105, 147, 0) 100%
    //   );
    // background-size: 200%;
    // background-position: 91% -15%;
    // background-repeat: no-repeat;
    // background-blend-mode: darken;

    background: url(/img/service/service-room-new.jpg);
    background-size: cover;
    background-repeat: no-repeat;
  }

  // .card__title

  &__title {
    @apply text-base font-bold mb-[0.5em] text-white;
  }

  // .card__paragraph

  &__paragraph {
    @apply text-sm font-medium text-white max-w-[25ch];
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
