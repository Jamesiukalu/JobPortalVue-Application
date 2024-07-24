<template>
  <JobListings :showButton="false"/>
</template>

<script>
import JobListings from '../components/JobListings';

export default {
    name: 'JobViews',
    components: {
        JobListings,
  }
}
</script>


<style>

</style>