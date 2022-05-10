import { Grid, Typography } from '@mui/material';
import { NextPage } from 'next';
import Layout from '../../components/layout';


const Clients: NextPage = () => {
  return (
    <Layout>
      <>
        <Typography variant="h3" mb={2}>
          Our Clients
        </Typography>
        <Grid container spacing={2}>
          <Grid item sm={4}>
            <Typography variant="h5" mb={1}>
              Some Header
            </Typography>
            <Typography paragraph>
              Preserve and cherish that pale blue dot tesseract 
              rich in mystery corpus callosum consciousness of 
              brilliant syntheses. With pretty stories for which
              there is little good evidence venture vanquish the 
              impossible the sky calls to us Tunguska event hundreds 
              of thousands? Hearts of the stars bits of moving fluff 
              extraordinary claims require extraordinary evidence 
              Sea of Tranquility network of wormholes star stuff 
              harvesting star light. The ash of stellar alchemy 
              laws of physics dispassionate extraterrestrial 
              observer laws of physics bits of moving fluff 
              courage of our questions.
            </Typography>
          </Grid>
          <Grid item sm={4}>
            <Typography variant="h5" mb={1}>
              Another Header
            </Typography>
            <Typography paragraph>
              Sea of Tranquility Flatland hearts of the stars a 
              billion trillion a still more glorious dawn awaits 
              from which we spring? The carbon in our apple pies 
              vanquish the impossible concept of the number one 
              dream of the minds eye vastness is bearable only 
              through love great turbulent clouds? Preserve and 
              cherish that pale blue dot descended from astronomers 
              permanence of the stars a mote of dust suspended in 
              a sunbeam hydrogen atoms the sky calls to us.
            </Typography>
          </Grid>
          <Grid item sm={4}>
            <Typography variant="h5" mb={1}>
              Some More Header
            </Typography>
            <Typography paragraph>
              The only home we havve ever known finite but unbounded 
              as a patch of light Sea of Tranquility intelligent 
              beings descended from astronomers. A mote of dust 
              suspended in a sunbeam inconspicuous motes of rock 
              and gas the carbon in our apple pies invent the universe
              are creatures of the cosmos concept of the number one. 
              Great turbulent clouds bits of moving fluff emerged into 
              consciousness gathered by gravity vanquish the impossible 
              the sky calls to us and billions upon billions upon billions 
              upon billions upon billions upon billions upon billions.
            </Typography>
          </Grid>
        </Grid>
      </>
    </Layout>
  );
};

export default Clients;