<script setup lang="ts">
const localePath = useLocalePath()

onMounted(() => {
    let nav = document.getElementById("navbar");

    window.addEventListener("scroll", function () {

        if (window.scrollY == 0) {
            if (nav?.classList.contains("bg-opacity-45")) {
                nav?.classList.replace("bg-opacity-45", "bg-opacity-0")
            }
            nav?.classList.remove("backdrop-blur-lg");
        } else {
            nav?.classList.replace("bg-opacity-0", "bg-opacity-45")
            nav?.classList.add("backdrop-blur-lg");
        }
    });

});

</script>


<template>

    <nav id="navbar"
        class="flex justify-around items-center fixed z-50 w-full h-16 bg-black bg-opacity-0 text-white transition duration-200 [&_#check:checked~ul]:translate-x-0">
        <NuxtLink to="https://github.com/elbriant" class="text-3xl lg:text-4xl font-semibold font-Sans" external>
            elbriant<span class="text-orange-400">dev</span>
        </NuxtLink>

        <input type="checkbox" id="check" class="hidden">
        <label for="check" class="checkbtn lg:hidden flex items-center justify-center cursor-pointer">
            <Icon size="2rem" name="heroicons:bars-3-16-solid"></Icon>
        </label>

        <ul class="fixed w-full h-dvh -z-10 top-0 left-0 bg-gray-light text-center transition duration-300 -translate-x-full [&_a]:text-xl
             lg:flex lg:space-x-6 lg:static lg:w-auto lg:h-auto lg:bg-transparent lg:translate-x-0">
            <li class="w-full my-8 py-3 mt-28
            lg:w-auto lg:my-auto lg:py-auto lg:mt-o">
                <NuxtLink onclick="document.getElementById('check').checked = false"
                    :to="{ path: localePath('/'), hash: '#main' }">
                    {{ $t('navBar.start') }}
                </NuxtLink>
            </li>
            <li class="w-full my-8 py-3
            lg:w-auto lg:my-auto lg:py-auto ">
                <NuxtLink onclick="document.getElementById('check').checked = false"
                    :to="{ path: localePath('/'), hash: '#aboutme' }">
                    {{ $t('navBar.aboutme') }}
                </NuxtLink>
            </li>
            <li class="w-full my-8 py-3
            lg:w-auto lg:my-auto lg:py-auto ">
                <NuxtLink onclick="document.getElementById('check').checked = false"
                    :to="{ path: localePath('/'), hash: '#projects' }">
                    {{ $t('navBar.projects') }}
                </NuxtLink>
            </li>
            <!-- Not the best way to do this but hey, if it works, it works -->
            <BaseButton class="inline-block left-0 w-full rounded-none py-6 text-base m-0 lg:hidden"
                onclick="document.getElementById('check').checked = false" :label="$t('navBar.contactbtn')"
                :to="{ path: localePath('/'), hash: '#contact' }" />
        </ul>
        <!-- Not the best way to do this but hey, if it works, it works -->
        <BaseButton class="m-12 hidden lg:block" :label="$t('navBar.contactbtn')"
            :to="{ path: localePath('/'), hash: '#contact' }" />

    </nav>
</template>
