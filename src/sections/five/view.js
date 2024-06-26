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

export default function FiveView() {
  const settings = useSettingsContext();
  

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Create a new Trip"
        links={[
          {
            name: 'Emp_Dashboard',
            href: paths.dashboard.group.root,
          },
          
          { name: 'New Trip' },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <UserNewEditForm />
    </Container>
  );
}
