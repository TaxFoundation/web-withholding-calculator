import React, { Component } from 'react';
import FilingStatusSelector from './components/FilingStatusSelector';
import IncomeInput from './components/IncomeInput';
import PayrollPeriodSelector from './components/PayrollPeriodSelector';
import AllowancesInput from './components/AllowancesInput';
import ResultsTable from './components/ResultsTable';

class App extends Component {
  constructor() {
    super();

    this.state = {
      income: 0,
      filingStatus: 'single',
      payrollPeriod: 'semimonthly',
      allowances: 2
    };

    this.updateIncome = this.updateIncome.bind(this);
    this.updateFilingStatus = this.updateFilingStatus.bind(this);
    this.updatePayrollPeriod = this.updatePayrollPeriod.bind(this);
  }

  updateIncome(income) {
    if (typeof income === 'number' && income >= 0) {
      this.setState({ income });
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
      'annually',
    ];
    if (periods.indexOf(payrollPeriod) >= 0) {
      this.setState({payrollPeriod});
    }
  }

  updateAllowances(allowances) {
    if (typeof allowances === 'number') {
      this.setState({allowances});
    }
  }

  render() {
    return <div className="App" />;
  }
}

export default App;
