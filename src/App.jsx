import { MantineProvider, Container, Text, Button, Center, Title, Stack } from '@mantine/core';
import CountdownTimer from './components/CountdownTimer';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container
        fluid
        style={{
          backgroundImage: 'url("/background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Header />
        <Center style={{ flex: 1, flexDirection: 'column', textAlign: 'center' }}>
          <Stack spacing="xl" align="center">
            <Title order={1} style={{ fontSize: '3rem', fontWeight: 'bold' }}>
              🎸 System of a Down - Brasil
            </Title>
            <Text size="lg" style={{ fontSize: '1.5rem' }}>
              📅 10 de Maio de 2025 - São Paulo
            </Text>
            <CountdownTimer targetDate="2025-05-10T20:00:00" />
          </Stack>
        </Center>
        <Footer />
      </Container>
    </MantineProvider>
  );
}

export default App;
