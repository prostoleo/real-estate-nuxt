<template>
  <li class="dwelling__card card">
    <header class="card__header">
      <div class="card__gallery">
        <div class="card__gallery-item">
          <img src="https://source.unsplash.com/random/1000*600" alt="" />
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
    }
  },
}
</script>

<style lang="scss" scoped>
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
