import fourOhFour from '../public/obiwan.jpeg';
import Image from 'next/image';
import { Typography } from '@mui/material';
import Layout from '../components/layout';

export default function Custom404() {
  return (
    <Layout>
      <>
        <Typography variant="h3" align="center">404</Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image src={fourOhFour} alt="this is not the page you are looking for" />
        </div>
        <Typography variant="h5" align="center">
          This is not the page you are looking for
        </Typography>
      </>
    </Layout>
  );
}