import React from 'react'
import { Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'

const TableSkeletonLoader: React.FC = () => {
  const rows = 5
  const columns = 5

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='skeleton table'>
        <TableHead>
          <TableRow>
            {[...Array(columns)].map((_, index) => (
              <TableCell key={index}>
                <Skeleton variant='text' />
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {[...Array(rows)].map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {[...Array(columns)].map((_, colIndex) => (
                <TableCell key={colIndex}>
                  <Skeleton variant='rectangular' height={40} />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableSkeletonLoader
