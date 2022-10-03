import {
  Drawer as CDrawer,
  DrawerContent,
  DrawerOverlay,
  Text,
  Divider,
  Box,
} from "@chakra-ui/react";
import DrawerLink from "./DrawerLink";
import { useRef } from "react";

import BrushIcon from "@mui/icons-material/Brush";
import CodeIcon from "@mui/icons-material/Code";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import GridOnIcon from "@mui/icons-material/GridOn";
import MenuBookIcon from "@mui/icons-material/MenuBook";

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
          <Text variant="subheading">Stages</Text>
          <DrawerLink
            href="./plan.html"
            onClose={onClose}
            icon={<MenuBookIcon />}
          >
            Investigation &amp; Plan
          </DrawerLink>
          <DrawerLink
            href="./design.html"
            onClose={onClose}
            icon={<BrushIcon />}
          >
            Design
          </DrawerLink>
          <DrawerLink
            href="./implementation.html"
            onClose={onClose}
            icon={<CodeIcon />}
          >
            Implementation &amp; Test...
          </DrawerLink>
          <DrawerLink
            href="./evaluation.html"
            onClose={onClose}
            icon={<FindInPageIcon />}
          >
            Evaluation
          </DrawerLink>
          <Divider />
          <Text variant="subheading">Bonus</Text>
          <DrawerLink
            href="./connect.html"
            onClose={onClose}
            icon={<GridOnIcon />}
          >
            Connect Four
          </DrawerLink>
        </Box>
      </DrawerContent>
    </CDrawer>
  );
};

export default Drawer;
