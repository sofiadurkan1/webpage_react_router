import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from '../pages/About'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Navbar from '../components/Navbar'

const AppRouter = () => {
    return(
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
            </Switch>
        </Router>
    )
}

export default AppRouter;