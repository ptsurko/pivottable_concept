import React, { Component } from 'react';
import PivotTableHeader from './PivotTableHeader';
import PivotTableHeaderTemplate from './PivotTableHeaderTemplate';
import PivotTableRowTemplate from './PivotTableRowTemplate';


class PivotTable extends Component {
  render() {
    const { children, data } = this.props;

    let rowTemplateElement, headerTemplateElement;
    React.Children.forEach(children, child => {
      if (child.type == PivotTableRowTemplate) {
        rowTemplateElement = child;
      } else if (child.type == PivotTableHeaderTemplate) {
        headerTemplateElement = child;
      }
    });

    let rows = [];
    let level = 0
    data.forEach(row => {
      rows.push(React.cloneElement(rowTemplateElement, { data: row, level }));

      if (row.children) {
        rows.push(React.cloneElement(headerTemplateElement, { level: level + 1}));

        row.children.forEach(childRow => {
          rows.push(React.cloneElement(rowTemplateElement, { data: childRow, level: level + 1 }));

          if (row.children) {
            rows.push(React.cloneElement(headerTemplateElement, { level: level + 2}));
    
            row.children.forEach(childRow => {
              rows.push(React.cloneElement(rowTemplateElement, { data: childRow, level: level + 2 }));
    
                
    
    
            });
          }


        });
      }
    })


    return (
      <table className="App">
        <thead>
          {React.cloneElement(headerTemplateElement, { level })}
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

export default PivotTable;
