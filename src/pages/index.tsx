import * as React from 'react';
import Navbar from '../components/Navbar';
import VslSection from '../components/VslSection';

import { container } from '../styles/pages/index.module.scss';

function IndexPage() {
  return (
    <div className={container}>
      <Navbar />
      <VslSection />
    </div>
  );
}

export default IndexPage;
