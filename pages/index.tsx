import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import type { NextPage } from 'next'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import CloudIcon from '@mui/icons-material/Cloud'
import ChatIcon from '@mui/icons-material/Chat'
import SpeedIcon from '@mui/icons-material/Speed';
import GroupsIcon from '@mui/icons-material/Groups';
import Box from '@mui/material/Box'
import { useState } from 'react'
import ModalComponent from '../components/modal/modal'
import FlipToFrontIcon from '@mui/icons-material/FlipToFront';
import { MockModalData } from '../config/mockModalData';

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState(0)
  const handleOpenModal = (value:number) => {
    setModalContent(value);
    setShowModal(true);
  }
  const handleCloseModal = () => {
    setShowModal(false)
  }
  return (
    <Layout>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Grid container>
          <Grid item sm={12}>
            <Typography variant="h2" align="center" mt={2} mb={4}>Business App</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3} className={styles.section}>
          <Grid item sm={4}>
            <Typography variant="h5" align="center" mb={1}>
              Header 1
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
            <Box textAlign='center'>
              <Button 
                variant="contained"
                onClick={() => handleOpenModal(1)}
                startIcon={<FlipToFrontIcon className={styles.icon}/>}
              >
                Header 1
              </Button>
            </Box>
          </Grid>
          <Grid item sm={4}>
            <Typography variant="h5" align="center" mb={1}>  
              Header 2
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
            <Box textAlign="center">
              <Button
                variant="contained"
                startIcon={<FlipToFrontIcon className={styles.icon}/>}
                onClick={() => handleOpenModal(2)}
              >
                Header 2
              </Button>
            </Box>
          </Grid>
          <Grid item sm={4}>
            <Typography variant="h5" align="center" mb={1}>
              Header 3
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
            <Box textAlign='center'>
              <Button 
                variant="contained"
                onClick={ () => handleOpenModal(3)}
                startIcon={<FlipToFrontIcon className={styles.icon}/>}
              >
                Header 3 
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={4} mb={1}>
          <Grid item sm={3}>
            <Typography variant="h5" align="center" mb={1}>
              Our Sharepoint
            </Typography>
            <Typography paragraph align="center">
              Click the button below to access our sharepoint site.
            </Typography>
            <Box textAlign='center'>
              <Button variant="outlined">
                Sharepoint <CloudIcon className={styles.icon}/>
              </Button>
            </Box>
          </Grid>
          <Grid item sm={3}>
            <Typography variant="h5" align="center" mb={1}>
              Agile Development
            </Typography>
            <Typography paragraph textAlign='center'>
              Check out our philopsophy on agile development.
            </Typography>
            <Box textAlign='center'>
              <Button variant="outlined">
                SCRUM <SpeedIcon className={styles.icon}/>
              </Button>
            </Box>
          </Grid>
          <Grid item sm={3}>
            <Typography variant="h5" align="center" mb={1}>
              People First Culture
            </Typography>
            <Typography paragraph textAlign='center'>
              Check out our philosophy on people first culture.
            </Typography>
            <Box textAlign='center'>
              <Button variant="outlined">
                People First <GroupsIcon className={styles.icon}/>
              </Button>
            </Box>
          </Grid>
          <Grid item sm={3}>
          <Typography variant="h5" align="center" mb={1}>
              Give Us Feedback
            </Typography>
            <Typography paragraph align="center">
              Click the button below to send us suggestions.
            </Typography>
            <Box textAlign='center'>
              <Button variant="outlined">
                Suggestions <ChatIcon className={styles.icon}/>
              </Button>
            </Box>
          </Grid>
        </Grid>
        <ModalComponent 
          showModal={showModal}
          handleClose={handleCloseModal}
          headerText={MockModalData[modalContent].title}
          bodyText={MockModalData[modalContent].body}
          icon={MockModalData[modalContent].icon}
        />
      </Box>
    </Layout>
  )
}

export default Home
