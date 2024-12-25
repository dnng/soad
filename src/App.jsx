import { Container, Title, Stack, Center } from '@mantine/core';
import classes from './App.module.css';
import Header from './components/Header';
import CountdownTimer from './components/CountdownTimer';
import Footer from './components/Footer';

function App() {
  return (
      <Container fluid className={classes.root}>
        <Header />
        <Center className={classes.content}>
          <Stack align="center" spacing="xl">
            <Title
              order={1}
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 700,
              }}
            >
              🎸 System of a Down - Brasil
            </Title>
            <CountdownTimer targetDate="2025-05-10T20:00:00" />
          </Stack>
        </Center>
        <Footer />
      </Container>
  );
}

export default App;
