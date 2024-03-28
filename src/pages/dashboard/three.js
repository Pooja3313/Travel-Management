import { Helmet } from 'react-helmet-async';
import ThreeView from 'src/sections/three/view';


// ----------------------------------------------------------------------

export default function PageThree() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Create a new user</title>
      </Helmet>

      <ThreeView />
    </>
  );
}
