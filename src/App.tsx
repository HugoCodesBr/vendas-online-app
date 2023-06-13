import { SafeAreaView, Text } from 'react-native';
import styled from 'styled-components/native';

const TextNew = styled.Text`
  font-size: 24px;
  color: pink;
  background-color: #888;
  text-decoration: underline;
  text-transform: uppercase;
`;

const App = () => {
  return (
    <SafeAreaView>
      <Text>Testando</Text>
      <TextNew>Novo Teste</TextNew>
    </SafeAreaView>
  );
};

export default App;
