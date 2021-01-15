import Sample from './sample';

describe('Test sample class', () => {
  it('sayHello should say Hello', () => {
    expect(Sample.sayHello())
      .toBe('Hello');
  });
});
