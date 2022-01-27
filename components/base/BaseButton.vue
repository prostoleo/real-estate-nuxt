<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
button {
  display: inline-block;
  padding: 0.9em 3em;

  background: $primary;

  font-size: 0.8rem;
  // font-weight: 500;
  line-height: 100%;
  // letter-spacing: 0.11em;
  // border-radius: 0.2845em;

  color: white;

  &.btn-lg {
    display: block;
    width: 100%;
  }

  &.with-icon-left {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    border: 0.7px solid $stroke-color;
    background: transparent;

    position: relative;

    img {
      // margin-right: auto;
      // justify-self: flex-start;
      // display: block;
      // position: absolute;
      // top: 50%;
      // left: 10%;

      // transform: translate(-50%, -50%);
    }

    span {
      display: block;
      // margin: 0 auto;
      width: max-content;
      color: $font-dark;
    }
  }
}
</style>
