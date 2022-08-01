import './App.css';
import Header from './components/header/Header';
import TodoList from './components/main/TodoList';
import theme from './Theme';
import { ThemeProvider } from '@mui/material/styles';
import store from './redux/store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <TodoList />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
