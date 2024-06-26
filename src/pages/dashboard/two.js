import { Helmet } from 'react-helmet-async';
import TwoView from 'src/sections/two/view';

// ----------------------------------------------------------------------

export default function PageTwo() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Two</title>
      </Helmet>

      <TwoView />
    </>
  );
}
