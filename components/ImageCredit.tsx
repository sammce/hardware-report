import { Center, Text } from '@chakra-ui/react';

const ImageCredit: React.FC = ({ children }) => {
  return (
    <Center>
      <Text as="span" color="gray.500" fontWeight="bold">
        Image credit:&nbsp;
      </Text>
      {children}
    </Center>
  );
};

export default ImageCredit;
