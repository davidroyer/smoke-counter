/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import * as firebase from 'firebase/app'
import Vue from 'vue'
import { Config } from '@/config/firebase'

import 'firebase/firestore'
import 'firebase/auth'
// import 'firebase/database'
// import 'firebase/storage'

export const fireApp = firebase.initializeApp(Config)
export const fireDB = fireApp.firestore()
export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
console.log(fireDB)

const smokecountDB = fireDB.collection('apps').doc('smokecount')
const datesDB = smokecountDB.collection('dates')
console.log('TCL: smokecountDB', smokecountDB)
console.log('TCL: datesDB', datesDB)

const dateDocRef = datesDB.doc('Tue Nov 05 2019')

const addToDayCount = async () => {
  const doc = await dateDocRef.get()
  let currentCount = doc.data().count
  await dateDocRef.update({ count: ++currentCount })
}

addToDayCount()

// const fireAuth = fireApp.auth()
// const fireDB = fireApp.database()
// const fireStorage = fireApp.storage()

// export { GoogleProvider, fireApp, fireAuth, fireDB, fireStorage, fireDB }

export default (ctx, inject) => {
  Vue.prototype.$fireApp = fireApp
  Vue.prototype.$fireDB = fireDB
  ctx.fireApp = fireApp
  ctx.fireDB = fireDB
  // inject("fdbClient", fdbClient);
}
