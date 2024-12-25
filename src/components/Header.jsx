import { Center, Image } from '@mantine/core';
import classes from './Header.module.css';

function Header() {
  return (
    <Center className={classes.header}>
      <Image
        src="/soad/logo.webp"
        alt="System of a Down Logo"
        className={classes.logo}
      />
    </Center>
  );
}

export default Header;
