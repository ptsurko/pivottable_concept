import React, { Component } from 'react';

class PivotTableRowTemplate extends Component {
  render() {
    const { data, level } = this.props;
    return this.props.children({ data, level });
  }
}

export default PivotTableRowTemplate;
