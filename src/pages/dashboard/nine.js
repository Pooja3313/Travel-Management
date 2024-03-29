import { Helmet } from 'react-helmet-async';
import { useParams } from 'src/routes/hooks';
// sections
import NineView from 'src/sections/nine/view';

// ----------------------------------------------------------------------

export default function PageNine() {
  const params = useParams();

  const { id } = params;
  return (
    <>
      <Helmet>
        <title> Dashboard: Eight</title>
      </Helmet>

      <NineView id={`${id}`} />
    </>
  );
}
