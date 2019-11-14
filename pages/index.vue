<template>
  <v-row justify="center">
    <v-col cols="12">
      <div class="text-center">
        <h2 class="display-2 font-weight-medium">Add To Count</h2>
        <v-btn class="mx-2" fab dark color="indigo" @click="addToDayCount">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </div>
    </v-col>

    <v-col sm="4">
      <ul>
        <li v-for="(item, index) in dates" :key="index">
          <h3 v-text="item.dateString"></h3>
          <span v-text="item.count"></span>
          <v-btn
            class="mx-2"
            dark
            fab
            x-small
            color="indigo"
            @click="addToSpecificDay(item)"
          >
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
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
import { fireDB } from '@/plugins/firebase'

const datesCollection = fireDB
  .collection('apps')
  .doc('smokecount')
  .collection('dates')

export default {
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

    async addToSpecificDay(day) {
      const { id } = day
      let { count } = day
      await datesCollection.doc(id).update({ count: ++count })
    },

    async addToDayCount() {
      const currentDate = new Date()
      const dateDocRef = datesCollection.doc(currentDate.toDateString())
      const doc = await dateDocRef.get()
      const dateId = doc.id

      let currentCount = doc.exists ? doc.data().count : 0

      await dateDocRef.set({
        count: ++currentCount,
        date: currentDate,
        dateString: dateId
      })
    }
  }
}
</script>
