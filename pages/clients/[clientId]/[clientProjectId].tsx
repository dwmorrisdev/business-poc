import { Typography } from "@mui/material";
import { NextPage } from "next";
import Layout from "../../../components/layout";
import { useRouter } from "next/router";


const ClientProject: NextPage = () => {
  const router = useRouter();
  const { clientId, clientProjectId } = router.query;
  return (
  <Layout>
    <>
      <Typography variant="h3">This is the project for client: {clientId}</Typography>
      <Typography variant="h5">With the Id of: {clientProjectId}</Typography>
    </>
  </Layout>
)};

export default ClientProject;