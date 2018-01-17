import React from 'react';
import styled from 'styled-components';
import getWithholdingTax from './Calculate';

const ResultsTable = props => {
  const results = getWithholdingTax(
    props.taxpayer.payrollPeriod,
    props.taxpayer.income,
    props.taxpayer.filingStatus,
    props.taxpayer.allowances
  );

  return (
    <div>
      <p>{results['pre-tcja']}</p>
      <p>{results['tcja']}</p>
    </div>
  );
};

export default ResultsTable;
