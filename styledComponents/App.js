import { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Container } from './src/components/Container/Container';
import { Title } from './src/components/Title/Title';
import { ButtonContainer, TextButton } from './src/components/Button/Button';
import { ImageLogo } from './src/components/Image/Image';

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.warn(`Contador atualizado: ${count}`)
  }, [count])

  return (
    <Container>
       <ImageLogo
          source={require("./assets/ampulheta.png")}
        />
      <Title>Contador: {count}</Title>
      
      <ButtonContainer>
        <TextButton onPress={increment}>Incrementar</TextButton>
      </ButtonContainer>
      <ButtonContainer>
        <TextButton color="black" onPress={decrement}>Decrementar</TextButton>
      </ButtonContainer>
      
    </Container>
  );
}

const styles = StyleSheet.create({

});
