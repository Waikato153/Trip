
import AppNavigation from "./navigation/appNavigation";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { PaperProvider } from 'react-native-paper';
import { ToastProvider } from "react-native-toast-notifications";

export default function App() {
  
  return (
    <ToastProvider>
      <Provider store={store}>
        <PaperProvider>
          <AppNavigation />
        </PaperProvider>
      </Provider>
    </ToastProvider>
  );
  
}