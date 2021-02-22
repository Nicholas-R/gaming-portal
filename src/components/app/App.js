import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from '../header'
import Home from '../../pages/Home'
import Lol from '../../pages/Lol'
import Champions from '../../pages/Champions'
import Items from '../../pages/Items-page'
import ChampionsDetail from '../../pages/Champions-detail'
import Errorboundry from '../error-boundry'

export default function App() {
  return (
    <Router>
      <Errorboundry>
        <div className="App">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/lol" component={Lol}></Route>
              <Route exact path="/champions" component={Champions} />
              <Route exact path="/items" component={Items} />
              <Route exact path="/champions/:id" component={ChampionsDetail} />
            </Switch>
          </div>
        </div>
      </Errorboundry>
    </Router>
  )
}
// zRVYUC2XP4H1UmOGVYON__PHT4qSsmhj-t781PgawDfVt0TstFE
