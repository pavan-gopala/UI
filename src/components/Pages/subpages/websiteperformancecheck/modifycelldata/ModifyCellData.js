import React from 'react'
import { Table } from '@devexpress/dx-react-grid-material-ui';
import { useState } from 'react';
import '../../../../../styles/performancebar.css';


const rowstyles = {
    row:{
        backgroundColor:'rgb(234, 81, 65,0.5)',
        border:'1px solid green'
    }
}

export function TableRowCustom(props) {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <Table.Row
        {...props}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className='TableRowDev'
        style={{...rowstyles.row,  backgroundColor: isHovered ? 'white':'', }}
      />
    );
  }

  export const TableCellComponent = (props) => {
    return (
      <Table.Cell
        {...props}
        style={{ backgroundColor: 'lightblue', color: 'black' }}
      />
    );
  };

  export const TableHeaderCellComponent = (props) => {
    return (
      <Table.HeaderCell
        {...props}
        style={{ backgroundColor: 'darkblue', color: 'white' }}
      />
    );
  };
