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

  background: $primary !important;

  font-size: 0.8rem;
  font-weight: 500;
  line-height: 143%;
  letter-spacing: 0.11em;
  border-radius: 0.2845em;

  color: white;

  &.btn-lg {
    display: block;
    width: 100%;
  }

  &.with-icon-left {
    display: flex;
    align-items: center;
    // justify-content: center;

    border: 0.7px solid $stroke-color;
    background: transparent;

    img {
      margin-right: auto;
      justify-self: flex-start;
    }

    span {
      display: block;
      margin: 0 auto;
      width: max-content;
    }
  }
}
</style>
