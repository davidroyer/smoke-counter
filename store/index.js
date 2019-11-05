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
  })
}
