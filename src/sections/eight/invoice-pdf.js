import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { Page, View, Text, Image as ImagePdf, Document, Font, StyleSheet } from '@react-pdf/renderer';
// 
import Stack from '@mui/material/Stack';
import { fDate } from 'src/utils/format-time';
import { fCurrency } from 'src/utils/format-number';
import { _invoices } from 'src/_mock';
import Image from 'src/components/image';

// ----------------------------------------------------------------------

Font.register({
  family: 'Roboto',
  fonts: [{ src: '/fonts/Roboto-Regular.ttf' }, { src: '/fonts/Roboto-Bold.ttf' }],
});

const useStyles = () =>
  useMemo(
    () =>
      StyleSheet.create({
        col4: { width: '25%' },
        col8: { width: '75%' },
        col6: { width: '50%' },
        mb4: { marginBottom: 4 },
        mb8: { marginBottom: 8 },
        mb40: { marginBottom: 40 },
        h3: { fontSize: 16, fontWeight: 700 },
        h4: { fontSize: 13, fontWeight: 700 },
        body1: { fontSize: 10 },
        body2: { fontSize: 9 },
        subtitle1: { fontSize: 10, fontWeight: 700 },
        subtitle2: { fontSize: 9, fontWeight: 700 },
        alignRight: { textAlign: 'right' },
        page: {
          fontSize: 9,
          lineHeight: 1.6,
          fontFamily: 'Roboto',
          backgroundColor: '#FFFFFF',
          textTransform: 'capitalize',
          padding: '40px 24px 120px 24px',
        },
        footer: {
          left: 0,
          right: 0,
          bottom: 0,
          padding: 24,
          margin: 'auto',
          borderTopWidth: 1,
          borderStyle: 'solid',
          position: 'absolute',
          borderColor: '#DFE3E8',
        },
        gridContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
        table: {
          display: 'flex',
          width: 'auto',
        },
        tableRow: {
          padding: '8px 0',
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderStyle: 'solid',
          borderColor: '#DFE3E8',
        },
        noBorder: {
          paddingTop: 8,
          paddingBottom: 0,
          borderBottomWidth: 0,
        },
        tableCell_1: {
          width: '5%',
        },
        tableCell_2: {
          width: '50%',
          paddingRight: 16,
        },
        tableCell_3: {
          width: '15%',
        },
      }),
    []
  );
  const renderImages = (coverUrl) => (
    <Stack spacing={0.5} direction="row" sx={{ p: (theme) => theme.spacing(1, 1, 0, 1) }}>
      <Stack spacing={0.5}>
        <Image alt="Cover Image" src={coverUrl} ratio="1/1" sx={{ borderRadius: 1, width: 80 }} />
      </Stack>
    </Stack>
  );
// ----------------------------------------------------------------------

