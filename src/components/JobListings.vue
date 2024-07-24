<template>
    <section class="bg-blue-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browse Jobs
            </h2>
            <!-- Show loading spinner while loading is true -->
             <div v-if="isLoading" class="text-center text-gray-500">
                <PulseLoader />
            </div>
            <!-- Show Job Listing when done loading -->
            <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <JobListing v-for="job in jobs.slice(0, limit || jobs.length)" :key="job.id" :job="job"/>
            </div>
        </div>
    </section>
    <section class="m-auto max-w-lg my-10 px-6" v-if="showButton">
      <RouterLink
        to="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</RouterLink
      >
    </section>
  
</template>

<script>
// import jobData from '../jobs.json'
import JobListing from './JobListing';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'



console.log([]);
export default {
    name: 'JobListings',
    data() {
        return {
            jobs: [],
            isLoading:true
    }
    },
    components:{
        JobListing,
        PulseLoader
    },
    props: {
        limit: Number,
        showButton: {
            type: Boolean,
            default: false
        },
    },
    methods: {
        async fetchJobs() {
            const res = await fetch('/api/jobs');
            const data = await res.json()
            this.isLoading = false
            return data
        },
       
    },
    async created () {
        this.jobs = await this.fetchJobs()        
        console.log(this.jobs)
    },
}
</script>

<style>

</style>