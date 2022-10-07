import {
  Drawer as CDrawer,
  DrawerContent,
  DrawerOverlay,
  Text,
  Divider,
  Box,
} from '@chakra-ui/react';
import DrawerLink from './DrawerLink';
import { useRef } from 'react';

import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CableIcon from '@mui/icons-material/Cable';
import CodeIcon from '@mui/icons-material/Code';
import HomeIcon from '@mui/icons-material/Home';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  hamburgerRef: React.RefObject<HTMLDivElement>;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, hamburgerRef }) => {
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  return (
    <CDrawer
      trapFocus
      placement="left"
      isOpen={isOpen}
      onClose={onClose}
      initialFocusRef={firstLinkRef}
      finalFocusRef={hamburgerRef}
    >
      <DrawerOverlay />
      <DrawerContent mt="70px" pt={5} bg="contrastBackground">
        <Box
          display="flex"
          alignItems="stretch"
          gap="1rem"
          flexDirection="column"
          px={4}
          h="full"
          pb={4}
        >
          <Text variant="subheading">Pages</Text>
          <DrawerLink href="/" onClose={onClose} icon={<HomeIcon />}>
            Basics
          </DrawerLink>
          <DrawerLink
            href="/types"
            onClose={onClose}
            icon={<FormatListBulletedIcon />}
          >
            Types
          </DrawerLink>
          <DrawerLink href="/connectors" onClose={onClose} icon={<CableIcon />}>
            Connectors
          </DrawerLink>
          <DrawerLink
            href="/internals"
            onClose={onClose}
            icon={<DeveloperBoardIcon />}
          >
            Internals
          </DrawerLink>

          <DrawerLink href="/firmware" onClose={onClose} icon={<CodeIcon />}>
            Firmware
          </DrawerLink>
          <Divider />
        </Box>
      </DrawerContent>
    </CDrawer>
  );
};

export default Drawer;
