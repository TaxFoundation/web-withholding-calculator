import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Theme from './Theme';
import FilingStatusSelector from './components/FilingStatusSelector';
import IncomeInput from './components/IncomeInput';
import PayrollPeriodSelector from './components/PayrollPeriodSelector';
import AllowancesInput from './components/AllowancesInput';
import ResultsTable from './components/ResultsTable';

const Container = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template: repeat(3, 1fr) / repeat(2, 1fr);
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSize};
  max-width: 720px;
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
    let numericIncome = +income;
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
    if (typeof numericAllowances === 'number') {
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
