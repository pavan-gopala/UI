import React from 'react'
import { Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material'
import { TableComponent,TableCellComponentBody, TableCellComponentHead } from '../../../../styles/styles.js'
import { useSelector } from 'react-redux';

export const MxTable = () => {
  const  data = useSelector((state)=>state.mailvalidation.mxresult.mxrecords)
  const domain = useSelector((state)=>state.mailvalidation.email.data)
  let datalength = 0
  if(data !== undefined){
    datalength = data.length;
  }
  return (
    <TableComponent>
        <h3>Mx Record{'(s)'}</h3>
        <h5>Domain:{domain}</h5>
       <TableContainer>
           <Table>
               <TableHead>
                <TableRow>
                    
                    <TableCellComponentHead>Target</TableCellComponentHead>
                    <TableCellComponentHead>Priority</TableCellComponentHead>
                   
                </TableRow>
               </TableHead>
               <TableBody >
               {data !== '' && data !== undefined && datalength !== 0 ? (
              data.map((key, index) => (
                <TableRow key={index}>
                  <TableCellComponentBody>{key.exchange}</TableCellComponentBody>
                  <TableCellComponentBody>{key.priority}</TableCellComponentBody>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCellComponentBody>Not found</TableCellComponentBody>
                <TableCellComponentBody>Not found</TableCellComponentBody>
              </TableRow>
            )}
               </TableBody>
           </Table>
       </TableContainer>
    </TableComponent>
  )
}
