<template>
  <main>
    <HomeHero />
    <HomeService />
    <HomeObjects />
    <!-- <HomeDwellings /> -->
    <HomeDwellings v-for="index in 3" :key="index" />
    <BaseContact />
  </main>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="sass"></style>
