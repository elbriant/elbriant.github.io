<script setup lang="ts">
import emailjs from '@emailjs/browser';
const { t } = useI18n()

useSeoMeta({
    title: t('contactPage.meta.title')
})

useHead({
    script: [
        {
            src: "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js",
            onload: () => {

                (function () {
                    emailjs.init({
                        publicKey: "dSTATfjWsdpNP2VM7",
                    });
                })();
                console.log('emailjs loaded')

            }
        }
    ]
});

const name = ref("");
const email = ref("");
const subject = ref("");
const bodytext = ref("");
const number = ref(null);

async function sendEmail(event: Event) {
    event.preventDefault();

    var date = new Date();
    var current_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    var current_time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    var date_time = current_date + " " + current_time;

    var numberPhone = number.value ?? "not set";

    var params = {
        name: name.value,
        email: email.value,
        number: numberPhone,
        subject: subject.value,
        bodytext: bodytext.value,
        time: date_time,
    };

    const serviceID = "service_ghcm1bk";
    const templateID = "template_06t7ras";

    await emailjs.send(serviceID, templateID, params)
        .then((res) => {
            name.value = "";
            email.value = "";
            bodytext.value = "";
            subject.value = "";
            number.value = null;
            console.log(res);
            alert("El mensaje se ha enviando exitosamente");
        })
        .catch((err) => console.log(err));
}

</script>

<template>
    <section class="w-full py-3 px-6 flex flex-col justify-center items-center bg-gray-strong text-white 
    [&_span]:text-orange-light md:flex-row md:h-screen md:space-x-24 md:px-8">
        <main class="flex flex-col justify-center items-start mb-20
        md:max-w-[50%] md:mb-0">
            <h1 class="text-7xl mb-5">{{ $t('contactPage.title1') }}<span>{{
                $t('contactPage.title2') }}</span></h1>
            <p class="text-orange-verylight tracking-wide leading-7 text-base mb-7">
                {{ $t('contactPage.p1') }}<span>+584121601433</span>{{
                    $t('contactPage.p2') }}<span>elbriantdev@gmail.com</span></p>
            <form class="*:w-full *:p-3 *:border-none *:outline-none *:bg-gray-light *:mb-2.5 *:rounded-md"
                @submit="sendEmail">
                <input v-model="name" type="text" :placeholder="$t('contactPage.form.name')" required>
                <input v-model="email" type="email" name="email" id="email" placeholder="E-mail" required>
                <input v-model="number" type="tel" :placeholder="$t('contactPage.form.number')">
                <input v-model="subject" type="text" :placeholder="$t('contactPage.form.question')" required>
                <textarea v-model="bodytext" class="resize-none max-h-20" name="" id="bodytext" cols="30" rows="10"
                    :placeholder="$t('contactPage.form.placeholder')" required></textarea>
                <input class="[&]:inline-block [&]:bg-orange-strong [&]:text-lg [&]:tracking-wide [&]:uppercase [&]:border-2
                    [&]:border-transparent [&]:border-solid [&]:font-bold
                    [&]:rounded-xl [&]:w-56 [&]:transition [&]:ease-in-out [&]:duration-200 [&]:cursor-pointer
                    [&]:hover:bg-transparent [&]:hover:border-orange-strong [&]:hover:scale-105" type="submit"
                    :value="$t('contactPage.form.send')">
            </form>
        </main>

        <NuxtImg src="me.jpg" :alt="$t('alts.aboutImg')" format="webp" :modifiers="{ rotate: null }"
            class="rounded-xl mb-20 max-w-[50%] md:max-w-[50%] md:max-h-[85%] md:mb-0" />
    </section>
</template>
