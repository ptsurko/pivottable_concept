import React, { Component } from 'react';

class PivotTableHeader extends Component {
  render() {
    return (
      <tr>
        {this.props.children}
      </tr>
    );
  }
}

export default PivotTableHeader;
