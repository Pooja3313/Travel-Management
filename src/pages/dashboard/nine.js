import { Helmet } from 'react-helmet-async';
// sections
import NineView from 'src/sections/nine/view';

// ----------------------------------------------------------------------

export default function PageNine() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Eight</title>
      </Helmet>

      <NineView />
    </>
  );
}
