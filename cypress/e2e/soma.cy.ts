import { soma } from '../../soma';

describe('soma function tests', () => {
  it('should return 5 when summing 2 + 3', () => {
    expect(soma(2, 3)).to.equal(5);
  });

  it('should return 0 when summing 0 + 0', () => {
    expect(soma(0, 0)).to.equal(0);
  });

  it('should return 0 when summing -1 + 1', () => {
    expect(soma(-1, 1)).to.equal(0);
  });
});