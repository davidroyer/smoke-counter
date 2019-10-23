let datesDB = {}

function addToSmokeCount() {
	const now = new Date()
	const dateString = now.toDateString()
	if (!datesDB[dateString]) datesDB[dateString] = 1
	else datesDB[dateString]++
	localStorage.setItem('datesDB', JSON.stringify(datesDB))
}

function getLocalJsonData() {
	return JSON.parse(localStorage.getItem('datesDB'))
}

function addYesterday() {
	const today = new Date()
	let yesterday = new Date(today)
	
	yesterday.setDate(yesterday.getDate() - 1)
	da