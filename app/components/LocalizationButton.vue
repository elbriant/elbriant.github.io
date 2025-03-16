<script setup lang="ts">
const { setLocale, locales, locale } = useI18n()
const currentLocale = locale;

const availableLocales = computed(() => {
    return locales.value
})

</script>

<template>
    <div class="[&_#localeBtn:checked~#localePanel]:flex">
        <input type="checkbox" id="localeBtn" class="hidden">
        <label for="localeBtn" class="z-20 fixed bottom-6 right-6 bg-white opacity-60 p-3 flex justify-center items-center rounded-full transition duration-100
            hover:cursor-pointer hover:opacity-100">
            <Icon class="size-8 bg-orange-strong" name="material-symbols:language"></Icon>
        </label>
        <div id="localePanel" class="
            z-20 min-w-24 hidden fixed bottom-24 right-9 p-3 justify-center items-start space-y-2 bg-white rounded-md border-2 border-slate-400
            flex-col
            after:bg-white after:size-3 after:absolute after:-bottom-[0.47rem] after:right-2 after:z-20 after:rotate-45 after:border-r-2 after:border-b-2 
            after:border-slate-400 after:rounded-sm">

            <button v-for="locale in availableLocales" @click="setLocale(locale.code)" class="hover:bg-slate-300 px-2 py-1
                rounded" :class="{ 'text-orange-light': currentLocale == locale.code }">
                {{ locale.name }} - {{ locale.code }}
            </button>
        </div>
    </div>
</template>
