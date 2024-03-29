import React from 'react';
import styled from 'styled-components';
import DollarFormat from './DollarFormat';
import getWithholdingTax from './Calculate';

const Container = styled.div`
  grid-column: 1 / 3;

  @media (max-width: 480px) {
    grid-column: span 1;
  }
`;

const Table = styled.table`
  border-top: 1px solid #999;
  padding-top: 10px;
  table-layout: fixed;
  width: 100%;

  th, td {
    text-align: center;
  }

  th {
    line-height: 1.4;
    padding: 10px 0;
    vertical-align: bottom;
  }

  td {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    th {
      font-size: 0.6rem;
    }

    td {
      font-size: 0.8rem;
    }
  }
`;

const ResultsTable = props => {
  const results = getWithholdingTax(
    props.taxpayer.payrollPeriod,
    props.taxpayer.income,
    props.taxpayer.filingStatus,
    props.taxpayer.allowances
  );

  const delta = results['pre-tcja'] - results['tcja'];

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Pre-TCJA Pay Period Withholding</th>
            <th>Post-TCJA Pay Period Withholding</th>
            <th>Difference to Take-Home Pay</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{DollarFormat(results['pre-tcja'])}</td>
            <td>{DollarFormat(results['tcja'])}</td>
            <td style={{color: (delta >= 0 ? 'green' : 'red')}}>
              {(delta >= 0 ? '+' : '') + DollarFormat(delta)}
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default ResultsTable;
