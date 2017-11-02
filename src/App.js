import React, { Component } from 'react';
import { PivotTable, PivotTableHeader, PivotTableHeaderTemplate, PivotTableHeaderCell, PivotTableRowTemplate, PivotTableRow, PivotTableRowCell } from './PivotTable';

const DATA = [
  {
    id: 1,
    name: 'Alex',
    age: 40,
    children: [
      {
        id: 5,
        name: 'Jack',
        age: 4,
      },
      {
        id: 6,
        name: 'James',
        age: 7,
        children: [
          {
            id: 7,
            name: 'Batman',
            age: 40,
          },
          {
            id: 8,
            name: 'Deadpool',
            age: 35,
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Rob',
    age: 22,
  },
  {
    id: 3,
    name: 'Max',
    age: 52,
  },
  {
    id: 4,
    name: 'Ben',
    age: 25,
  }
]


class App extends Component {
  render() {
    return (
      <div className="App">
        App
        <PivotTable data={DATA}>
          <PivotTableHeaderTemplate>
            {
              ({ level }) => (
                <PivotTableHeader>
                  <PivotTableHeaderCell>Level: { level }</PivotTableHeaderCell>
                  <PivotTableHeaderCell>Id</PivotTableHeaderCell>
                  <PivotTableHeaderCell>Name</PivotTableHeaderCell>
                  <PivotTableHeaderCell>Age</PivotTableHeaderCell>
                </PivotTableHeader>
              )
            }
          </PivotTableHeaderTemplate>
          <PivotTableRowTemplate>
            {
              ({ data, level }) => (
                <PivotTableRow>
                  <PivotTableRowCell>
                    {level}
                  </PivotTableRowCell>
                  <PivotTableRowCell>
                    {data.id}
                  </PivotTableRowCell>
                  <PivotTableRowCell>
                    {data.name}
                  </PivotTableRowCell>
                  <PivotTableRowCell>
                    {data.age}
                  </PivotTableRowCell>
                </PivotTableRow>
              )
            }
          </PivotTableRowTemplate>
        </PivotTable>
      </div>
    );
  }
}

export default App;
