import config from '../config.json';

const precisionRound = (number, precision) => {
  const factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
};

const calcTax = (brackets, income) => {
  let withheldTax = 0;
  if (income > 0) {
    brackets.sort((a, b) => a.threshold - b.threshold).reduceRight((taxableIncome, bracket) => {
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

  const personal_exemption = preTCJA['personal_exemption'];
  const standard_deduction = preTCJA['standard_deduction'][filingStatus];
  const tcja_standard_deduction = TCJA['standard_deduction'][filingStatus];
  const payrollPeriodValue = config.yearlyPayrollPeriods.filter(p => p.type === payrollPeriod)[0];

  const payroll_wage = annualWage / payrollPeriodValue.value;

  const preTCJABrackets = preTCJA.brackets[filingStatus].map(b => {
    let newThreshold = precisionRound(
      (b.threshold + standard_deduction - personal_exemption)
      / payrollPeriodValue.value,
      payrollPeriodValue.round
    );
    return {rate: b.rate, threshold: newThreshold};
  });

  const TCJABrackets = TCJA.brackets[filingStatus].map(b => {
    let newThreshold = precisionRound(
      (b.threshold + tcja_standard_deduction - (
        filingStatus === 'single' ? 2 * personal_exemption : 3 * personal_exemption
      ))
      / payrollPeriodValue.value,
      payrollPeriodValue.round
    );
    return {rate: b.rate, threshold: newThreshold};
  });

  const step1 = taxpayerAllowances * precisionRound(personal_exemption / payrollPeriodValue.value, 1);
  const step2 = payroll_wage - step1;
  const preTCJAWithheldTax = calcTax(preTCJABrackets, step2);
  const TCJAWithheldTax = calcTax(TCJABrackets, step2);

  return {
    'pre-tcja': precisionRound(preTCJAWithheldTax, 2),
    'tcja': precisionRound(TCJAWithheldTax, 2)
  };
};

export default getWithholdingTax;