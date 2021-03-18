import React, {  Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Homme from './components/pages/Homme';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Sideeq from './components/pages/Sideeq'
import Registration from './components/pages/Registration';
import Search from './components/Search';
import axios from 'axios';
import Students from './components/Student';

class App extends Component {

  state = {
    students: [],
  
  };
  
  
  async componentDidMount() {
        const res = await axios.get(
          './components/students.json'     );
    this.setState({ students: res.data });
    console.log(res.data);
  }

 //search user
 searchUsers = async text => {
  this.setState({ loading: true });
  const res = await axios.get(
'./components/students.json'  );
  this.setState({ users: res.data.items, loading: false });
   console.log(res.data);
};



render() {
  const { students } = this.state




  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Homme} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sideeq' component={Sideeq} />
          <Route path='/registration' component={Registration} />
            <Route
                exact
                path="/search"
                render={props => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      
                    />
                    <Students students={students}/>
                  </Fragment>
                )}
              ></Route>
        </Switch>
      </Router>
    </>
  );
                }
}

export default App;
