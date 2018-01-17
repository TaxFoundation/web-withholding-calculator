import React from 'react';
import styled from 'styled-components';
import { format } from 'd3-format';
import getWithholdingTax from './Calculate';

const Container = styled.div`
  grid-column: 1 / 3;
`;

const dollarFormat = format('$,');

const ResultsTable = props => {
  const results = getWithholdingTax(
    props.taxpayer.payrollPeriod,
    props.taxpayer.income,
    props.taxpayer.filingStatus,
    props.taxpayer.allowances
  );

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Pre-TCJA Pay Period Withholding</th>
            <th>Post-TCJA Pay Period Withholding</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dollarFormat(results['pre-tcja'])}</td>
            <td>{dollarFormat(results['tcja'])}</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default ResultsTable;
