import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomePage } from './pages/HomePage/HomePage';
import { SubmitPage } from './pages/SubmitPage/SubmitPage';
import { BrowserRouter , Route, Switch, } from 'react-router-dom'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route path='/create' exact component={SubmitPage}/>
      <Route path='/' exact component={HomePage}/>
      <Route path='/:postId' component={HomePage}/>
      </Switch>
    </BrowserRouter>
  );
};
