import { List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { NextPage } from "next";
import Layout from "../../../components/layout";
import Link from "next/link";
import { useRouter } from "next/router";


const ClientProjects: NextPage = () => {
  const router = useRouter();
  const { clientId } = router.query;
  return (
  <Layout>
    <>
      <Typography variant="h3">Client Projects</Typography>
      <Typography variant="h5">Projects for {clientId}</Typography>
      <List>
        <ListItem disablePadding>
          <Link href="/clients/[clientId]/[clientProjectId]" as={`/clients/${clientId}/1`} passHref>
            <ListItemButton>
              <ListItemText primary="Project 1" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href="/clients/[clientId]/[clientProjectId]" as={`/clients/${clientId}/2`} passHref>
            <ListItemButton>
              <ListItemText primary="Project 2" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href="/clients/[clientId]/[clientProjectId]" as={`/clients/${clientId}/3`} passHref>
            <ListItemButton>
              <ListItemText primary="Project 3" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href="/clients/[clientId]/[clientProjectId]" as={`/clients/${clientId}/4`} passHref>
            <ListItemButton>
              <ListItemText primary="Project 4" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href="/clients/[clientId]/[clientProjectId]" as={`/clients/${clientId}/5`} passHref>
            <ListItemButton>
              <ListItemText primary="Project 5" />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </>
  </Layout>
)};

export default ClientProjects;