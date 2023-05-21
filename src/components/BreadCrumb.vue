<script>
import GT from './icons/GT.vue'
export default {
    components: {
        GT
    }
}
</script>
<template>
    <div class="max-w-[1320px] mx-auto pt-[2px]">
        <div class="flex relative justify-center items-center bg-[#F1F5F0] h-[86px] w-full rounded-br-xl rounded-bl-xl">
            <h4 class="bread">browse listing</h4>
            <div class="absolute -bottom-5 bg-white">
                <div class="h-[36px] breadcrumb flex justify-center border px-[16px] gap-3 py-2 rounded">
                    <p>Home</p>
                    <span class="mt-[5px]">
                        <GT />
                    </span>
                    <p>Browse Listing</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bread {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    color: #171E15;
    text-transform: capitalize;
}

.breadcrumb p,
span {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #636A60;
}
</style>