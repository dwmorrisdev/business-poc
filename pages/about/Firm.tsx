import { Grid, Typography } from '@mui/material';
import { NextPage } from 'next';
import Layout from '../../components/layout';


const Firm: NextPage = () => {
  return (
    <Layout>
      <>
        <Typography variant="h3" mb={2}>
          Our Firm
        </Typography>
        <Grid container spacing={2}>
          <Grid item sm={6}>
            <Typography variant="h5" mb={1}>
              Some Header
            </Typography>
            <Typography paragraph>
              This section takes up half of the column slots.
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
            <Typography paragraph>
              This section takes up half of the column slots.
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
          <Grid item sm={3}>
            <Typography variant="h5" mb={1}>
              Another Header
            </Typography>
            <Typography paragraph>
              See a column subdivided by three here.
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
          <Grid item sm={3}>
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
          <Grid item sm={12}>
            <Typography variant="h5" mb={1}>
              Even More Header
            </Typography>
            <Typography paragraph>
            See a full width column here.
            Prime number descended from astronomers light years cosmic 
            fugue colonies take root and flourish. The ash of stellar 
            alchemy a mote of dust suspended in a sunbeam Apollonius 
            of Perga permanence of the stars vastness is bearable only 
            through love preserve and cherish that pale blue dot? With 
            pretty stories for which there is little good evidence made 
            in the interiors of collapsing stars Euclid star stuff 
            harvesting star light vanquish the impossible shores of 
            the cosmic ocean.
            </Typography>
          </Grid>
        </Grid>
      </>
    </Layout>
  );
};

export default Firm;