export default function InvoicePDF({ invoice, currentStatus }) {
  const {
    items,
    EmpID,
    from,
    to,
    startDate,
    endDate,
    invoiceTo,
    invoiceFrom,
    invoiceNumber,
    subTotal,
  } = invoice;

  const styles = useStyles();

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={[styles.gridContainer, styles.mb40]}>
          <ImagePdf source="/logo/logo_single.png" style={{ width: 48, height: 48 }} />

          <View style={{ alignItems: 'flex-end', flexDirection: 'column' }}>
            <Text style={styles.h3}>{currentStatus}</Text>
            <Text> {invoiceNumber} </Text>
          </View>
        </View>

        <View style={[styles.gridContainer, styles.mb40]}>
          <View style={styles.col6}>
            <Text style={[styles.subtitle2, styles.mb4]}>Invoice from</Text>
            <Text style={styles.body2}>{invoiceFrom.name}</Text>
            <Text style={styles.body2}>{invoiceFrom.fullAddress}</Text>
            <Text style={styles.body2}>{invoiceFrom.phoneNumber}</Text>
          </View>

          <View style={styles.col6}>
            <Text style={[styles.subtitle2, styles.mb4]}>Invoice to</Text>
            <Text style={styles.body2}>{invoiceTo.name}</Text>
            <Text style={styles.body2}>{invoiceTo.fullAddress}</Text>
            <Text style={styles.body2}>{invoiceTo.phoneNumber}</Text>
          </View>
        </View>

        <View style={[styles.gridContainer, styles.mb40]}>
          <View style={styles.col6}>
            <Text style={[styles.subtitle2, styles.mb4]}>Employee ID</Text>
            <Text style={styles.body2}>{EmpID}</Text>
          </View>
          <View style={styles.col6}>
            <Text style={[styles.subtitle2, styles.mb4]}>From Destination</Text>
            <Text style={styles.body2}>{from}</Text>
          </View>
          <View style={styles.col6}>
            <Text style={[styles.subtitle2, styles.mb4]}>To Destination</Text>
            <Text style={styles.body2}>{to}</Text>
          </View>
          <View style={styles.col6}>
            <Text style={[styles.subtitle2, styles.mb4]}>Start Date</Text>
            <Text style={styles.body2}>{startDate}</Text>
          </View>
          <View style={styles.col6}>
            <Text style={[styles.subtitle2, styles.mb4]}>End Date</Text>
            <Text style={styles.body2}>{endDate}</Text>
          </View>
        </View>

        <Text style={[styles.subtitle1, styles.mb8]}>Invoice Details</Text>

        <View style={styles.table}>
          <View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell_1}>
                <Text style={styles.subtitle2}>#</Text>
              </View>

              <View style={styles.tableCell_2}>
                <Text style={styles.subtitle2}>Title</Text>
              </View>
              <View style={styles.tableCell_3}>
                <Text style={styles.subtitle2}>Upload File</Text>
              </View>

              <View  style={[styles.tableCell_3, styles.alignRight]} >
                <Text style={styles.subtitle2}>Qty</Text>
              </View>

              <View style={[styles.tableCell_3, styles.alignRight]}>
                <Text style={styles.subtitle2}>Unit price</Text>
              </View>

              <View style={[styles.tableCell_3, styles.alignRight]}>
                <Text style={styles.subtitle2}>Total</Text>
              </View>
            </View>
          </View>

          <View>
            {items.map((item, index) => (
              <View style={styles.tableRow} key={item.id}>
                <View style={styles.tableCell_1}>
                  <Text>{index + 1}</Text>
                </View>

                <View style={styles.tableCell_2}>
                  <Text style={styles.subtitle2}>{item.title}</Text>
                </View>
                <View style={styles.tableCell_3}>
                  <Text style={styles.subtitle2}>{renderImages(item.coverUrl)}</Text>
                </View>

                <View  style={[styles.tableCell_3, styles.alignRight]}>
                  <Text style={styles.subtitle2}>{item.quantity}</Text>
                </View>

                <View style={[styles.tableCell_3, styles.alignRight]}>
                  <Text style={styles.subtitle2}>{item.price}</Text>
                </View>

                <View style={[styles.tableCell_3, styles.alignRight]}>
                  <Text>{fCurrency(item.price * item.quantity)}</Text>
                </View>
              </View>
            ))}

            {/* <View style={[styles.tableRow, styles.noBorder]}>
              <View style={styles.tableCell_1} />
              <View style={styles.tableCell_2} />
              <View style={styles.tableCell_3} />
              <View style={styles.tableCell_3}>
                <Text>Subtotal</Text>
              </View>
              <View style={[styles.tableCell_3, styles.alignRight]}>
                <Text>{fCurrency(subTotal)}</Text>
              </View>
              
            </View> */}
            <View style={[styles.tableRow, styles.noBorder]}>
              <View style={styles.tableCell_1} />
              <View style={styles.tableCell_2} />
              <View style={styles.tableCell_3} />
              <View style={styles.tableCell_3}>
                <Text style={styles.h4}>SubTotal</Text>
              </View>
              <View style={[styles.tableCell_3, styles.alignRight]}>
                <Text style={styles.h4}>{fCurrency(subTotal)}</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

InvoicePDF.propTypes = {
  currentStatus: PropTypes.string,
  invoice: PropTypes.object,
};
