import * as React from 'react';
import Layout from '../templates/Layout';
import HeroSection from '../components/index_page/HeroSection';
import TechnologiesSection from '../components/index_page/TechnologiesSection';

function IndexPage() {
  return (
    <Layout>
      <HeroSection />
      <TechnologiesSection />
    </Layout>
  );
}

export default IndexPage;
