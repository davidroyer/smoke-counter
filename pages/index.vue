<template>
  <v-row justify="center">
    <v-col cols="12">
      <div class="text-center">
        <h2 class="display-2 font-weight-medium">UPDATE</h2>
        <h2 class="display-2 font-weight-medium">Add To Count</h2>
        <v-btn class="mx-2" fab dark color="indigo" @click="addToSmokeCount">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </div>
    </v-col>

    <v-col sm="4">
      <ul>
        <li v-for="(item, index) in dates" :key="index">
          <h3 v-text="item.dateString"></h3>
          <span v-text="item.count"></span>
        </li>
      </ul>
    </v-col>

    <v-col cols="12">
      <hr class="mb-6" />
      <pre>{{ dates }}</pre>
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
