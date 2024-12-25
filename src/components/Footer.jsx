import { Center, Text } from '@mantine/core';
import classes from './Footer.module.css';

function Footer() {
  return (
    <Center className={classes.footer}>
      <Text size="sm">© 2025 System of a Down - Brasil. Turminha do barulho.</Text>
    </Center>
  );
}

export default Footer;
