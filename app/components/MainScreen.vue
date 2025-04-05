<script setup lang="ts">

</script>

<template>
    <main id="main" class="w-full h-screen bg-gray-900 relative -z-50">
        <NuxtImg src="main_bg.jpg" format="webp" class="w-full h-screen absolute -z-40 object-cover" />
        <div
            class="w-full h-screen px-5 flex items-start justify-center flex-col text-white  shadow-zinc-800 [text-shadow:_5px_5px_15px_var(--tw-shadow-color)] md:pl-28 ">
            <h4 class="tracking-wide text-lg text-orange-verylight">{{ $t('start.intro') }}</h4>
            <h1 class="text-7xl my-6 font-semibold  ">
                Brian
                Lopez</h1>
            <h3 class="italic text-xl mb-12">{{ $t('start.definition') }}</h3>
        </div>
    </main>
</template>