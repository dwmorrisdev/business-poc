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
          <Link href="/clients/[clientId]" as="/clients/Bayer" passHref>
            <ListItemButton>
              <ListItemText primary="Bayer" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href="/clients/[clientId]" as="/clients/Centene" passHref>
            <ListItemButton>
              <ListItemText primary="Centene" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href="/clients/[clientId]" as="/clients/Charter" passHref>
            <ListItemButton>
              <ListItemText primary="Charter" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href="/clients/[clientId]" as="/clients/Ocelot" passHref>
            <ListItemButton>
              <ListItemText primary="Ocelot" />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </>
  </Layout>
);

export default Clients;