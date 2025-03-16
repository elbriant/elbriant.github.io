<template>
    <footer class="w-full h-80 flex flex-col justify-center items-center bg-gray-strong text-white">
        <p class="text-3xl font-bold mb-5">Brian Lopez</p>
        <p class="text-lg leading-7">{{ $t('footer.logan') }}</p>
        <div
            class="flex justify-center items-center my-5 [&_a]:w-11 [&_a]:h-11 [&_a]:bg-orange-strong [&_a]:rounded-full [&_a]:mx-4 [&_a]:transition [&_a]:duration-300 [&_a]:flex [&_a]:items-center [&_a]:justify-center">
            <NuxtLink class="hover:scale-125" href="https://twitter.com/elbriantdev" external>
                <Icon size="1.5rem" name="ri:twitter-x-fill"></Icon>
            </NuxtLink>
            <NuxtLink class="hover:scale-125" href="https://github.com/elbriant" external>
                <Icon size="1.5rem" name="mdi:github"></Icon>
            </NuxtLink>
            <NuxtLink class="hover:scale-125" href="https://linkedin.com/in/elbriant" external>
                <Icon size="1.5rem" name="tabler:brand-linkedin"></Icon>
            </NuxtLink>
        </div>
        <div class="text-orange-strong text-sm">{{ $t('footer.endtext') }} &hearts;</div>
    </footer>
</template>

<script setup lang="ts">

</script>