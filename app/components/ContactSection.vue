<template>
    <section id="contact" class="w-full h-screen relative bg-gray-light">
        <video class="w-full h-screen absolute object-cover blur-[2px] overflow-hidden pointer-events-none"
            disablePictureInPicture autoplay muted loop src="public/contact_bg.mp4"></video>
        <div
            class="w-full h-screen relative flex flex-col justify-center items-center font-Sans bg-black bg-opacity-30">
            <p
                class="text-white text-4xl text-center font-bold mb-6 shadow-zinc-800 [text-shadow:_5px_5px_15px_var(--tw-shadow-color)] lg:text-6xl">
                {{ $t('contact.title') }}
            </p>
            <BaseButton to="/contactme" class="scale-125 text-xl py-3 px-7">{{ $t('contact.button') }}</BaseButton>
        </div>

        <div class="absolute bottom-2 w-full flex justify-center items-center">
            <NuxtLink class="text-sm text-gray-600 opacity-70 transition duration-300 hover:text-white"
                href="https://www.pexels.com/video/person-encoding-in-a-computer-2278095/" external>Video by
                Joseph
                Redfield</NuxtLink>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>