import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
// utils
import { fDate } from 'src/utils/format-time';
import { fCurrency } from 'src/utils/format-number';
// _mock
import { _invoices, INVOICE_STATUS_OPTIONS } from 'src/_mock';
// components
import Label from 'src/components/label';
import Scrollbar from 'src/components/scrollbar';
//
import Image from 'src/components/image';
import InvoiceToolbar from './invoice-toolbar';


// ----------------------------------------------------------------------

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '& td': {
    textAlign: 'right',
    borderBottom: 'none',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

// ----------------------------------------------------------------------

export default function InvoiceDetails({ invoice }) {
  const [currentStatus, setCurrentStatus] = useState(invoice.status);
 
  const handleChangeStatus = useCallback((event) => {
    setCurrentStatus(event.target.value);
  }, []);


 const renderImages = (coverUrl) => (
    <Stack spacing={0.5} direction="row" sx={{ p: (theme) => theme.spacing(1, 1, 0, 1) }}>
      <Stack spacing={0.5}>
        <Image alt="Cover Image" src={coverUrl} ratio="1/1" sx={{ borderRadius: 1, width: 80 }} />
      </Stack>
    </Stack>
  );
  
  const renderTotal = (
    <>
     
      <StyledTableRow>
        <TableCell colSpan={3} />
        <TableCell sx={{ typography: 'subtitle1' }}>SubTotal</TableCell>
        <TableCell width={140} sx={{ typography: 'subtitle1' }}>
          {fCurrency(invoice.subTotal)}
        </TableCell>
      </StyledTableRow>
   
    </>
  );
  const renderList = (
    <TableContainer sx={{ overflow: 'unset', mt: 5 }}>
      <Scrollbar>
        <Table sx={{ minWidth: 960 }}>
          <TableHead>
            <TableRow>
              <TableCell width={40}>#</TableCell>

              <TableCell sx={{ typography: 'subtitle2' }}>Title</TableCell>
              <TableCell >Upload File</TableCell>
             

              <TableCell align="center">Qty</TableCell>

              <TableCell align="center">Unit price</TableCell>

              <TableCell align="center">Total</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {invoice.items.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>

                <TableCell>
                  <Box sx={{ maxWidth: 560 }}>
                    <Typography variant="subtitle2">{row.title}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{renderImages(row.coverUrl)}</TableCell>
               <TableCell align="center">{row.quantity}</TableCell>

                <TableCell align="center">{fCurrency(row.price)}</TableCell>

                <TableCell align="center">{fCurrency(row.price * row.quantity)}</TableCell>
              </TableRow>
            ))}

            {renderTotal}
          </TableBody>
        </Table>
      </Scrollbar>
    </TableContainer>
  );

  return (
    <>
      <InvoiceToolbar
        invoice={invoice}
        currentStatus={currentStatus || ''}
        onChangeStatus={handleChangeStatus}
        statusOptions={INVOICE_STATUS_OPTIONS}
      />

      <Card sx={{ pt: 5, px: 5 }}>
        <Box
          rowGap={5}
          display="grid"
          alignItems="center"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
          }}
        >
          <Box
            component="img"
            alt="logo"
            src="/logo/logo_single.svg"
            sx={{ width: 48, height: 48 }}
          />

          <Stack spacing={1} alignItems={{ xs: 'flex-start', md: 'flex-end' }}>
            <Label
              variant="soft"
              color={
                (currentStatus === 'paid' && 'success') ||
                (currentStatus === 'pending' && 'warning') ||
                (currentStatus === 'overdue' && 'error') ||
                'default'
              }
            >
              {currentStatus}
            </Label>

            <Typography variant="h6">{invoice.invoiceNumber}</Typography>
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              Invoice From
            </Typography>
            {invoice.invoiceFrom.name}
            <br />
            {invoice.invoiceFrom.fullAddress}
            <br />
            Phone: {invoice.invoiceFrom.phoneNumber}
            <br />
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              Invoice To
            </Typography>
            {invoice.invoiceTo.name}
            <br />
            {invoice.invoiceTo.fullAddress}
            <br />
            Phone: {invoice.invoiceTo.phoneNumber}
            <br />
          </Stack>
          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              Employee ID
            </Typography>
            {(invoice.EmpID)}
          </Stack>
          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              From Destination
            </Typography>
            {(invoice.from)}
          </Stack>
          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              To Destination
            </Typography>
            {(invoice.to)}
          </Stack>
          

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              Start Date
            </Typography>
            {(invoice.startDate)}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              End Date
            </Typography>
            {(invoice.endDate)}
          </Stack>
        </Box>

        {renderList}

        <Divider sx={{ mt: 5, borderStyle: 'dashed' }} />

      </Card>
    </>
  );
}

InvoiceDetails.propTypes = {
  invoice: PropTypes.object,
};
