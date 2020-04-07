

/**
 * Returns a string representation of the duration in the format of HH:MM:SS or MM:SS
 * @param {number} secs the number of seconds to be formatted
 */
export const stringifyDuration = secs => {
	const days = secs / 86400
	const hours = (days % 1) * 24
	const minutes = (hours % 1) * 60
	const seconds = (minutes % 1) * 60

	const appends = ['day', 'hour', 'minute', 'second']
	const parts = [days, hours, minutes, seconds]
		.map((part, idx) => {
		const p = Math.floor(part)
		if (p > 0)
				return p + ' ' + (p === 1 ? appends[idx] : appends[idx] + 's')
		return p;
		})
		.filter(part => part !== 0)

	return parts.join(', ').replace(/,([^,]*)$/, ' and $1')
}