import { Helmet } from 'react-helmet-async';

// sections
import OneView from 'src/sections/one/view';

// ----------------------------------------------------------------------

export default function PageOne() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Edit</title>
      </Helmet>

      <OneView />
    </>
  );
}
