<template>
    <section>
        <div class="border-b border-[#212020]">

            <div class="flex justify-between px-2 items-center">

                <div class="pt-2 pb-1 tracking-tighter text-gradient font-medium flex items-center">
                    <span class="text-white pr-1">
                        <img src="/img/logo.png" alt="" class="w-[26px]">
                    </span>

                    <span>
                        AnseCode
                    </span>
                </div>

                <div class="pt-2 pb-1">
                    <menuButton></menuButton>
                </div>

            </div>

        </div>
    </section>
</template>


<script>
import menuButton from './buttons/menuButton.vue';

export default {
    components: {
        menuButton,
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style scoped></style>