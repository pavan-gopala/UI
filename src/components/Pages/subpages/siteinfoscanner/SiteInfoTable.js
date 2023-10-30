import React from 'react';
import { Table, TableBody, TableContainer, TableHead, TableRow, TableCell } from '@mui/material';
import { TableComponent, TableCellComponentBody, TableCellComponentHead } from '../../../../styles/styles.js';
import { useSelector } from 'react-redux';

export const SiteInfoTable = () => {
  const data1 = useSelector((state) => state.mailvalidation.siteinfo.ip);
  const data = data1 ? data1.info : null;
  const propertiesToDisplay = [
    { property: 'query', label: 'IP Address' },
    { property: 'city', label: 'City' },
    { property: 'country', label: 'Country' },
    { property: 'countryCode', label: 'Country Code' },
    { property: 'isp', label: 'ISP' },
    { property: 'lat', label: 'Latitude' },
    { property: 'lon', label: 'Longitude' },
    { property: 'org', label: 'Organization' },
    { property: 'region', label: 'Region' },
    { property: 'regionName', label: 'Region Name' },
    { property: 'timezone', label: 'Timezone' },
    { property: 'zip', label: 'ZIP Code' },
  ];

  return (
    <TableComponent>
      <h3>Website/Server Details</h3>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCellComponentHead>Property</TableCellComponentHead>
              <TableCellComponentHead>Value</TableCellComponentHead>
            </TableRow>
          </TableHead>
          <TableBody>
        
            { data1 !== false && propertiesToDisplay.map((property) => (
              <TableRow key={property.property}>
                <TableCellComponentBody>{property.label}</TableCellComponentBody>
                <TableCellComponentBody>{data[property.property]}</TableCellComponentBody>
              </TableRow>
            ))}
            { data1 === false && (
              <TableRow>
                <TableCellComponentBody>Not found</TableCellComponentBody>
                <TableCellComponentBody>Not found</TableCellComponentBody>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </TableComponent>
  );
};
