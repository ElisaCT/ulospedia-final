<template>
    <div class="grid grid-cols-4 gap-5">
        <div class="card col-span-1 h-[300px] placeholder wave">
            <div class="h-[300px] w-[252px]">
                <img src="" alt="">
            </div>
            <div class="flex flex-row absolute left-6 bottom-6 z-10">
                <h1 class="w-auto h-6 bg-[#eeee]"></h1>
                <p class="w-auto h-4 bg-[#eeee]" ></p>
            </div>
        </div>

        <div class="card col-span-1 h-[300px] placeholder wave">
            <div class="h-[300px] w-[252px]">
                <img src="" alt="">
            </div>
            <div class="flex flex-row absolute left-6 bottom-6">
                <h1 class="w-auto h-6 bg-[#eeee]"></h1>
                <p class="w-auto h-4 bg-[#eeee]" ></p>
            </div>
        </div>

        <div class="card col-span-1 h-[300px] placeholder wave">
            <div class="h-[300px] w-[252px]">
                <img src="" alt="">
            </div>
            <div class="flex flex-row absolute left-6 bottom-6">
                <h1 class="w-auto h-6 bg-[#eeee]"></h1>
                <p class="w-auto h-4 bg-[#eeee]" ></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .placeholder{
        margin: 15px;
        padding: 10px;
        border-radius: 8px;
    }
    .placeholder.wave div{
        animation: wave 1s infinite linear forwards;
        -webkit-animation: wave 1s infinite linear forwards;
        background: #f6f7f8;
        background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
        background-size: 800px 104px;
        overflow: hidden;
    }
    @keyframes pulse {
        0% {
        background-color: rgba(165, 165, 165, .1);
                }
        50% {
        background-color: rgba(165, 165, 165, .3);
                }
        100% {
        background-color: rgba(165, 165, 165, .1);
                }
    }
    @-webkit-keyframes pulse {
        0% {
        background-color: rgba(165, 165, 165, .1);
                }
        50% {
        background-color: rgba(165, 165, 165, .3);
                }
        100% {
        background-color: rgba(165, 165, 165, .1);
                }
    }
    @keyframes wave {
        0% {
        background-position: -468px 0
                }
        100% {
        background-position: 468px 0
                }
    }
    @-webkit-keyframes wave {
        0% {
        background-position: -468px 0
                }
        100% {
        background-position: 468px 0
                }
    }
</style>