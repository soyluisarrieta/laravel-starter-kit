import { describe, it, expect } from 'vite-plus/test';

function add(a: number, b: number): number {
    return a + b;
}

describe('add', () => {
    it('sums two numbers', () => {
        expect(add(2, 3)).toBe(5);
    });
});
