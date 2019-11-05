/* eslint-disable no-console */
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import Vue from 'vue'
import { Config } from '@/config/firebase'

export const fireApp = firebase.initializeApp(Config)
export const fireDB = fireApp.firestore()

const smokecountRef = fireDB.collection('apps').doc('smokecount')
const datesCollection = smokecountRef.collection('dates')

// NOTE: ADDS MOCKDATA
// const fakeDay = new Date('Nov 4 2019')
// const dateDocRef = datesCollection.doc(fakeDay.toDateString())

const dateDocRef = datesCollection.doc(new Date().toDateString())

const addToDayCount = async () => {
  const doc = await dateDocRef.get()
  let currentCount = doc.exists ? doc.data().count : 0
  await dateDocRef.set({ count: ++currentCount, date: new Date() })
  //   await dateDocRef.set({ count: ++currentCount, date: fakeDay }) // Note: Adds MOCKDATA
}

addToDayCount().then(() => {
  console.log('Added!')
})

export default (ctx, inject) => {
  Vue.prototype.$fireApp = fireApp
  Vue.prototype.$fireDB = fireDB

  ctx.fireApp = fireApp
  ctx.fireDB = fireDB
}

// dataArray.sort((a,b)=> b-a)
