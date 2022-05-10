import { Typography, Button, Grid } from "@mui/material";
import { NextPage } from "next";
import Layout from "../../components/layout";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from '../../styles/Anotherpage.module.css';

const AnotherPage: NextPage = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/another-page/[pageId]', '/another-page/345');
  };
  const handleNestedClick = () => {
    router.push({
      pathname: '/another-page/[pageId]/[nestedPageId]/[nestedPageId2]',
      query: {
        pageId: 'firstNestedValue',
        nestedPageId: 'secondNestedValue',
        nestedPageId2: 'thirdNestedValue'
      }
    });
  };
  return (
    <Layout>
      <>
        <Typography variant="h3">This is another page.</Typography>
        <Typography variant="h5">note the URL</Typography>
        <Typography variant="h5">
          Go ahead and append a value to the end of this url or click one of the links or buttons below.
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <ul>
              <li className={styles.link}>
                <Link href="/another-page/[pageId]" as="/another-page/123">
                  <a>Click me to go to 123</a>
                </Link>
              </li>
              <li className={styles.link}>
                <Link href="/another-page/[pageId]" as="/another-page/abc">
                  <a>Click me to go to abc</a>
                </Link>
              </li>
              <li className={styles.link}>
                <Link href={{
                  pathname: "/another-page/[pageId]",
                  query: {
                    pageId: "developer"
                  }
                }}>
                  <a>Click me to go to developer</a>
                </Link>
              </li>
              <li className={styles.link}>
                <Link href="/another-page/[pageId]" as="/another-page/qa">
                  <a>Click me to go to qa</a>
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6}>
            <ul>
              <li className={`${styles.link} ${styles.bm}`}>
                <Button variant="outlined" onClick={handleClick}>
                  Click me to go to 345
                </Button>
              </li>
              <li className={`${styles.link} ${styles.bm}`}>
                <Button variant="outlined" onClick={handleNestedClick}>
                  Click me to go to nested dynamic link
                </Button>
              </li>
            </ul>
          </Grid>
        </Grid>
      </>
    </Layout>
  );
}

export default AnotherPage;