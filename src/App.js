import './App.css';
import Input from './components/Input';
import Result from './components/Result';
import ValueContextProvider from './ValueContextProvider';

function App() {
  return (
    <ValueContextProvider>
      <div className="app">
        <h1>Hook</h1>
        <Input />
        <Result />
      </div>
    </ValueContextProvider>
  );
}

export default App;
