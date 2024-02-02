import { SafeAreaView, StatusBar } from 'react-native';
import Person from './src/components/Person/Person';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>
      <Person name="Lucas" age={22}/>
      <Person name="Paulo" age={25}/>
      <Person name="Julia" age={19}/>
    </SafeAreaView>
  );
}


