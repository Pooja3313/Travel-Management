import { Helmet } from 'react-helmet-async';
// sections
import ZeroView  from 'src/sections/zero/view';

// ----------------------------------------------------------------------

export default function ZeroPage() {
  return (
    <>
      <Helmet>
        <title> Jwt: Login</title>
      </Helmet>

      <ZeroView />
    </>
  );
}
