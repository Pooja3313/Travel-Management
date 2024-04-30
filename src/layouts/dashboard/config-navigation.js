import { useMemo } from 'react';
// routes
import { paths } from 'src/routes/paths';
// components
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
  // OR
  // <Iconify icon="fluent:mail-24-filled" />
  // https://icon-sets.iconify.design/solar/
  // https://www.streamlinehq.com/icons
);

const ICONS = {
  job: icon('ic_job'),
  blog: icon('ic_blog'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  tour: icon('ic_tour'),
  order: icon('ic_order'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  product: icon('ic_product'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const data = useMemo(
    () => [
      // OVERVIEW
      // ----------------------------------------------------------------------
      {
        subheader: 'DashBoard',
        items: [
          { title: 'HOD DashBoard', path: paths.dashboard.root, icon: ICONS.dashboard },
          { title: 'Travel Manager_DashBoard', path: paths.dashboard.two, icon: ICONS.dashboard  },
          
        ],
      },

      // MANAGEMENT
      // ----------------------------------------------------------------------
      {
        subheader: 'Employee',
        items: [
          // { title: 'Emp Register', path: paths.dashboard.three, icon: ICONS.user  },
          // { title: 'Emp Login', path: paths.dashboard.zero, icon: ICONS.user },
          {
            title: 'Travel',
            path: paths.dashboard.group.root,
            icon: ICONS.user,
            children: [
              { title: 'Emp_Dashboard', path: paths.dashboard.group.root, icon: ICONS.dashboard },
              { title: 'Create New Trip', path: paths.dashboard.group.five },
              // { title: 'Reimbursement Form', path: paths.dashboard.group.six },
            ],
          },
          {
            title: 'Reimbursement',
            path: paths.dashboard.users.root,
            icon: ICONS.user,
            children: [
              { title: 'Emp_Dashboard', path: paths.dashboard.users.root, icon: ICONS.dashboard },
              { title: 'Reimbursement Form', path: paths.dashboard.users.demo.six,icon: ICONS.invoice},
              { title: 'Details', path: paths.dashboard.users.demo.eight},
              { title: 'Edit', path: paths.dashboard.users.demo.nine },
            ],
          },
        ],
       
      },
    ],
    []
  );

  return data;
}
