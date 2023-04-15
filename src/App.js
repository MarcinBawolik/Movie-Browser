import './App.css';
import { ActorProfile } from './components/ActorProfile';
import { Error } from './components/Error';
import { Pages } from './components/Pages';

function App() {
  return (
    <>
      <Error/>
      <ActorProfile/>
      <Pages/>
    </>
  );
}

export default App;
