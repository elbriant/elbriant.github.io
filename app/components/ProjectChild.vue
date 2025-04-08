<script setup lang="ts">
import type { Project } from '~/types/project';

const { locale, t } = useI18n()
const { project } = defineProps<{
    project: Project
}>()


const hrefLink = project.href?.startsWith('https') ?? true ? (project.href ?? 'javascript:void(0)') : `/projects/${project.href}`
const imgSrc = project.imageRes ? project.imageRes : 'warning.jpg'
const localeDesc: globalThis.ComputedRef<string> = computed(() => {
    return project.description[locale] ?? project.description['en'] ?? project.description['es'] ?? 'no description'
})
const subtitle: globalThis.ComputedRef<string> = computed(() => {
    return project.subtitle[locale] ?? project.subtitle['en'] ?? project.subtitle['es'] ?? ' App'
})
const buttonLabel = project.game ? t('projects.game') : t('projects.app')

const extendX = project.customExtend?.width ?? 1
const extendY = project.customExtend?.height ?? 1

const notAvailable = !(project.available)
const large = extendX > 1 && extendY > 1

const colClass = ref(`col-span-${extendX}`)
const rowClass = computed(() => {
    return large ? `row-span-1 lg:row-span-${extendY}` : `row-span-${extendY}`
})

const classObject = computed(() => ({
    'cursor-not-allowed': notAvailable,
}))

//   featured: boolean;
</script>

<template>
    <NuxtLink :to="hrefLink" external class="rounded-3xl border-2 border-solid border-transparent transition ease-out duration-500 overflow-hidden bg-gray-light m-1.5 relative flex flex-col z-10 shadow-[rgba(0,0,0,.75)]
        group hover:border-[#fdf7ec] hover:shadow-2xl" :class="[colClass, rowClass, classObject]">
        <NuxtImg :src="`projectsRes/${imgSrc}`" :alt="project.imageAlt ?? undefined" format="webp"
            :modifiers="{ rotate: null }"
            class="absolute overflow-hidden opacity-90 object-cover w-full h-full -z-10" />
        <div class="relative w-full h-4/5 flex justify-center items-center px-3 bg-[linear-gradient(0deg,rgba(0,0,0,0.73)_0%,rgba(0,0,0,0)_36%,rgba(0,0,0,0)_92%)] 
            transition duration-200 ease-linear
            before:absolute before:w-full before:h-full before:bg-[linear-gradient(0deg,rgba(0,0,0,0.73)_0%,rgba(0,0,0,0.73)_85%,rgba(0,0,0,0.73)_86%,rgba(255,255,255,0)_100%)]
            before:-z-10 before:opacity-0
            group-hover:bg-none group-hover:before:opacity-100 group-hover:backdrop-blur-[2px]">
            <p v-html="localeDesc" class="relative opacity-0 text-center text-orange-verylight text-xs leading-4 z-50 transition duration-100
                group-hover:opacity-100 [&>span]:text-orange-light" :class="{ 'lg:[&]:text-2xl': large }">
            </p>
        </div>
        <div
            class="flex justify-stretch items-stretch w-full h-1/5 transition duration-200 ease-linear group-hover:backdrop-blur-[2px] bg-[rgba(0,0,0,.73)]">
            <div class="flex justify-center flex-col w-full pl-4 " :class="{ 'px-8': large }">
                <h5 class="text-white text-sm" :class="{ 'lg:[&]:text-xl': large }">{{ project.name }}</h5>
                <h6 class="text-orange-light text-[0.625rem] mt-0.5 mx-0 mb-1" :class="{ 'lg:[&]:text-xs': large }">- {{
                    subtitle
                    }} -</h6>
            </div>
            <NuxtMarquee v-if="project.technologies != null"
                class="max-w-[40%] mr-2 [-webkit-mask-image:linear-gradient(90deg,transparent_0%,transparent_7%,rgba(255,255,255,1)_20%,rgba(255,255,255,1)_80%,transparent_93%,transparent_100%)] "
                :speed="12" :auto-fill="true">
                <Icon v-for="tech in project.technologies" :name="tech.icon" :size="large ? '3rem' : '1.5rem'"
                    class="opacity-60" />
            </NuxtMarquee>
        </div>
        <button class="absolute rounded-tl-2xl border-none bg-[#ffab10] text-white text-xs py-2 px-4 left-[80%] bottom-0 transition duration-300 ease-out
        transform -translate-x-1/2 translate-y-[125%] opacity-0
        group-hover:opacity-100 group-hover:translate-y-0"
            :class="{ '[&]:bg-[#df2c14]': notAvailable, 'lg:[&]:text-sm': large, 'lg:[&]:left-1/2': large, 'rounded-tr-2xl': large, 'lg:[&]:px-8': large }">{{
                buttonLabel
            }}</button>
    </NuxtLink>
</template>