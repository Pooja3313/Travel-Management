import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import MenuItem from '@mui/material/MenuItem';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import Chip from '@mui/material/Chip';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// _mock
import {
  _EmpList,
  _transportation,
  _accommodation,
  _foodNeeded,
  _foodOption,
  // _pay,
  USER_STATUS_OPTIONS,
  _roles,
} from 'src/_mock';

// components

import { useSnackbar } from 'src/components/snackbar';
import FormProvider, {
  RHFSelect,
  RHFTextField,
  RHFRadioGroup,
  RHFAutocomplete,
} from 'src/components/hook-form';
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

// ----------------------------------------------------------------------

export default function UserQuickEditForm({ currentUser, open, onClose }) {
  // const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const NewEmployeeSchema = Yup.object().shape({
    EmpName: Yup.string().required('Name is required'),
    EmpID: Yup.string().required('Emp_ID is required'),
    roles: Yup.string().required('Role is required'),
    department: Yup.string().required('Department is required'),
    Payment: Yup.string().required('Payment is required'),
    projectTitle: Yup.string().required('Project Title is required'),
    from: Yup.string().required('Destination is required'),
    to: Yup.string().required('Destination is required'),
    startDate: Yup.date().required('Start Date is required'),
    endDate: Yup.date().required('End Date is required'),
    purpose: Yup.string().required('Trip Purpose is required'),
    accommodation: Yup.string().required('Accommodation is required'),
    transportation: Yup.string().required('Transportation Name is required'),
    FoodNeededs: Yup.string().required('Need Food Facility is required'),
    foodOption: Yup.array().min(1,'Choose at least one option'),
    
    status: Yup.string(),
    isVerified: Yup.boolean(),
  });

  const defaultValues = useMemo(
    () => ({
      EmpName: currentUser?.EmpName || '',
      EmpID: currentUser?.EmpID || '',
      department: currentUser?.department || '',
      Payment: currentUser?.Payment || '',
      projectTitle: currentUser?.projectTitle || '',
      from: currentUser?.from || '',
      to: currentUser?.to || '',
      startDate: currentUser?.startDate || '',
      endDate: currentUser?.endDate || '',
      purpose: currentUser?.purpose || '',
      accommodation: currentUser?.accommodation,
      transportation: currentUser?.transportation || '',
      roles: currentUser?.roles || '',
      status: currentUser?.status || '',
      FoodNeededs: currentUser?.FoodNeededs || '',
      foodOption: currentUser?.foodOption || [],
      isVerified: currentUser?.isVerified || true,
    }),
    [currentUser]
  );

  const methods = useForm({
    resolver: yupResolver(NewEmployeeSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const values = watch();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      onClose();
      enqueueSnackbar('Update success!');
      // router.push(paths.dashboard.group.root);
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Dialog
      fullWidth
      maxWidth={false}
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { maxWidth: 720 },
      }}
    >
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <DialogTitle>Quick Update</DialogTitle>

        <DialogContent>
          <Alert variant="outlined" severity="info" sx={{ mb: 3 }}>
            Account is waiting for confirmation
          </Alert>

          <Box
            rowGap={3}
            columnGap={2}
            display="grid"
            gridTemplateColumns={{
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
            }}
          >
            <RHFSelect name="status" label="Status">
              {USER_STATUS_OPTIONS.map((status) => (
                <MenuItem key={status.value} value={status.value}>
                  {status.label}
                </MenuItem>
              ))}
            </RHFSelect>

            <Box sx={{ display: { xs: 'none', sm: 'block' } }} />

            <RHFTextField name="EmpName" label="Full Name" />
            <RHFTextField name="EmpID" label="Employee ID" />
            <RHFTextField name="department" label="Department" />
            <RHFAutocomplete
                name="roles"
                label="Role"
                autoHighlight
                options={_roles.map((option) => option)}
                getOptionLabel={(option) => option}
                renderOption={(props, option) => (
                  <li {...props} key={option}>
                    {option}
                  </li>
                )}
              />

              <>
                <RHFTextField name="from" label="From Destination" />
                <RHFTextField name="to" label="To Destination" />
                <RHFTextField name="startDate" label="Start Date" />
                <RHFTextField name="endDate" label="End Date" />
                <RHFTextField name="projectTitle" label="Project Title" />
                <RHFTextField name="purpose" label="purpose" />

                <RHFAutocomplete
                  name="accommodation"
                  label="Accommodation"
                  autoHighlight
                  options={_accommodation.map((option) => option)}
                  getOptionLabel={(option) => option}
                  renderOption={(props, option) => (
                    <li {...props} key={option}>
                      {option}
                    </li>
                  )}
                />

                <RHFAutocomplete
                  name="transportation"
                  label="Transportation"
                  autoHighlight
                  options={_transportation.map((option) => option)}
                  getOptionLabel={(option) => option}
                  renderOption={(props, option) => (
                    <li {...props} key={option}>
                      {option}
                    </li>
                  )}
                />
                
                <RHFRadioGroup
                  row
                  name="FoodNeededs"
                  label="foodNeeded"
                  spacing={4}
                  options={_foodNeeded}
                />

                {values.FoodNeededs === 'yes' && (
                  <RHFAutocomplete
                  name="foodOption"
                  placeholder="+ FoodOptions"
                  multiple
                  disableCloseOnSelect
                  options={_foodOption.map((option) => option)}
                  getOptionLabel={(option) => option}
                  renderOption={(props, option) => (
                    <li {...props} key={option}>
                      {option}
                    </li>
                  )}
                  renderTags={(selected, getTagProps) =>
                    selected.map((option, index) => (
                      <Chip
                        {...getTagProps({ index })}
                        key={option}
                        label={option}
                        size="small"
                        color="info"
                        variant="soft"
                      />
                    ))
                  }
                />
                )}
              </>
            {/* // )} */}
          </Box>
        </DialogContent>

        <DialogActions>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>

          <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
            Update
          </LoadingButton>
        </DialogActions>
      </FormProvider>
    </Dialog>
  );
}

UserQuickEditForm.propTypes = {
  currentUser: PropTypes.object,
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
