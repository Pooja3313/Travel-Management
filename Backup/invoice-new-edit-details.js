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

// utils
import { fCurrency } from 'src/utils/format-number';
// _mock
import { INVOICE_SERVICE_OPTIONS, currencyOptions } from 'src/_mock';

// components
import Iconify from 'src/components/iconify';
import { RHFSelect, RHFTextField, RHFUpload } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function InvoiceNewEditDetails() {
  const [selectedCurrency, setSelectedCurrency] = useState('INR');
  const { control, setValue, watch, resetField } = useFormContext();
  const values = watch();

  const convertToINR = (price, currency) => {
    const conversionRates = { USD: 0.012, GBP: 0.0095 };
    if (currency === 'INR') return price;
    if (currency === 'USD') return price / conversionRates.USD;
    if (currency === 'GBP') return price / conversionRates.GBP;
    return 0; // Default case if currency is not recognized
  };

  const subTotal = useMemo(() => {
    const updatedTotalOnRow = values.items.map((item) => {
      const convertedPrice = convertToINR(item.price, selectedCurrency);
      return item.quantity * convertedPrice;
    });
    return sum(updatedTotalOnRow);
  }, [selectedCurrency, values.items]);

  const currency = 'INR';
  // const totalOnRow = values.items.map((item) => item.quantity * item.price);

  // const subTotal = sum(totalOnRow);

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
      currency,
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

  // const handleChangeQuantity = useCallback(
  //   (event, index) => {
  //     setValue(`items[${index}].quantity`, Number(event.target.value));
  //     setValue(
  //       `items[${index}].total`,
  //       values.items.map((item) => item.quantity * item.price)[index]
  //     );
  //   },
  //   [setValue, values.items]
  // );

  // const handleChangePrice = useCallback(
  //   (event, index) => {
  //     setValue(`items[${index}].price`, Number(event.target.value));
  //     setValue(
  //       `items[${index}].total`,
  //       values.items.map((item) => item.quantity * item.price)[index]
  //     );
  //   },
  //   [setValue, values.items]
  // );

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

  const handleChangeQuantity = useCallback(
    (event, index) => {
      const newQuantity = Number(event.target.value);
      setValue(`items[${index}].quantity`, newQuantity);

      // Calculate the new total based on the updated quantity and price
      const convertedPrice = convertToINR(
        values.items[index].price,
        values.items[index].currency || selectedCurrency
      );
      setValue(`items[${index}].total`, newQuantity * convertedPrice);
    },
    [setValue, values.items, selectedCurrency]
  );
  const handleChangePrice = useCallback(
    (event, index) => {
      const newPrice = Number(event.target.value);
      setValue(`items[${index}].price`, newPrice);

      // Convert the price to INR based on the selected currency
      const convertedPrice = convertToINR(
        newPrice,
        values.items[index].currency || selectedCurrency
      );
      setValue(`items[${index}].total`, values.items[index].quantity * convertedPrice);
    },
    [setValue, values.items, selectedCurrency]
  );
  // const handleChangeCurrency = (event, index) => {
  //   const newCurrency = event.target.value;
  //   setValue(`items[${index}].currency`, newCurrency); // Update the currency value
  
  //   const currentPrice = values.items[index].price; // Get the current price
  //   const selectedCurrencyRate = getCurrencyRate(newCurrency); // Get the conversion rate for the selected currency
  //   const newTotal = currentPrice * selectedCurrencyRate; // Calculate the new total based on the converted price
  //   setValue(`items[${index}].total`, newTotal); // Update the total value
  // };

  const handleChangeCurrency = (event, index) => {
    const newCurrency = event.target.value;
    setValue(`items[${index}].currency`, newCurrency); // Update the currency value
  
    const conversionRates = { USD: 0.012, GBP: 0.0095 }; // Define conversion rates directly
  
    // Get the current total based on the existing currency
    const currentTotal = parseFloat(values.items[index].total); // Parse the total as a float
    // Parse the total as a float
  
    // Get the conversion rate for the selected currency
    const selectedCurrencyRate = conversionRates[newCurrency] || 1;
  
    // Calculate the new total based on the selected currency
    let newTotal = 0;
    if (newCurrency !== 'INR') {
      newTotal = currentTotal / selectedCurrencyRate; // Convert total to selected currency
    }
  
    setValue(`items[${index}].total`, newTotal); // Update the total value
  };
  
  

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
              {/* <RHFSelect
                name={`items[${index}].currency`}
                label="Currency"
                size="small"
                value={values.items[index].currency || selectedCurrency}
                onChange={(event) => setValue(`items[${index}].currency`, event.target.value)}
                sx={{
                  maxWidth: { md: 160 },
                }}
              >
                {currencyOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </RHFSelect> */}
              <RHFSelect
                name={`items[${index}].currency`}
                label="Currency"
                size="small"
                value={values.items[index].currency || selectedCurrency}
                onChange={(event) => handleChangeCurrency(event, index)} // Call handleChangeCurrency on change
                sx={{
                  maxWidth: { md: 160 },
                }}
              >
                {currencyOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </RHFSelect>

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

      {renderTotal}
    </Box>
  );
}
