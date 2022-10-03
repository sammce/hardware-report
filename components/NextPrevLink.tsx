import { HStack, VStack, Text, Link } from "@chakra-ui/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface Item {
  href: string;
  label: string;
}

interface NextPrevLinkProps {
  next?: Item;
  previous?: Item;
}

const NextPrevLink: React.FC<NextPrevLinkProps> = ({ previous, next }) => {
  let justify = "space-between";
  if (previous && !next) {
    justify = "flex-start";
  } else if (!previous && next) {
    justify = "flex-end";
  }

  return (
    <HStack
      flexDirection={{ base: "column", md: "row" }}
      justify={{ base: "center", md: justify }}
      gap={4}
      mb={8}
      align="center"
    >
      {previous && (
        <Link
          href={`./${previous.href}.html`}
          style={{ textDecoration: "none" }}
          borderRadius={8}
        >
          <VStack
            borderRadius={8}
            py={4}
            px={12}
            bg="contrastBackground"
            _hover={{ bg: "#35354c" }}
            transition="background-color .15s linear"
            cursor="pointer"
            align="flex-end"
          >
            <HStack align="center" justify="space-between" color="white">
              <ArrowBackIcon sx={{ mr: 3 }} />
              <Text fontWeight="semibold" fontSize="xl">
                Previous
              </Text>
            </HStack>
            <Text color="blue.400" textAlign="right">
              {previous.label}
            </Text>
          </VStack>
        </Link>
      )}

      {next && (
        <Link
          href={`./${next.href}.html`}
          style={{ textDecoration: "none" }}
          borderRadius={8}
        >
          <VStack
            borderRadius={8}
            py={4}
            px={12}
            bg="contrastBackground"
            _hover={{ bg: "#35354c" }}
            transition="background-color .15s linear"
            cursor="pointer"
            align="flex-start"
          >
            <HStack align="center" justify="space-between" color="white">
              <Text
                fontWeight="semibold"
                fontSize="xl"
                style={{ margin: 0, marginRight: 24 }}
              >
                Next
              </Text>
              <ArrowForwardIcon />
            </HStack>
            <Text color="blue.400">{next.label}</Text>
          </VStack>
        </Link>
      )}
    </HStack>
  );
};

export default NextPrevLink;
