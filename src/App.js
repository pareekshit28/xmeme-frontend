import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomePage } from './pages/HomePage/HomePage';
import { SubmitPage } from './pages/SubmitPage/SubmitPage';
import { BrowserRouter , Route, Switch, } from 'react-router-dom'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route path='/create' component={SubmitPage}/>
      <Route path='/' component={HomePage}/>
      </Switch>
    </BrowserRouter>
  );
};
