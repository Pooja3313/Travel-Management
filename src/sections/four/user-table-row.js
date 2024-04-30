import PropTypes from 'prop-types';
// @mui
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// components
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import { ConfirmDialog } from 'src/components/custom-dialog';
//
import { _EmpList, _role,  _accommodation,_transportation, _foodNeeded, _foodOption } from 'src/_mock';
import UserQuickEditForm from './user-quick-edit-form';

// ----------------------------------------------------------------------

export default function UserTableRow({ row, selected, onSelectRow, onDeleteRow, onSixRow }) {
  const {
    EmpName,
    EmpID,
    role,
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

  const quickEdit = useBoolean();

  const popover = usePopover();

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
        <TableCell sx={{ whiteSpace: 'nowrap' }}>{role}</TableCell>

        <TableCell sx={{ whiteSpace: 'nowrap' }}>{department}</TableCell>
        {/* <TableCell sx={{ whiteSpace: 'nowrap' }}>{Payment}</TableCell> */}

        <TableCell sx={{ whiteSpace: 'nowrap' }}>{projectTitle}</TableCell>
      
        <TableCell sx={{ whiteSpace: 'nowrap' }}>{from}</TableCell>
        <TableCell sx={{ whiteSpace: 'nowrap' }}>{to}</TableCell>
        <TableCell sx={{ whiteSpace: 'nowrap' }}>{startDate}</TableCell>
        <TableCell sx={{ whiteSpace: 'nowrap' }}>{endDate}</TableCell>
        <TableCell sx={{ whiteSpace: 'nowrap' }}>{purpose}</TableCell>
        <TableCell sx={{ whiteSpace: 'nowrap' }}>{accommodation}</TableCell>
        <TableCell sx={{ whiteSpace: 'nowrap' }}>{transportation}</TableCell>
        <TableCell sx={{ whiteSpace: 'nowrap' }}>{FoodNeededs}</TableCell>
        <TableCell sx={{ whiteSpace: 'nowrap' }}>{foodOption}</TableCell>

        <TableCell>
          <Label
            variant="soft"
            color={
              (status === 'approve' && 'success') ||
              (status === 'pending' && 'warning') ||
              (status === 'reject' && 'error') ||
              'default'
            }
          >
            {status}
          </Label>
        </TableCell>

        <TableCell align="right" sx={{ px: 1, whiteSpace: 'nowrap' }}>
          <Tooltip title="Quick Edit" placement="top" arrow>
            <IconButton color={quickEdit.value ? 'inherit' : 'default'} onClick={quickEdit.onTrue}>
              <Iconify icon="solar:pen-bold" />
            </IconButton>
          </Tooltip>

          <IconButton color={popover.open ? 'inherit' : 'default'} onClick={popover.onOpen}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <UserQuickEditForm currentUser={row} open={quickEdit.value} onClose={quickEdit.onFalse} />

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

        <MenuItem
          onClick={() => {
            onSixRow();
            popover.onClose();
          }}
        >
          <Iconify icon="solar:pen-bold" />
        Reimbursement Form
        </MenuItem>
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
  onSixRow: PropTypes.func,
  onSelectRow: PropTypes.func,
  row: PropTypes.object,
  selected: PropTypes.bool,
};
