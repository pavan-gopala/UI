import React from 'react'
import { Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material'
import { TableComponent,TableCellComponentBody, TableCellComponentHead } from '../../../../styles/styles.js'
import { useSelector } from 'react-redux';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { grey } from '@mui/material/colors';

export const MxTable = () => {
  const [open, setOpen] = useState({});
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
                    <TableCellComponentHead>TTL</TableCellComponentHead>
                    <TableCellComponentHead>IP Address</TableCellComponentHead>
                   
                </TableRow>
               </TableHead>
               <TableBody >
               {data !== '' && data !== undefined && datalength !== 0 ? (
  data.map((record, index) => (
    <React.Fragment key={index}>
      <TableRow>
        <TableCellComponentBody>{record.exchange}</TableCellComponentBody>
        <TableCellComponentBody>{record.priority}</TableCellComponentBody>
        <TableCellComponentBody>{record.ttl}</TableCellComponentBody>
        <TableCellComponentBody>
          {record.ipAddresses[0]}
          {record.ipAddresses.length > 1 && (
            <IconButton
              onClick={() => setOpen(prev => ({ ...prev, [index]: !prev[index] }))}
              size="small"
              sx={{color:grey}}
            >
              <ExpandMoreIcon />
            </IconButton>
          )}

          <Collapse in={open[index]} timeout="auto" unmountOnExit>
          <h3>Linked with these record</h3>
             
              {record.ipAddresses.slice(1).map((ip, i) => (
                <>
                    <TableCellComponentBody key={i}>{ip}</TableCellComponentBody>
                  </>
                ))}
          
          </Collapse>
        </TableCellComponentBody>
      </TableRow>
    </React.Fragment>
  ))
): (
              <TableRow>
                <TableCellComponentBody>Not found</TableCellComponentBody>
                <TableCellComponentBody>Not found</TableCellComponentBody>
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
