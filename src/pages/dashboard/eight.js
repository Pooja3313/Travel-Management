import { Helmet } from 'react-helmet-async';
// sections
import EightView from 'src/sections/eight/View';

// ----------------------------------------------------------------------

export default function PageEight() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Eight</title>
      </Helmet>

      <EightView />
    </>
  );
}
