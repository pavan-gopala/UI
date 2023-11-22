import React from 'react'
import { Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material'
import { TableComponent,TableCellComponentBody, TableCellComponentHead, Failedresult } from '../../../../styles/styles.js'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Successresult } from '../../../../styles/styles.js';

export const PortTable = () => {
  const [open, setOpen] = useState({});
  const  data = useSelector((state)=>state.mailvalidation?.validationResult?.portcheck?state.mailvalidation.validationResult.portcheck : '')
  const domain = useSelector((state)=>state.mailvalidation?.email)
 console.log(data.available)
  return (
    <TableComponent>
        <h5>Domain:<span style={{fontSize:'medium', color:'green'}}>{domain.values.domain}</span></h5>
       <TableContainer>
           <Table>
               <TableHead>
                <TableRow>
                    <TableCellComponentHead>Port</TableCellComponentHead>
                    <TableCellComponentHead>Status</TableCellComponentHead>
                </TableRow>
               </TableHead>
               <TableBody >
              <TableRow>
                  <TableCellComponentBody>{domain.values.port}</TableCellComponentBody>
                  <TableCellComponentBody>{data.available?<Successresult>Available</Successresult>:<Failedresult>Not available</Failedresult>}</TableCellComponentBody>
            </TableRow>
    
               </TableBody>
           </Table>
       </TableContainer>
    </TableComponent>
  )
}
