import React, { Component } from 'react';

class PivotTableHeaderTemplate extends Component {
  render() {
    const { level } = this.props;
    return this.props.children({ level });
  }
}

export default PivotTableHeaderTemplate;
