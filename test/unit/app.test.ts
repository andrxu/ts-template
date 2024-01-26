import { greet } from '../../src/app';

describe('greet function', () => {
  it('should return the correct greeting', () => {
    const result = greet();
    expect(result).toBe('Hello, TypeScript!');
  });
});