import { List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { NextPage } from "next";
import Layout from "../../components/layout";
import Link from "next/link";


const Clients: NextPage = () => (
  <Layout>
    <>
      <Typography variant="h3">Clients</Typography>
      <Typography variant="h5">List of Clients</Typography>
      <List>
        <ListItem disablePadding>
          <Link href="/clients/[clientId]" as="/clients/a" passHref>
            <ListItemButton>
              <ListItemText primary="Client A" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href="/clients/[clientId]" as="/clients/b" passHref>
            <ListItemButton>
              <ListItemText primary="Client B" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href="/clients/[clientId]" as="/clients/c" passHref>
            <ListItemButton>
              <ListItemText primary="Client C" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href="/clients/[clientId]" as="/clients/d" passHref>
            <ListItemButton>
              <ListItemText primary="Client D" />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </>
  </Layout>
);

export default Clients;