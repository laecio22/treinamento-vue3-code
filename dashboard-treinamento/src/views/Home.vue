<template>
    <div>
        <CustomHeader
        @login="handleLogin"
        @createAccount="handleCreateAccount"
         />
        <Contact />
        <div class="flex justify-center py-10 bg-gray-100">
            <p class="font-medium text-center text-gray-800 "> copyright 2023 </p>           
        </div>     
    </div>
</template>

<script setup lang="ts">
 import CustomHeader from '../components/CustomHeader.vue'
 import Contact from '../components/Contact.vue'
 import { onMounted } from 'vue';
 import { useRouter } from 'vue-router';

 const handleLogin = () => {
    console.log('fser login')
 }

 const handleCreateAccount = () => {
   console.log('criar conta')
 }

 const router =  useRouter()
 onMounted(()=> {
    const token = window.localStorage.getItem('token')   

    if (token){
       router.push({name: 'Feedbacks'})
    }
 })
 
</script>

