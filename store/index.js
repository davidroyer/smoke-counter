/* eslint-disable no-console */
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { fireDB } from '@/plugins/firebase'

const datesCollection = fireDB
  .collection('apps')
  .doc('smokecount')
  .collection('dates')

export const state = () => ({
  dates: []
})

export const mutations = {
  ...vuexfireMutations
}

export const actions = {
  bindDates: firestoreAction((context) => {
    console.log('TCL: context', context)
    return context.bindFirestoreRef('dates', datesCollection.orderBy('date'))
  }),

  async addToDayCountAction() {
    console.log('TCL: addToDayCountAction -> addToDayCountAction')

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
    console.log('Added!')
  },

  addToPastDate: firestoreAction((context, date) => {
    console.log('TCL: date', date)
    console.log('INSIDE FS ACTION')
  })

  // addToSpecificDay({ state }, date) {
  //   console.log('FROM addToSpecificDay IN VUEX', date)

  //   // const dateDocRef = datesCollection.doc(date.id)
  //   // const doc = await dateDocRef.get()
  //   // console.log('DOC DATA', doc.data)
  //   // console.log('DOC ID', doc.id)

  //   // const dateId = doc.id
  //   // console.log('TCL: addToSpecificDay -> dateId', dateId)

  //   // await dateDocRef.update({
  //   //   count: ++date.count
  //   // })

  // }
}
