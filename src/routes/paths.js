// utils
// import { paramCase } from 'src/utils/change-case';
import { _id, _postTitles } from 'src/_mock/assets';

// ----------------------------------------------------------------------

const MOCK_ID = _id[1];

// const MOCK_TITLE = _postTitles[2];

// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------

export const paths = {
  minimalUI: 'https://mui.com/store/items/minimal-dashboard/',
  // AUTH
  auth: {
    jwt: {
      login: `${ROOTS.AUTH}/jwt/login`,
      register: `${ROOTS.AUTH}/jwt/register`,
    },
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    one: `${ROOTS.DASHBOARD}/one`,
    two: `${ROOTS.DASHBOARD}/two`,
    three: `${ROOTS.DASHBOARD}/three`,

    

    group: {
      root: `${ROOTS.DASHBOARD}/group`,
      five: `${ROOTS.DASHBOARD}/group/five`,
      // six: `${ROOTS.DASHBOARD}/group/six`,
      // six: (id) => `${ROOTS.DASHBOARD}/group/${id}/six`,
      // demo: {
      //   six: `${ROOTS.DASHBOARD}/group/${MOCK_ID}/six`,
    },
    users: {
     
      root: `${ROOTS.DASHBOARD}/users`,
      six: `${ROOTS.DASHBOARD}/users/six`,
      // eight: `${ROOTS.DASHBOARD}/users/eight`,
      eight: (id) => `${ROOTS.DASHBOARD}/users/${id}`,
      nine: (id) => `${ROOTS.DASHBOARD}/users/${id}/nine`,
      demo: {
        eight: `${ROOTS.DASHBOARD}/users/${MOCK_ID}`,
        nine: `${ROOTS.DASHBOARD}/users/${MOCK_ID}/nine`,
      },
    }
      
  },
};
