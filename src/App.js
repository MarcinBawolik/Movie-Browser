import './App.css';
import { ActorProfile } from './components/ActorProfile';
import { Banner } from './components/Banner';
import { Error } from './components/Error';
import { Pages } from './components/Pages';

function App() {
  return (
    <>
      <Banner/>
      <Error/>
      <ActorProfile/>
      <Pages/>
    </>
  );
}

export default App;
