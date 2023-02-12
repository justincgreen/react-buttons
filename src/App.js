import './App.css';
import Button from './components/Button';
import { ButtonTypes, ButtonSizes } from './components/buttonTypes';

function App() {
  return (
    <div className="App">
      <Button
        type={ButtonTypes.PRIMARY}
        size={ButtonSizes.SMALL}
      />
    </div>
  );
}

export default App;
