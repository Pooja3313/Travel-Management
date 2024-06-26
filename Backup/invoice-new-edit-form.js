import PropTypes from 'prop-types';
import { useMemo } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import LoadingButton from '@mui/lab/LoadingButton';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
// routes
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
// _mock
import { _addressBooks } from 'src/_mock';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// components
import FormProvider from 'src/components/hook-form';
//
import InvoiceNewEditDetails from './invoice-new-edit-details';
import InvoiceNewEditAddress from './invoice-new-edit-address';
import InvoiceNewEditStatusDate from './invoice-new-edit-status-date';

// ----------------------------------------------------------------------

export default function InvoiceNewEditForm({ currentInvoice }) {
  const router = useRouter();
  const currency = 'INR';
  const loadingSave = useBoolean();

  const loadingSend = useBoolean();

  const NewInvoiceSchema = Yup.object().shape({
    invoiceTo: Yup.mixed().nullable().required('Invoice to is required'),
    // EmpName: Yup.string().required('Name is required'),
    EmpID: Yup.string().required('Emp_ID is required'),
    from: Yup.string().required('Destination is required'),

    to: Yup.string().required('Destination is required'),
    startDate: Yup.date().required('Start Date is required'),
    endDate: Yup.date().required('End Date is required'),
    coverUrl: Yup.string(),
    // createDate: Yup.mixed().nullable().required('Create date is required'),
    // dueDate: Yup.mixed()
    //   .required('Due date is required')
    //   .test(
    //     'date-min',
    //     'Due date must be later than create date',
    //     (value, { parent }) => value.getTime() > parent.createDate.getTime()
    //   ),

    // not required
    
    // taxes: Yup.number(),
    status: Yup.string(),
    // discount: Yup.number(),
    // shipping: Yup.number(),
    invoiceFrom: Yup.mixed(),
    // totalAmount: Yup.number(),
    invoiceNumber: Yup.string(),
  });

  const defaultValues = useMemo(
    () => ({
      invoiceNumber: currentInvoice?.invoiceNumber || 'INV-1990',
      // EmpName: currentInvoice?.EmpName || '',
      EmpID: currentInvoice?.EmpID || '',
      from: currentInvoice?.from || '',
      to: currentInvoice?.to || '',
      startDate:currentInvoice?.startDate || '',
      endDate: currentInvoice?.endDate || '',
      // createDate: currentInvoice?.createDate || new Date(),
      // dueDate: currentInvoice?.dueDate || null,
      // taxes: currentInvoice?.taxes || 0,
      // shipping: currentInvoice?.shipping || 0,
      status: currentInvoice?.status || 'draft',
      // discount: currentInvoice?.discount || 0,
      invoiceFrom: currentInvoice?.invoiceFrom || _addressBooks[0],
      invoiceTo: currentInvoice?.invoiceTo || null,
      items: currentInvoice?.items || [
        {
          title: '',
          service: '',
          coverUrl:'',
          quantity: 1,
          price: 0,
          total: 0,
          currency,
        },
      ],
      // totalAmount: currentInvoice?.totalAmount || 0,
    }),
    [currentInvoice]
  );

  const methods = useForm({
    resolver: yupResolver(NewInvoiceSchema),
    defaultValues,
  });

  const {
    reset,

    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;
console.log('errors:',errors);
  const handleSaveAsDraft = handleSubmit(async (data) => {
    loadingSave.onTrue();

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      loadingSave.onFalse();
      router.push(paths.dashboard.users.root);
      console.info('DATA', JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(error);
      loadingSave.onFalse();
    }
  });

  const handleCreateAndSend = handleSubmit(async (data) => {
    loadingSend.onTrue();

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      loadingSend.onFalse();
      router.push(paths.dashboard.users.root);
      console.info('DATA', JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(error);
      loadingSend.onFalse();
    }
  });

  return (
    <FormProvider methods={methods}>
      <Card>
        <InvoiceNewEditAddress />

        <InvoiceNewEditStatusDate />

        <InvoiceNewEditDetails />
      </Card>

      <Stack justifyContent="flex-end" direction="row" spacing={2} sx={{ mt: 3 }}>
        <LoadingButton
          color="inherit"
          size="large"
          variant="outlined"
          loading={loadingSave.value && isSubmitting}
          onClick={handleSaveAsDraft}
        >
          Save as Draft
        </LoadingButton>

        <LoadingButton
          size="large"
          variant="contained"
          loading={loadingSend.value && isSubmitting}
          onClick={handleCreateAndSend}
        >
          {currentInvoice ? 'Update' : 'Create'} & Send
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}

InvoiceNewEditForm.propTypes = {
  currentInvoice: PropTypes.object,
};
