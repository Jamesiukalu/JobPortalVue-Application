<template>
  <h1>Vue Jobs for {{ name }}</h1>
  <p v-if="status === 'active'">User is Active</p>
  <p v-else-if="status === 'pending'">User is Pending</p>
  <p v-else>User is Inactive</p>

  <h3>Tasks:</h3>
  <ul>
    <li v-for="task in tasks" :key="task">
      {{ task }}
    </li>
  </ul>

  <!-- <a v-bind:href="link">Click for Google</a> -->
   <a :href="link">Click for Google</a>
   <br>
   <!-- <button v-on:click="toggleStatus">Change Status</button> -->
   <button @click="toggleStatus">Change Status</button>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  },
  data() {
    return{
      name: 'John doe',
      status: 'pending',
      tasks: ['Task one', 'Task two', 'Task three'],
      link: 'https://google.com'
    }
  },
  methods: {
    toggleStatus() {
      if (this.status ==='active') {
      this.status = 'pending;'
    } else if (this.status === 'pending') {
      this.status = 'inactive';
    } else this.status = 'active'
    }
  }
}
</script>

<template>
  <h1>{{ name }}</h1>
   <p v-if="status === 'active'">User is Active</p>
   <p v-else-if="status === 'pending'">User is Pending</p>
   <p v-else>User is Inactive</p>
 
   <form @submit.prevent="addTask">
     <label for="newTask">Add Task</label>
     <input type="text" id="newTask" name="newTask" v-model="newTask" />
     <button type="submit">Add Task</button>
   </form>
 
   <h3>Tasks:</h3>
   <ul>
     <li v-for="(task, index) in tasks" :key="task">
       <span>{{ task }}</span>
       <button @click="deleteTask(index)">x</button>
     </li>
   </ul>
 
    <button @click="toggleStatus">Change Status</button>
 </template>
 
 <script setup>
 import { ref, onMounted } from 'vue';
 
 const name = ref('John Doe');
 const status = ref('active');
 const tasks = ref( ['Task one', 'Task two', 'Task three']);
 const newTask = ref('');
 
 
 const toggleStatus = () => {
 
   if (status.value ==='active') {
       status.value = 'pending;'
     } else if (status.value === 'pending') {
       status.value = 'inactive';
     } else status.value = 'active'
 };
 
 const addTask = () => {
   if(newTask.value.trim() !== ''){
     tasks.value.push(newTask.value);
     newTask.value = '';
   }
 }
 const deleteTask = (index) => {
  tasks.value.splice(index ,1);
 }
 
 onMounted(async () => {
   try {
     const res = await fetch ('https://jsonplaceholder.typicode.com/todos');
     const data = await res.json();
     tasks.value = data.map((task) => task.title);
   } catch (error) {
     console.log('Error fetching Tasks');
   }
 });
 </script>
 
