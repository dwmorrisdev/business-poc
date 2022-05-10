import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Typography } from '@mui/material';
import Layout from '../../components/layout';


const AnotherDynamicPage: NextPage = () => {
  const router = useRouter();
  const pageId = router.query.pageId;
  return (
    <Layout>
      <>
        <Typography variant="h3">This is some other page.</Typography>
        <Typography variant="h5">pageId: {pageId}</Typography>
      </>
    </Layout>
  );
};

export default AnotherDynamicPage;