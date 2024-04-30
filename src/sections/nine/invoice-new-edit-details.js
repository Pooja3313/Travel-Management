import sum from 'lodash/sum';
import React, { useCallback, useEffect, useState, useMemo } from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { inputBaseClasses } from '@mui/material/InputBase';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
// utils
import { fCurrency } from 'src/utils/format-number';
// _mock
import { INVOICE_SERVICE_OPTIONS, coverUrl } from 'src/_mock';

// components
import Iconify from 'src/components/iconify';
import { RHFSelect, RHFTextField, RHFUpload } from 'src/components/hook-form';
import { Upload } from 'src/components/upload';

// ----------------------------------------------------------------------




export default function InvoiceNewEditDetails() {
  const { control, setValue, resetField, getValues, watch } = useFormContext();
  const [files, setFiles] = useState([]);
  const values = watch();

  const totalOnRow = values.items.map((item) => item.quantity * item.price);

  const subTotal = sum(totalOnRow);

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });

  const handleAdd = () => {
    append({
      title: '',
      service: '',
      coverUrl: '',
      quantity: 1,
      price: 0,
      total: 0,
    });
  };

  const handleRemove = (index) => {
    remove(index);
  };

  const handleRemoveFile = useCallback(
    (index) => {
      setValue(`items[${index}].coverUrl`, null, { shouldValidate: true });
      // Optionally, update the state to remove the image from the UI
    },
    [setValue]
  );

  const handleDrop = useCallback(
    (acceptedFiles, index) => {
      const file = acceptedFiles[0];

      // Check if a file is present
      if (file) {
        try {
          const newFile = Object.assign(file, {
            preview: URL.createObjectURL(file),
          });

          setValue(`items[${index}].coverUrl`, newFile, { shouldValidate: true });
          // Update UI to display uploaded image preview
        } catch (error) {
          console.error('Error creating object URL:', error);
        }
      }
    },
    [setValue]
  );
  const handleDropMultiFile = useCallback(
    (acceptedFiles) => {
      const selectedFile = acceptedFiles[0]; // Select the first file only
      if (selectedFile) {
        try {
          const newFile = Object.assign(selectedFile, {
            preview: URL.createObjectURL(selectedFile),
          });
          setFiles([newFile]); // Set the state with the single selected file
        } catch (error) {
          console.error('Error creating object URL:', error);
        }
      }
    },
    [] // No dependencies needed for this function
  );
  const handleRemoveFiles = (inputFile) => {
    const filesFiltered = files.filter((fileFiltered) => fileFiltered !== inputFile);
    setFiles(filesFiltered);
  };
  

  
  // const handleRemoveFiles = useCallback(() => {
  //   setValue('coverUrl', null, { shouldValidate: true });
  //   // Optionally, update the state to remove the image from the UI
  // }, [setValue]);
  
  // const handleDrops = useCallback(
  //   (acceptedFiles) => {
  //     const file = acceptedFiles[0];
  
  //     // Check if a file is present
  //     if (file) {
  //       try {
  //         const newFile = Object.assign(file, {
  //           preview: URL.createObjectURL(file),
  //         });
  
  //         setValue('coverUrl', newFile, { shouldValidate: true });
  //         // Update UI to display uploaded image preview
  //       } catch (error) {
  //         console.error('Error creating object URL:', error);
  //       }
  //     }
  //   },
  //   [setValue]
  // );
  
  const handleClearService = useCallback(
    (index) => {
      resetField(`items[${index}].quantity`);
      resetField(`items[${index}].price`);
      resetField(`items[${index}].total`);
    },
    [resetField]
  );

  // const handleSelectService = useCallback(
  //   (index, option) => {
  //     setValue(
  //       `items[${index}].price`,
  //       INVOICE_SERVICE_OPTIONS.find((service) => service.name === option)?.price
  //     );
  //     setValue(
  //       `items[${index}].total`,
  //       values.items.map((item) => item.quantity * item.price)[index]
  //     );
  //   },
  //   [setValue, values.items]
  // );

  const handleChangeQuantity = useCallback(
    (event, index) => {
      setValue(`items[${index}].quantity`, Number(event.target.value));
      setValue(
        `items[${index}].total`,
        values.items.map((item) => item.quantity * item.price)[index]
      );
    },
    [setValue, values.items]
  );

  const handleChangePrice = useCallback(
    (event, index) => {
      setValue(`items[${index}].price`, Number(event.target.value));
      setValue(
        `items[${index}].total`,
        values.items.map((item) => item.quantity * item.price)[index]
      );
    },
    [setValue, values.items]
  );

  const handleSelectService = useCallback(
    (index, option) => {
      const selectedService = INVOICE_SERVICE_OPTIONS.find((service) => service.name === option);
      if (selectedService) {
        // Update the service name only if a valid service is selected
        setValue(`items[${index}].service`, selectedService.name);
      }
      // No changes to price and total
    },
    [setValue]
  );

  const renderTotal = (
    <Stack
      spacing={2}
      alignItems="flex-end"
      sx={{ mt: 3, textAlign: 'right', typography: 'body2' }}
    >
      <Stack direction="row">
        <Box sx={{ color: 'text.secondary' }}>Subtotal</Box>
        <Box sx={{ width: 160, typography: 'subtitle2' }}>&#8377;{fCurrency(subTotal) || '-'}</Box>
      </Stack>
    </Stack>
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ color: 'text.disabled', mb: 3 }}>
        Details:
      </Typography>

      <Stack divider={<Divider flexItem sx={{ borderStyle: 'dashed' }} />} spacing={3}>
        {fields.map((item, index) => (
          <Stack key={item.id} alignItems="flex-end" spacing={1.5}>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ width: 1 }}>
              <RHFTextField
                size="small"
                name={`items[${index}].title`}
                label="Title"
                InputLabelProps={{ shrink: true }}
                sx={{ maxWidth: { md: 350 } }}
              />
              <RHFUpload
                name={`items[${index}].coverUrl`}
                maxSize={3145728}
                // size="small"
                onDrop={(acceptedFiles) => handleDrop(acceptedFiles, index)} // Pass index as an argument
                onDelete={() => handleRemoveFile(index)}
                InputLabelProps={{ shrink: true }}
              />
              <RHFSelect
                name={`items[${index}].service`}
                size="small"
                label="Role"
                InputLabelProps={{ shrink: true }}
                sx={{
                  maxWidth: { md: 160 },
                }}
              >
                <MenuItem
                  value=""
                  onClick={() => handleClearService(index)}
                  sx={{ fontStyle: 'italic', color: 'text.secondary' }}
                >
                  None
                </MenuItem>

                <Divider sx={{ borderStyle: 'dashed' }} />

                {INVOICE_SERVICE_OPTIONS.map((service) => (
                  <MenuItem
                    key={service.id}
                    value={service.name}
                    onClick={() => handleSelectService(index, service.name)}
                  >
                    {service.name}
                  </MenuItem>
                ))}
              </RHFSelect>
              <RHFTextField
                size="small"
                type="number"
                name={`items[${index}].quantity`}
                label="Quantity"
                placeholder="0"
                onChange={(event) => handleChangeQuantity(event, index)}
                InputLabelProps={{ shrink: true }}
                sx={{ maxWidth: { md: 96 } }}
              />

              <RHFTextField
                size="small"
                type="number"
                name={`items[${index}].price`}
                label="Price"
                placeholder="0.00"
                onChange={(event) => handleChangePrice(event, index)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Box sx={{ typography: 'subtitle2', color: 'text.disabled' }}>&#8377;</Box>
                    </InputAdornment>
                  ),
                }}
                sx={{ maxWidth: { md: 96 } }}
              />

              <RHFTextField
                disabled
                size="small"
                type="number"
                name={`items[${index}].total`}
                label="Total"
                placeholder="0.00"
                value={values.items[index].total === 0 ? '' : values.items[index].total.toFixed(2)}
                onChange={(event) => handleChangePrice(event, index)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Box sx={{ typography: 'subtitle2', color: 'text.disabled' }}>&#8377;</Box>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  maxWidth: { md: 104 },
                  [`& .${inputBaseClasses.input}`]: {
                    textAlign: { md: 'right' },
                  },
                }}
              />
            </Stack>

            <Button
              size="small"
              color="error"
              startIcon={<Iconify icon="solar:trash-bin-trash-bold" />}
              onClick={() => handleRemove(index)}
            >
              Remove
            </Button>
          </Stack>
        ))}
      </Stack>

      <Divider sx={{ my: 3, borderStyle: 'dashed' }} />

      <Stack
        spacing={3}
        direction={{ xs: 'column', md: 'row' }}
        alignItems={{ xs: 'flex-end', md: 'center' }}
      >
        <Button
          size="small"
          color="primary"
          startIcon={<Iconify icon="mingcute:add-line" />}
          onClick={handleAdd}
          sx={{ flexShrink: 0 }}
        >
          Add Item
        </Button>
      </Stack>
      <h4>Report</h4>

      {/* <RHFUpload
        name="coverUrl"
        maxSize={3145728}
        // size="small"
        onDrop={(acceptedFiles) => handleDrops(acceptedFiles)} // Pass index as an argument
        onDelete={() => handleRemoveFiles()} // Pass index as an argument
        InputLabelProps={{ shrink: true }}
      /> */}
        <Card>
        <CardHeader
          title="Upload Report"
        />
        <CardContent>
          <Upload
            multiple
            name="UploadFile"
            files={files}
            onDrop={handleDropMultiFile}
            onRemove={handleRemoveFiles}
           
            // onUpload={() => console.info('ON UPLOAD')}
          />
        </CardContent>
      </Card>

      {renderTotal}
    </Box>
  );
}
