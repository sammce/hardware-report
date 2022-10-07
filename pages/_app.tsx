import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import {
  ChakraProvider,
  Table,
  Thead,
  Tbody,
  Text,
  Td,
  Tr,
  Badge,
  Th,
} from '@chakra-ui/react';
import { theme } from '../theme';
import { MDXProvider } from '@mdx-js/react';
import HeadingWithWordCount from 'components/HeadingWithWordCount';
import tv from '../util/themeVariable';
import NavProvider, { useNavLink } from 'context/activeNavLink';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const HeadingFactory = (type: 'h2' | 'h3'): React.FC => {
  return function Heading({ children }) {
    const [_, setActiveLink] = useNavLink();
    const { ref, inView } = useInView({ rootMargin: '-70px 0px -300px 0px' });

    let inner = children === 'Footnotes' ? 'Bibliography' : children;

    useEffect(() => {
      if (inView) {
        setActiveLink(inner as string);
      }
    }, [inView]);

    return (
      <Text
        as={type}
        ref={ref}
        id={typeof inner === 'string' ? inner : undefined}
        borderBottom={
          type === 'h2' ? `1px solid ${tv('colors.gray.700')}` : undefined
        }
        mb={type === 'h2' ? 0 : -4}
        mt={type === 'h2' ? 8 : 6}
        scrollMarginTop="80px"
      >
        {inner}
        <Text ml={4} as="a" color="primary" href={'#' + inner}>
          #
        </Text>
      </Text>
    );
  };
};

const Superscript: React.FC = ({ children }) => (
  <Badge ml={1} fontSize={12}>
    {children}
  </Badge>
);

const components = {
  table: Table,
  thead: Thead,
  tbody: Tbody,
  th: Th,
  td: Td,
  tr: Tr,
  h1: HeadingWithWordCount,
  h2: HeadingFactory('h2'),
  h3: HeadingFactory('h3'),
  sup: Superscript,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MDXProvider components={components}>
        <NavProvider>
          <Component {...pageProps} />
        </NavProvider>
      </MDXProvider>
    </ChakraProvider>
  );
}

export default MyApp;
