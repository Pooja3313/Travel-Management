import { Helmet } from 'react-helmet-async';
import { useParams } from 'src/routes/hooks';
// sections
import SixView from 'src/sections/six/view';

// ----------------------------------------------------------------------

export default function PageSix() {
  const params = useParams();

  const { id } = params;
  return (
    <>
      <Helmet>
        <title> Dashboard: Six</title>
      </Helmet>

      <SixView  id={`${id}`}/>
    </>
  );
}
