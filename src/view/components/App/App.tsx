import React, { Suspense } from 'react';

import Loader from 'src/view/components/Loader';
import Layout from 'src/view/components/Layout';

const App = () => (
  <Suspense fallback={<Loader />}>
    <Layout />
  </Suspense>
);

export default App;
