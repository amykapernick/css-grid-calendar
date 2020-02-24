const eventList = require('../resources/js/events.js')

module.exports = () => {
	const events = []

	eventList.forEach(event => {
		const start = new Date(event.start),
		  end = new Date(event.end),
		  firstOffset = new Date(new Date(event.start).setDate(1)).getDay() + start.getDate()
		
		let	length = end.getDate() - start.getDate() + 1

		events.push({
			title: event.title,
			offset: firstOffset,
			length,
			row: start.getMonth() + 1
		})
	})

	return events
}