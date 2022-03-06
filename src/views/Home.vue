<template>
  <div class="home">
    <!-- <tictac/> -->
    <spaceship/>
  </div>
</template>

<script>
// import tictac from "@/components/tictactoe.vue"
import spaceship from "@/components/spaceship.vue"

export default {
  name: 'Home',
  components: {
    // tictac
    spaceship
  }
}
</script>
