import { VStack, Text } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

const HeaderWithWordCount: React.FC = ({ children }) => {
  const [wordCount, setWordCount] = useState(0);
  const [path, setPath] = useState<string | null>(null);
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPath(window.location.pathname);
    const wrapper = stackRef.current!.parentElement;

    if (!wrapper) return;

    let wc = 0;

    for (const child of wrapper.children) {
      if (child.tagName === 'P') {
        // Removes parentheses containing references from word count
        const withoutRefs = child.innerHTML.replaceAll(/\([^\)]+>\)/g, '');

        wc += withoutRefs.split(' ').length;
      } else if (child.tagName === 'UL') {
        for (const _child of child.children) {
          if (_child.tagName === 'LI') {
            wc += _child.innerHTML.split(' ').length;
          }
        }
      }
    }

    setWordCount(wc);
  }, []);

  return (
    <VStack ref={stackRef}>
      <h1 style={{ lineHeight: 1.2 }}>{children}</h1>
      {path === '/' && (
        <Text color="gray.500" fontSize="2xl">
          By <b>Sam McElligott</b> &amp; <b>Dylan Martin</b>
        </Text>
      )}
      {wordCount !== 0 && (
        <Text mt={0} color="gray.500" fontSize="2xl">
          This page's word count:{' '}
          <Text as="span" fontWeight="bold" color="primary">
            ~{wordCount}
          </Text>
        </Text>
      )}
    </VStack>
  );
};

export default HeaderWithWordCount;
