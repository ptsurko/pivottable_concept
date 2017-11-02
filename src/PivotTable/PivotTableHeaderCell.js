import React, { Component } from 'react';

class PivotTableHeaderCell extends Component {
  render() {
    return (
      <th>
        {this.props.children}
      </th>
    );
  }
}

export default PivotTableHeaderCell;
