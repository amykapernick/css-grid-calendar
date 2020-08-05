const eventList = require('../resources/data/events.js')

module.exports = () => {
	const events = []

	let allEvents = eventList

	allEvents.forEach(event => {
		const start = new Date(event.start),
		end = event.end ? new Date(event.end) : start
		
		if(start.getMonth() !== end.getMonth()) {
			let dates = [
				[start, null],
				[null, end]
			],
			fullDates = []

			dates[1][0] = new Date(start.setMonth(start.getMonth() + 1)).setDate(1),
			dates[0][1] = new Date(end).setDate(0)

			fullDates = [
				[
					`${new Date(event.start).getFullYear()}-${new Date(event.start).getMonth() + 1}-${new Date(event.start).getDate()}`,
					`${new Date(dates[0][1]).getFullYear()}-${new Date(dates[0][1]).getMonth() + 1}-${new Date(dates[0][1]).getDate()}`
				],
				[
					`${new Date(dates[1][0]).getFullYear()}-${new Date(dates[1][0]).getMonth() + 1}-${new Date(dates[1][0]).getDate()}`,
					`${new Date(dates[1][1]).getFullYear()}-${new Date(dates[1][1]).getMonth() + 1}-${new Date(dates[1][1]).getDate()}`
				]
			]

			event.start = fullDates[0][0]
			event.end = fullDates[0][1]

			allEvents.push({
				title: event.title,
				start: fullDates[1][0],
				end: fullDates[1][1],
				status: event.status
			})
		}
	}) 

	allEvents.forEach(event => {
		const start = new Date(event.start),
		  end = event.end ? new Date(event.end) : start,
		  firstOffset = new Date(new Date(event.start).setDate(1)).getDay() + start.getDate()
		
		let	length = end.getDate() - start.getDate() + 1

		events.push({
			title: event.title,
			status: event.status,
			offset: firstOffset,
			length,
			row: start.getMonth() + 1
		})
	})

	return events
}