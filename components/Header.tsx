import {
  Heading,
  useDisclosure,
  Link,
  HStack,
  Divider,
  useMediaQuery,
} from "@chakra-ui/react";
import Hamburger from "./Hamburger";
import { useRef } from "react";
import tv from "util/themeVariable";
import Drawer from "./Drawer";

const HeaderLink: React.FC<{ href: string }> = ({ href, children }) => {
  const fullpath =
    typeof window !== "undefined" ? window.location.pathname.split("/") : "";
  let path = "";

  if (fullpath) {
    path = "./" + fullpath[fullpath.length - 1];
  }

  const color = href === path ? "secondary" : "blue.300";

  return (
    <Link tabIndex={1} color={color} borderRadius={6} px={2} href={href}>
      {children}
    </Link>
  );
};

const Header = () => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const hamburgerRef = useRef<HTMLDivElement>(null);

  const [isLg] = useMediaQuery("(min-width: 1024px)");

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
        borderBottom={`1px solid ${tv("colors.gray.500")}`}
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

          <Link href="./index.html" borderRadius={6} px={2} tabIndex={1}>
            <Heading onKeyDown={onClose}>vacuumba report</Heading>
          </Link>
        </HStack>

        {isLg && (
          <HStack flexGrow={1} gap={6} justify="center">
            <HeaderLink href="./plan.html">Investigation &amp; Plan</HeaderLink>
            <HeaderLink href="./design.html">Design</HeaderLink>
            <HeaderLink href="./implementation.html">
              Implementation &amp; Testing
            </HeaderLink>
            <HeaderLink href="./evaluation.html">Evaluation</HeaderLink>
            <Divider h="25px" w="1px" bg="gray.500" />
            <HeaderLink href="./connect.html">Connect Four</HeaderLink>
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
