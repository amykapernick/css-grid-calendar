module.exports = () => {
	const start = new Date('1 Jan 2022'),
		end = new Date('1 Jan 2023'),
		days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'],
		months =  ['January','February','March','April','May','June','July', 'August','September','October','November','December']

	let current = start,
		yearDates = [],
		offset = 0

	while(current < end) {
		const month = current.getMonth() + 1,
		date = current.getDate(),
		day = current.getDay(),
		details = {
			month,
			date,
			day: days[day],
			offset: offset + date
		}

		if(date == 1) {
			offset = day
			details.offset = offset + date
			details.monthName = months[current.getMonth()]
		}

		yearDates.push(details)

		current.setDate(date + 1)
	}


	return yearDates
}