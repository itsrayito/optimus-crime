import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// this will import Apollo hooks & modules
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-boost';

// this will import components
import Header from './components/Header';
import Footer from './components/Footer';

// this imports pages
import Home from './pages/Home';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import SingleCase from './pages/SingleCase';
import Signup from './pages/Signup';
import Profile from './pages/Profile';

const client = new ApolloClient({
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider Client={client}>
      <Router>
        <div>
          <Header />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/case:id" component={SingleCase} />
              <Route exact path="/profile" component={Profile} />

              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
        </ApolloProvider>
  );
}

export default App;
