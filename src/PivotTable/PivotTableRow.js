import React, { Component } from 'react';

class PivotTableRow extends Component {
  render() {
    return (
      <tr>
        {this.props.children}
      </tr>
    );
  }
}

export default PivotTableRow;
