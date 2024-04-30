// @mui
import Container from '@mui/material/Container';
// routes
import { paths } from 'src/routes/paths';
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import UserNewEditForm from './user-new-edit-form';

// ----------------------------------------------------------------------

export default function ZeroView() {
  const settings = useSettingsContext();
  

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      

      <UserNewEditForm />
    </Container>
  );
}
