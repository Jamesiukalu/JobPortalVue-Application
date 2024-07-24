<template>
  <VueHero title="Test Title" subtitle="Test Subtitle" />
  <HomeCards />
  <JobListings :limit="3" :showButton="true"/>
</template>

<script>
import VueHero from '../components/VueHero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';

export default {
    components: {
        VueHero,
        HomeCards,
        JobListings,
  }
}
</script>

<style>

</style>