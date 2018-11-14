import React, { Component } from 'react';
import styled from 'styled-components';
import DynamicTable from '@atlaskit/dynamic-table';
import { rows } from '../content/sample-data';

// console.log(rows);
const Wrapper = styled.div`
  min-width: 100%;
`;

export default class WorkersList extends Component {

  constructor(props){
    super(props);
    this.state = {
      rows: rows(this.props.workers, this.props.selectLeftIndex)
    }
  }


  render() {
    return (
      <Wrapper>
        <DynamicTable
          rows={this.state.rows}
          rowsPerPage={6}
          defaultPage={1}
          loadingSpinnerSize="large"
          isLoading={false}
          isFixedSize
          defaultSortOrder="DESC"
          onSetPage={() => console.log('onSetPage')}
        />
      </Wrapper>
    );
  }
}