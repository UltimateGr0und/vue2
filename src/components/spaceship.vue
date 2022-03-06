<template>
    <div class="game">
        <h1 class="text-white">Space invalids</h1>
        <img class="w-20 ship"  src="@/assets/pngwing.png" >
        <button class="top block text-white">top</button>
        <button class="bottom block text-white">bottom</button>
        <button class="right block text-white">right</button>
        <button class="left block text-white">left</button>
    </div>
</template>

<style lang="less">
.game{
    background-image: url('https://naukatv.ru/upload/images/original/4f/4fea30d2395e228a9adc1e9e949ce62c59b5790d.jpg');
    width: 100wh;
    height: 100vh;
}
.ship{
    transition: all 0.3s;
    position: fixed;
    right: 0;
    bottom: 0;
    
    // &.left{
    //     transform: rotate(-90deg);
    // }
    // &.right{
    //     transform: rotate(90deg);
    // }
    // &.top{
    //     transform: rotate(0deg);
    // }
    // &.bottom{
    //     transform: rotate(180deg);
    // }
}

</style>