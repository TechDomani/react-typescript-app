import calculateWinner from './CalculateWinner';

test("test winner calculated correctly", () => {
    expect(calculateWinner(['O', 'O', 'O', 'X', null, null, null, null, null])).toBe(true)
})