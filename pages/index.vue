<template>
  <v-row justify="center">
    <v-col>
      <div class="text-center">
        <h2 class="display-2 font-weight-medium">UPDATE</h2>
        <h2 class="display-2 font-weight-medium">Add To Count</h2>
        <v-btn class="mx-2" fab dark color="indigo" @click="addToSmokeCount">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
        <pre>{{ dates }}</pre>
      </div>
    </v-col>
  </v-row>
</template>

<script>
/* eslint-disable no-console */

export default {
  data: () => ({
    datesDB: {}
  }),

  computed: {
    dates() {
      return this.$store.state.dates
    }
  },

  async fetch({ store }) {
    await store.dispatch('bindDates')
  },

  methods: {
    getDate() {
      const testDate = this.dates[0].date
      console.log(testDate.toDate())
    },

    addToSmokeCount() {
      // NOTE: Use Firebase action to make update
    }
  }
}
</script>
