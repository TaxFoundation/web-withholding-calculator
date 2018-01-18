import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Theme from './Theme';
import FilingStatusSelector from './components/FilingStatusSelector';
import IncomeInput from './components/IncomeInput';
import PayrollPeriodSelector from './components/PayrollPeriodSelector';
import AllowancesInput from './components/AllowancesInput';
import ResultsTable from './components/ResultsTable';

const Container = styled.div`
  background-color: #fff;
  border: 1px solid #999;
  border-radius: 4px;
  display: grid;
  grid-gap: 30px;
  grid-template: 1fr 1fr 2fr / repeat(2, 1fr);
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSize};
  line-height: 1;
  max-width: 720px;
  padding: 1rem;

  * {
    box-sizing: border-box;
  }

  @media (max-width: 480px) {
    grid-template: repeat(4, 1fr) 2fr / 100%;
  }
`;

class App extends Component {
  constructor() {
    super();

    this.state = {
      income: 55000,
      filingStatus: 'single',
      payrollPeriod: 'semimonthly',
      allowances: 2
    };

    this.updateIncome = this.updateIncome.bind(this);
    this.updateFilingStatus = this.updateFilingStatus.bind(this);
    this.updatePayrollPeriod = this.updatePayrollPeriod.bind(this);
    this.updateAllowances = this.updateAllowances.bind(this);
  }

  updateIncome(income) {
    let numericIncome = parseFloat(income.replace(/[^\d.]/g, ''), 10);
    if (typeof numericIncome === 'number' && numericIncome >= 0) {
      this.setState({ income: numericIncome });
    }
  }

  updateFilingStatus(filingStatus) {
    const statuses = ['single', 'married'];
    if (statuses.indexOf(filingStatus) >= 0) {
      this.setState({ filingStatus });
    }
  }

  updatePayrollPeriod(payrollPeriod) {
    const periods = [
      'daily',
      'weekly',
      'biweekly',
      'semimonthly',
      'monthly',
      'quarterly',
      'semiannually',
      'annually'
    ];
    if (periods.indexOf(payrollPeriod) >= 0) {
      this.setState({ payrollPeriod });
    }
  }

  updateAllowances(allowances) {
    let numericAllowances = +allowances;
    if (typeof numericAllowances === 'number' && numericAllowances >= 0) {
      this.setState({ allowances: numericAllowances });
    }
  }

  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Container className="App">
          <IncomeInput
            initialValue={this.state.income}
            update={this.updateIncome}
          />
          <FilingStatusSelector
            initialValue={this.state.filingStatus}
            update={this.updateFilingStatus}
          />
          <PayrollPeriodSelector
            initialValue={this.state.payrollPeriod}
            update={this.updatePayrollPeriod}
          />
          <AllowancesInput
            initialValue={this.state.allowances}
            update={this.updateAllowances}
          />
          <ResultsTable taxpayer={this.state} />
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
