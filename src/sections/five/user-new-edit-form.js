import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useMemo, useState, useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import {
  _EmpList,
  _transportation,
  _accommodation,
  _foodNeeded,
  _roles,
  _foodOption,
  
} from 'src/_mock';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// routes
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
//
import { useSnackbar } from 'src/components/snackbar';
import FormProvider, {
  RHFSelect,
  RHFTextField,
  RHFRadioGroup,
  RHFAutocomplete,
  RHFUploadAvatar,
} from 'src/components/hook-form';

export default function UserNewEditForm({ currentUser }) {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const NewUserSchema = Yup.object().shape({
    EmpName: Yup.string().required('Name is required'),
    EmpID: Yup.string().required('Emp_ID is required'),
    roles: Yup.string().required('Role is required'),
    department: Yup.string().required('Department is required'),
    projectTitle: Yup.string().required('Project Title is required'),
    from: Yup.string().required('Destination is required'),
    to: Yup.string().required('Destination is required'),
    startDate: Yup.date().required('Start Date is required'),
    endDate: Yup.date().required('End Date is required'),
    purpose: Yup.string().required('Trip Purpose is required'),
    accommodation: Yup.string().required('Accommodation is required'),
    transportation: Yup.string().required('Transportation Name is required'),
    FoodNeededs: Yup.string().required('Need Food Facility is required'),
    foodOption: Yup.array().min(1, 'Choose at least one option'),
     status: Yup.string(),
    isVerified: Yup.boolean(),
  });

  const defaultValues = useMemo(
    () => ({
      EmpName: currentUser?.EmpName || '',
      EmpID: currentUser?.EmpID || '',
      department: currentUser?.department || '',
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
    resolver: yupResolver(NewUserSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const values = watch();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      enqueueSnackbar('Create success!');
      router.push(paths.dashboard.group.root);
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <Grid xs={12} md={12}>
          <Card sx={{ p: 3 }}>
            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
              }}
            >
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
                  label="Accommodations"
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
                  label="Food Needed"
                  spacing={4}
                  options={_foodNeeded}
                />
                {values.FoodNeededs === 'yes' && (
                  <RHFAutocomplete
                    name="foodOption"
                    placeholder="+ FoodOption"
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
              {/* )} */}
            </Box>

            <Stack alignItems="flex-end" sx={{ mt: 3 }}>
              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                Create Trip
                {/* {!currentUser ? 'Create User' : 'Save Changes'} */}
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}

UserNewEditForm.propTypes = {
  currentUser: PropTypes.object,
};
