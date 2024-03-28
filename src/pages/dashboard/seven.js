import { Helmet } from 'react-helmet-async';
// sections
import SevenView from 'src/sections/seven/View';

// ----------------------------------------------------------------------

export default function PageSeven() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Seven</title>
      </Helmet>

      <SevenView />
    </>
  );
}
