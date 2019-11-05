<template>
  <v-row justify="center">
    <!-- <v-layout column justify-center align-center></v-layout>
    <v-flex xs12 sm8 md6></v-flex> -->
    <v-col>
      <div class="text-center">
        <h2 class="display-2 font-weight-medium">Add To Count</h2>
        <v-btn class="mx-2" fab dark color="indigo" @click="addToSmokeCount">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
        <pre>{{ datesDB }}</pre>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    datesDB: {}
  }),
  async mounted() {
    // await this.$localForage.setItem('datesDB', { _id: 'test1' })
    this.datesDB = (await this.$localForage.getItem('datesDB')) || {}
  },

  methods: {
    addToSmokeCount() {
      const now = new Date()
      const dateString = now.toDateString()
      if (!this.datesDB[dateString]) this.datesDB[dateString] = 1
      else this.datesDB[dateString]++
      this.$nextTick(async () => {
        await this.$localForage.setItem('datesDB', this.datesDB)
      })
    }
  }
}
</script>
