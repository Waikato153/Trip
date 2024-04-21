
import AppNavigation from "./navigation/appNavigation";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  
  return (
    <Provider store={store}>
      <PaperProvider>
        <AppNavigation />
      </PaperProvider>
    </Provider>
    
  );
  
}