import formatTime from '../index';

describe('formatTime', () => {
	it('should return correctly', () => {
		expect(formatTime(3600)).toBe('01:00:00');
	});
});
