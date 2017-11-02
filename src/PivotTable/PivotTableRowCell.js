import React, { Component } from 'react';

class PivotTableRowCell extends Component {
  render() {
    return (
      <td>
        {this.props.children}
      </td>
    );
  }
}

export default PivotTableRowCell;
