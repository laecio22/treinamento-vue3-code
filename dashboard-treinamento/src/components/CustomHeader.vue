<template>
    <div class="container-header">
        <div class=" flex flex-col w-4/5 max-w-8xl">
            <header class="flex justify-between h-40 items-center  py-16"> 
             <div class="w-36 lg:w-60" >
                 <img class="w-full" src="../assets/images/logo_white 1.png" alt="logo da aplicação"> 
             </div>  
                   
              <div class="flex gap-6">
                 <button class="text-2xl text-white font-bold">Crie  uma conta</button>
                 <button class="bg-white text-pink-500 rounded-full w-32 text-2xl font-bold h-10">Entrar</button>
              </div>
            </header>
            <div class="mt-48 flex h-full items-start">
                <div class="w-1/2 flex flex-col gap-4 ">
                   <p class="text-5xl font-black text-white py-3">
                    Tenha um feedback. E faça seus clientes mais felizes!
                   </p>
                   <p class="text-2xl text-white font-normal">
                    Receba ideias, reclamações e feedbacks com um simples widget na página.
                   </p>
                   <button class="bg-white text-pink-500 rounded-full mt-7 w-1/3 text-2xl font-bold h-14">Crie uma conta grátis</button>
                </div>
                <div class="w-1/2">
                   <div>
                     <img  src="../assets/images/png-transparent-several-blue-balloons-balloon-navy-blue-blue-balloon-blue-simple-greeting-card 2.png" >
                   </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>
<style scoped>
   .container-header {
    height: 650px;
    @apply flex   w-full bg-pink-500 justify-center
    
   }

   .content-header {
    
   }

</style>

