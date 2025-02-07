import { Helmet } from 'react-helmet-async';

const SEOComponent = () => (
  <Helmet>
    <title>Vedam Homes</title>
    <meta name="description" content="This is a description of my React website." />
    <meta name="robots" content="index, follow" />
  </Helmet>
);

export default SEOComponent;