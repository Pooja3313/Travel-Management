import { Helmet } from 'react-helmet-async';
// sections
import EightView from 'src/sections/eight/View';
import { useParams } from 'src/routes/hooks';

// ----------------------------------------------------------------------

export default function PageEight() {
  const params = useParams();

  const { id } = params;
  return (
    <>
      <Helmet>
        <title> Dashboard: Eight</title>
      </Helmet>

      <EightView  id={`${id}`}/>
    </>
  );
}
