import getWithholdingTax from '../components/Calculate';
import { assert, expect } from 'chai';
import { describe, it } from 'mocha';

const testCases = [
  { period: 'weekly', income: 24000, status: 'single', allowances: 1, result: 41.36 },
  { period: 'semimonthly', income: 650000, status: 'single', allowances: 2, result: 8671.93 },
  { period: 'biweekly', income: 60000, status: 'married', allowances: 2, result: 210.62 },
  { period: 'monthly', income: 320000, status: 'married', allowances: 4, result: 5993.84 }
];

describe('Withholding Taxes Owed Function', () => {
  it('should never return a negative number', () => {
    testCases.map(n => {
      let tax = getWithholdingTax(n.period, n.income, n.status, n.allowances);
      assert(
        tax['pre-tcja'] >= 0,
        `A negative marginal tax owed was returned for income of ${n.income}`
      );
    });
  });

  it('should return the correct marginal tax owed', () => {
    testCases.map((n) => {
      let tax = getWithholdingTax(n.period, n.income, n.status, n.allowances);
      assert(
        tax['pre-tcja'] === n.result,
        `Income of ${n.income} returns tax of ${tax['pre-tcja']}, expected ${n.result}`
      );
    });
  });
});
