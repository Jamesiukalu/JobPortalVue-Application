import AddJobView from "@/views/AddJobView.vue";
import EditJobView from "@/views/EditJobView.vue";
import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import JobView from "@/views/JobView.vue";
import NotFoundView from "@/views/NotFoundView";
import { createRouter, createWebHistory } from "vue-router";



const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView
        },
        {
            path: '/jobs',
            name: 'Job',
            component: JobsView
        },
        {
            path: '/jobs/:id',
            name: 'JobDetails',
            component: JobView
        },
        {
            path: '/jobs/add',
            name: 'Add-Job',
            component: AddJobView
        },
        {
            path: '/jobs/edit/:id',
            name: 'Edit-Job',
            component: EditJobView
        },
        {
            path: '/:catchAll(.*)',
            name: 'Not-found',
            component: NotFoundView
        },
    ],
});

export default router;