import Home from './Pages/Home';
import Movie from './Pages/Movie';
import Contact from './Pages/Contact';
import About from './Pages/About';
import PageNotFound from './Pages/PageNotFound';
import GetMovieInfo from './Components/DisplayBoxComponents';
import { Route, Switch } from 'react-router-dom';
const Routes = () => (
    <div className="h-100">
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/movies' component={Movie} />
            <Route exact path='/movie/:id' component={GetMovieInfo} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route component={PageNotFound} />
        </Switch>
    </div>)

export default Routes