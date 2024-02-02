import { useFonts, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'; //FONTS 
import { ContainerApp } from './styles';
import { StatusBar } from 'expo-status-bar';
import { Header } from './src/components/Header';
import { HomeScreen } from './src/screens/HomeScreen';

export default function App() {
  const [fontLoaded, fontError] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold,
  });

  //validação de carregamento de fontes
  if(!fontLoaded && !fontError)
  {
    return null;
  }
  
  return (
    <ContainerApp>
      <StatusBar/>
      <Header/>

      <HomeScreen/>

    </ContainerApp>
  );
}
