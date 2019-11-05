/* eslint-disable no-console */
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import Vue from 'vue'
import { Config } from '@/config/firebase'

export const fireApp = firebase.initializeApp(Config)
export const fireDB = fireApp.firestore()

const smokecountRef = fireDB.collection('apps').doc('smokecount')
const datesCollection = smokecountRef.collection('dates')
// eslint-disable-next-line no-unused-vars
const fakeDate = new Date('Nov 3 2019')
const currentDate = new Date()

const dateDocRef = datesCollection.doc(currentDate.toDateString())

const addToDayCount = async () => {
  const doc = await dateDocRef.get()
  const dateId = doc.id
  let currentCount = doc.exists ? doc.data().count : 0

  await dateDocRef.set({
    count: ++currentCount,
    date: currentDate,
    dateString: dateId
    // dateString: currentDate.toDateString()
  })
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
