import {
  Heading,
  useDisclosure,
  HStack,
  Link,
  useMediaQuery,
} from '@chakra-ui/react';
import Hamburger from './Hamburger';
import { useRef } from 'react';
import tv from 'util/themeVariable';
import Drawer from './Drawer';
import NextLink from 'next/link';

const HeaderLink: React.FC<{ href: string }> = ({ href, children }) => {
  const path = window.location.pathname;

  const color = href === path ? 'secondary' : 'blue.300';

  return (
    <NextLink href={href}>
      <Link tabIndex={1} color={color} borderRadius={6} px={2}>
        {children}
      </Link>
    </NextLink>
  );
};

const Header = () => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const hamburgerRef = useRef<HTMLDivElement>(null);

  const [isLg] = useMediaQuery('(min-width: 1024px)');

  return (
    <>
      <HStack
        minH="70px"
        display="flex"
        pos="fixed"
        top={0}
        py={3}
        w="full"
        px={6}
        justify="space-between"
        zIndex={1500}
        alignItems="center"
        bg="contrastBackground"
        borderBottom={`1px solid ${tv('colors.gray.500')}`}
      >
        <HStack gap={2}>
          {!isLg && (
            <Hamburger
              onClick={onToggle}
              open={isOpen}
              onToggle={onToggle}
              ref={hamburgerRef}
            />
          )}

          <NextLink href="/">
            <Link borderRadius={6} px={2} tabIndex={1}>
              <Heading onKeyDown={onClose}>CA103 - Hardware Report</Heading>
            </Link>
          </NextLink>
        </HStack>

        {isLg && (
          <HStack flexGrow={1} gap={6} justify="center">
            <HeaderLink href="/">Basics</HeaderLink>
            <HeaderLink href="/types">Types</HeaderLink>
            <HeaderLink href="/connectors">Connectors</HeaderLink>
            <HeaderLink href="/internals">Internals</HeaderLink>
            <HeaderLink href="/firmware">Firmware</HeaderLink>
          </HStack>
        )}
      </HStack>

      {!isLg && (
        <Drawer isOpen={isOpen} hamburgerRef={hamburgerRef} onClose={onClose} />
      )}
    </>
  );
};

export default Header;
