import PropTypes from 'prop-types';
// @mui
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import { useState, useCallback } from 'react';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// components
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import { ConfirmDialog } from 'src/components/custom-dialog';
//
import {
  _EmpList,
  USER_STATUS_OPTIONS,
  _roles,
  _accommodation,
  _transportation,
  _foodNeeded,
  _foodOption,
} from 'src/_mock';
// import UserQuickEditForm from './user-quick-edit-form';

// ----------------------------------------------------------------------

export default function UserTableRow({ row, selected, onSelectRow, onDeleteRow }) {
  const {
    EmpName,
    EmpID,
    roles,
    department,
    projectTitle,
    from,
    to,
    startDate,
    endDate,
    purpose,
    accommodation,
    transportation,
    FoodNeededs,
    foodOption,
    status,
    avatarUrl,
  } = row;

  const confirm = useBoolean();

  const popover = usePopover();
  const [currentStatus, setCurrentStatus] = useState(status);

  const handleChangeStatus = useCallback((event) => {
    setCurrentStatus(event.target.value);
  }, []);

  return (
    <>
      <TableRow hover selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow} />
        </TableCell>

        <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar alt={EmpName} src={avatarUrl} sx={{ mr: 2 }} />

          <ListItemText
            primary={EmpID}
            // secondary={EmpName}
            primaryTypographyProps={{ typography: 'body2' }}
            secondaryTypographyProps={{
              component: 'span',
              color: 'text.disabled',
            }}
          />
        </TableCell>
        <TableCell sx={{ whiteSpace: 'nowrap' }}>{EmpName}</TableCell>
        <TableCell sx={{ whiteSpace: 'nowrap' }}>{roles}</TableCell>

        <TableCell sx={{ whiteSpace: 'nowrap' }}>{department}</TableCell>

        <TableCell sx={{ whiteSpace: 'nowrap' }}>{projectTitle}</TableCell>

        <TableCell sx={{ whiteSpace: 'nowrap' }}>{from}</TableCell>
        <TableCell sx={{ whiteSpace: 'nowrap' }}>{to}</TableCell>
        <TableCell sx={{ whiteSpace: 'nowrap' }}>{startDate}</TableCell>
        <TableCell sx={{ whiteSpace: 'nowrap' }}>{endDate}</TableCell>
        <TableCell sx={{ whiteSpace: 'nowrap' }}>{purpose}</TableCell>
        <TableCell   sx={{ whiteSpace: 'nowrap' }}>{accommodation}</TableCell>
        <TableCell   sx={{ whiteSpace: 'nowrap' }}>{transportation}</TableCell>
        <TableCell align="center" sx={{ whiteSpace: 'nowrap'}}>{FoodNeededs}</TableCell>
        <TableCell sx={{ whiteSpace: 'nowrap' }}>{foodOption}</TableCell>

        <TableCell >
          <FormControl sx={{ minWidth: 120 }}>
            <Select
              value={currentStatus}
              onChange={handleChangeStatus}
              displayEmpty
              inputProps={{ 'aria-label': 'Select Status' }}
            >
              {USER_STATUS_OPTIONS.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </TableCell>

        <TableCell align="right" sx={{ px: 1, whiteSpace: 'nowrap' }}>
          <IconButton color={popover.open ? 'inherit' : 'default'} onClick={popover.onOpen}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      {/* <UserQuickEditForm currentUser={row} open={quickEdit.value} onClose={quickEdit.onFalse} /> */}

      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="right-top"
        sx={{ width: 140 }}
      >
        <MenuItem
          onClick={() => {
            confirm.onTrue();
            popover.onClose();
          }}
          sx={{ color: 'error.main' }}
        >
          <Iconify icon="solar:trash-bin-trash-bold" />
          Delete
        </MenuItem>

        {/* <MenuItem
          onClick={() => {
            onEditRow();
            popover.onClose();
          }}
        >
          <Iconify icon="solar:pen-bold" />
          Edit
        </MenuItem> */}
      </CustomPopover>

      <ConfirmDialog
        open={confirm.value}
        onClose={confirm.onFalse}
        title="Delete"
        content="Are you sure want to delete?"
        action={
          <Button variant="contained" color="error" onClick={onDeleteRow}>
            Delete
          </Button>
        }
      />
    </>
  );
}

UserTableRow.propTypes = {
  onDeleteRow: PropTypes.func,
  // onEditRow: PropTypes.func,
  onSelectRow: PropTypes.func,
  row: PropTypes.object,
  selected: PropTypes.bool,
};
