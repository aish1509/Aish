export default function(duration) {
	const date = new Date(1000 * `${duration}`).toISOString();
	return duration >= 3600 ? date.substr(11, 8) : date.substr(14, 5);
}
