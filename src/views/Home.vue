<template>
  <div class="home">
    <!-- <tictac/> -->
    <!-- <spaceship/> -->
    <search/>
  </div>
</template>

<script>
// import tictac from "@/components/tictactoe.vue"
//import spaceship from "@/components/spaceship.vue"
import search from "@/components/search.vue"

export default {
  name: 'Home',
  components: {
    // tictac
    //spaceship
    search
  }
}
</script>
