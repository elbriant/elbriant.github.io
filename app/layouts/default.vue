<script setup lang="ts">

const { t } = useI18n()
const head = useLocaleHead()

useSeoMeta({
    title: 'elbriantdev',
    description: t('meta.desc'),
    ogTitle: 'elbriantdev',
    ogDescription: t('meta.desc'),
    ogUrl: 'https://elbriant.github.io',
    twitterTitle: 'elbriantdev',
    twitterDescription: t('meta.desc'),
})

useHead({
    htmlAttrs: {
        lang: head.value.htmlAttrs?.lang ?? 'es',
        dir: head.value.htmlAttrs?.dir,
    },
    link: [
        {
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        },
    ]
})

</script>

<template>
    <div class="font-Noto pointer-events-none w-[calc(100vw-(100vw-100%))] *:pointer-events-auto">
        <slot />
        <LocalizationButton />
    </div>
</template>
