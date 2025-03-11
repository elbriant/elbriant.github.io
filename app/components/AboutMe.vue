<template>
    <section id="aboutme" class="w-full h-dvh p-5 bg-gray-light py-7 flex flex-col items-center justify-around
         lg:px-24 lg:flex-row lg:p-10 lg:pt-24">
        <NuxtImg src="me.jpg" alt="Mi gato" class="w-4/5 max-w-sm h-full object-cover order-12 rounded-xl
            lg:-order-1 lg:w-96 lg:max-w-fit" format="webp" :modifiers="{ rotate: null }" />
        <div class="max-w-[550px] text-white
        lg:ml-8">
            <h2 class="text-5xl mt-10 capitalize 
            lg:text-7xl">Sobre mí</h2>
            <h5 class="tracking-wide text-lg my-1.5
            lg:my-3">desarrollador web y <span class="text-orange-light">programador de
                    videojuegos</span></h5>
            <p class="tracking-[1px] text-base mb-3 text-justify text-orange-verylight lg:mb-11">Soy Brian Lopez, un
                desarrollador
                joven
                localizado en Venezuela, me gusta desarollar aplicaciones webs y
                juegos. Actualmente estoy estudiando y buscando trabajo, he hecho pequeños proyectos que podrás
                encontrar más abajo, siempre creando nuevas ideas.</p>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>
