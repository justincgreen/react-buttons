import './App.css';
import Button from './components/Button';
import { ButtonTypes, ButtonSizes } from './components/buttonTypes';

function App() {
  return (
    <div className="App">
      <Button
        type={ButtonTypes.PRIMARY}
        size={ButtonSizes.SMALL}
        label={'Button Primary'}
      />
      
      <Button
        type={ButtonTypes.SECONDARY}
        size={ButtonSizes.MEDIUM}
        label={'Button Secondary'}
      />
      
      <Button
        type={ButtonTypes.TERTIARY}
        size={ButtonSizes.LARGE}
        label={'Button Tertiary'}
      />
    </div>
  );
}

export default App;
