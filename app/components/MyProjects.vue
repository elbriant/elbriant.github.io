<script setup lang="ts">
import projectRawData from 'public/projects/list.json';
import type { Project } from '~/types/project';
import ProjectChild from './ProjectChild.vue';

const projects: Project[] = projectRawData

const projectBox = useTemplateRef('projects-box')

function scroll(quantity: number) {
    if (projectBox.value?.scrollLeft != undefined) {
        projectBox.value.scrollBy({
            left: quantity,
            behavior: "smooth",
        });
    }
}

</script>

<template>
    <section id="projects"
        class="w-full h-screen bg-gray-strong py-10 px-0 flex flex-col items-center text-white relative">
        <h2 class="text-6xl mb-6 mt-8">{{ $t('projects.title') }}</h2>
        <div class="h-full max-w-[70%] grid scrollbar-thin w-fit
        justify-center lg:justify-start
        grid-flow-row lg:grid-flow-col
        overflow-y-scroll lg:overflow-hidden
        grid-cols-[repeat(2,minmax(auto,172px))] lg:grid-cols-[repeat(2,172px)]
        grid-rows-[repeat(2,252px)] lg:grid-rows-[repeat(2,50%)]
        auto-rows-[252px] lg:auto-rows-auto
        auto-cols-auto lg:auto-cols-[172px]" ref="projects-box">
            <ProjectChild v-for="project in projects" :project="project" />
        </div>
        <div class="absolute top-1/2 left-[10%] items-center justify-center p-2 bg-gray-light rounded-full z-10 group cursor-pointer
            transition duration-100 border-2 border-gray-light
            hover:scale-110 hover:border-orange-light hidden lg:flex" @click="scroll(-865)">
            <Icon name="material-symbols:arrow-left-alt-rounded" size="2rem" />
        </div>
        <div class="absolute top-1/2 right-[10%] items-center justify-center p-2 bg-gray-light rounded-full z-10 group cursor-pointer
            transition duration-100 border-2 border-gray-light
            hover:scale-110 hover:border-orange-light hidden lg:flex" @click="scroll(865)">
            <Icon name="material-symbols:arrow-right-alt-rounded" size="2rem" />
        </div>
    </section>
</template>