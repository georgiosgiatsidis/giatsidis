import React from 'react';

import Layout from 'components/Layout';
import Profile from 'components/Profile';
import About from 'components/About';
import SEO from 'components/SEO';

const IndexPage = () => (
    <Layout fixed>
        <SEO title="Home" />
        <Profile />
        <About />
    </Layout>
);

export default IndexPage;
