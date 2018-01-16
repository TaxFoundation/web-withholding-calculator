import config from '../config.json';

const precisionRound = (number, precision) => {
  const factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
};

const calcTax = (brackets, income) => {
  let withheldTax = 0;
  if (income > 0) {
    brackets.reduceRight((taxableIncome, bracket) => {
      if (bracket.threshold < taxableIncome) {
        withheldTax += (taxableIncome - bracket.threshold) * bracket.rate;
        return taxableIncome = bracket.threshold;
      } else {
        return taxableIncome;
      }
    }, income);
  }
  return withheldTax;
};

const getWithholdingTax = (payrollPeriod, annualWage, filingStatus, taxpayerAllowances) => {
  const preTCJA = config.policies.filter(p => p.id === 'pre-tcja')[0];
  const TCJA = config.policies.filter(p => p.id === 'tcja')[0];
  const yearlyPayrollPeriods = [
    { type: 'daily', value: 260 },
    { type: 'weekly', value: 52 },
    { type: 'biweekly', value: 26 },
    { type: 'semimonthly', value: 24 },
    { type: 'monthly', value: 12 },
    { type: 'quarterly', value: 4 },
    { type: 'semiannually', value: 2 },
    { type: 'annually', value: 1 }
  ];
  const roundingPayrollPeriods = [
    { type: 'daily', value: 1 },
    { type: 'weekly', value: 0 },
    { type: 'biweekly', value: 0 },
    { type: 'semimonthly', value: 0 },
    { type: 'monthly', value: 0 },
    { type: 'quarterly', value: 0 },
    { type: 'semiannually', value: 0 },
    { type: 'annually', value: 0 }
  ];

  const personal_exemption = preTCJA['personal_exemption'];
  const standard_deduction = preTCJA['standard_deduction'][filingStatus];
  const tcja_standard_deduction = TCJA['standard_deduction'][filingStatus];
  const payrollPeriodValue = yearlyPayrollPeriods.filter(p => p.type === payrollPeriod)[0]['value'];
  const roundingPayrollPeriodValue = roundingPayrollPeriods.filter(p => p.type === payrollPeriod)[0]['value'];

  const payroll_wage = annualWage / payrollPeriodValue;

  const allowances = yearlyPayrollPeriods.map(p => {
    return {type: p.type, allowance: precisionRound(personal_exemption / p.value, 1)};
  });

  const preTCJABrackets = preTCJA.brackets[filingStatus].map(b => {
    let newThreshold = precisionRound(
      (b.threshold + standard_deduction - personal_exemption)
      / payrollPeriodValue,
      roundingPayrollPeriodValue
    );
    return {rate: b.rate, threshold: newThreshold};
  });

  const TCJABrackets = TCJA.brackets[filingStatus].map(b => {
    let newThreshold = precisionRound((b.threshold
      + tcja_standard_deduction
      - (filingStatus === 'single' ? 2 * personal_exemption : 3 * personal_exemption))
      / payrollPeriodValue,
      roundingPayrollPeriodValue
    );
    return {rate: b.rate, threshold: newThreshold};
  });

  const step1 = taxpayerAllowances * allowances.filter(a => a.type === payrollPeriod)[0]['allowance'];
  const step2 = payroll_wage - step1;
  const preTCJAWithheldTax = calcTax(preTCJABrackets, step2);
  const TCJAWithheldTax = calcTax(TCJABrackets, step2);

  return {
    'pre-tcja': precisionRound(preTCJAWithheldTax, 2),
    'tcja': precisionRound(TCJAWithheldTax, 2)
  };
};

export default getWithholdingTax;