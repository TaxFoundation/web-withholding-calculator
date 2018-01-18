import React from 'react';
import styled from 'styled-components';
import { format } from 'd3-format';
import getWithholdingTax from './Calculate';

const Container = styled.div`
  grid-column: 1 / 3;
`;

const Table = styled.table`
  width: 100%;

  th, td {
    text-align: center;
  }

  td {
    font-size: 2rem;
  }
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
      <Table>
        <thead>
          <tr>
            <th>Pre-TCJA Pay Period Withholding</th>
            <th>Post-TCJA Pay Period Withholding</th>
            <th>Difference</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dollarFormat(results['pre-tcja'])}</td>
            <td>{dollarFormat(results['tcja'])}</td>
            <td>{dollarFormat(results['pre-tcja'] - results['tcja'])}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default ResultsTable;
