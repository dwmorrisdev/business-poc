import { Typography } from "@mui/material";
import { NextPage } from "next";
import Layout from "../../components/layout";
import { useRouter } from "next/router";


const Slugger: NextPage = () => {
  const router = useRouter();
  console.log("router.query: ", router.query);
  const slugArray: any = router.query.slugValue ?? [];
  return (
  <Layout>
    <>
      <Typography variant="h3">This is a page to demo how next can capture any values from the url via the [...slug] feature</Typography>
      <Typography variant="h5">You Got: </Typography>
      <ul>
        {slugArray.map((value: string, index: number) => {
          return (
            <li key={index}>{value}</li>
          );
        })}
      </ul>
    </>
  </Layout>
)};

export default Slugger;