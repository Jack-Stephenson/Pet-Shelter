import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import PetList from './components/views/AllPets'
import NewPet from './components/forms/NewPet';
import Detail from './components/views/Details';
import EditPet from './components/forms/EditPet';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Pet Shelter</h1>
        <h2>These pets are looking for a good home</h2>
        <Switch>
          <Route exact path={'/'}>
            <PetList />
          </Route>
          <Route exact path={'/create'}>
            <NewPet />
          </Route>
          <Route exact path={'/pets/:id'}>
            <Detail />
          </Route>
          <Route exact path={'/pets/edit/:id'}>
            <EditPet />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
