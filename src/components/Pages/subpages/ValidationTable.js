import React from 'react'
import { Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material'
import { TableComponent,TableCellComponentBody, TableCellComponentHead } from '../../../styles/styles'
import { useSelector } from 'react-redux';
import { Failedresult, Successresult } from '../../../styles/styles';
export const ValidationTable = () => {
  const data = useSelector((state)=>state.mailvalidation.validationResult)
  const email = useSelector((state)=>state.mailvalidation.email)
 
  return (
    <TableComponent>
        <h3>Validation Results</h3>
       <TableContainer>
           <Table>
               <TableHead>
                <TableRow>
                    <TableCellComponentHead>Mail Address</TableCellComponentHead>
                    <TableCellComponentHead>Syntax Validation</TableCellComponentHead>
                    <TableCellComponentHead>Dns Record Validation</TableCellComponentHead>
                    <TableCellComponentHead>Deliverable</TableCellComponentHead>
                </TableRow>
               </TableHead>
               <TableBody >
                  <TableRow >
                    <TableCellComponentBody>{email}</TableCellComponentBody>
                    <TableCellComponentBody>{data.email_format_is_valid?<Successresult>valid</Successresult>:<Failedresult>invalid</Failedresult>}</TableCellComponentBody>
                    <TableCellComponentBody>{data.mxRecords==='found'?<Successresult>success</Successresult>:<Failedresult>fail</Failedresult>}</TableCellComponentBody>
                    <TableCellComponentBody>{data.inbox_exists?<Successresult>yes</Successresult>:<Failedresult>no</Failedresult>}</TableCellComponentBody>
                  </TableRow>
               </TableBody>
           </Table>
       </TableContainer>
    </TableComponent>
  )
}
