import React from 'react';

import Layout from 'components/Layout';
import Profile from 'components/Profile';
import SEO from 'components/SEO';

const IndexPage = () => (
    <Layout fixed>
        <SEO title="Home" />
        <Profile />
    </Layout>
);

export default IndexPage;
