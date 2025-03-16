<template>
    <section id="aboutme" class="w-full h-dvh p-5 bg-gray-light py-7 flex flex-col items-center justify-around
         lg:px-24 lg:flex-row lg:p-10 lg:pt-24">
        <NuxtImg src="me.jpg" :alt="$t('alts.aboutImg')" class="w-4/5 max-w-sm h-full object-cover order-12 rounded-xl
            lg:-order-1 lg:w-96 lg:max-w-fit" format="webp" :modifiers="{ rotate: null }" />
        <div class="max-w-[550px] text-white
        lg:ml-8">
            <h2 class="text-5xl mt-10 capitalize 
            lg:text-7xl">{{ $t('aboutSection.title') }}</h2>
            <h5 class="tracking-wide text-lg my-1.5
            lg:my-3"> {{ $t('aboutSection.subtitle1') }} <span class='text-orange-light'>{{
                $t('aboutSection.subtitle2') }}</span> </h5>
            <p class="tracking-[1px] text-base mb-3 text-justify text-orange-verylight lg:mb-11">
                {{ $t('aboutSection.definition') }}
            </p>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>
