import { Text } from '@chakra-ui/react';

const Subtext: React.FC = ({ children }) => {
  return (
    <Text color="gray.400" fontWeight="bold" fontSize={14}>
      {children}
    </Text>
  );
};

export default Subtext;
