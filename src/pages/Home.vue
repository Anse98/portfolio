<template>
    <section>
        <!-- title e subtitle -->
        <div class="pt-16 px-3 tracking-tighter">
            <h2 class="font-medium text-4xl">
                Lorenzo Anselmi.
            </h2>

            <p class="font-thin text-gray-300 pt-16 tracking-tight mb-28">
                Realizzo Siti Web, Web App & piccoli Software per Aziende.
            </p>
        </div>

        <div class="px-3">
            <div class="border-b border-[#343333] text-[17px] text-[#ffff] flex gap-2 tracking-tight justify-between">

                <div>
                    <h5 class="pb-1">Su di me</h5>
                </div>

                <span class="">
                    <font-awesome-icon icon="fa-regular fa-lightbulb" />
                </span>
            </div>
        </div>

        <!-- cards container -->
        <div class="flex px-3 mt-10">
            <!-- card -->
            <div class="border rounded-xl bg-white max-w-[250px] p-3 flex flex-col gap-6">
                <!-- img -->
                <div class="flex text-black">
                    <font-awesome-icon icon="fa-solid fa-laptop-code" class="text-[30px]" />
                </div>

                <!-- description -->
                <div class="text-black tracking-tighter font-medium text-[14px]  flex flex-col gap-2">
                    <p>
                        Da sempre appassionato al coding e al mondo dello sviluppo Web<span class="text-[20px]">.</span>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>

<script>
export default {
    components: {

    },
    data() {
        return {
            aboutMeCards: [
                {
                    icon: 'fa-solid fa-laptop-code',
                    description: "Da sempre appassionato al coding e al mondo dello sviluppo Web."
                },

                {
                    icon: 'fa-solid fa-graduation-cap',
                    description: "Iniziato da autodidatta e approfondito sempre più con corsi e diplomi."
                },
            ]
        }
    },
    methods: {

    }
}
</script>