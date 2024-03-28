import { Helmet } from 'react-helmet-async';
// sections
import FourView from 'src/sections/four/view';

// ----------------------------------------------------------------------

export default function PageFour() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Four</title>
      </Helmet>

      <FourView />
    </>
  );
}
