import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// this will import Apollo hooks & modules
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

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
import CaseForm from './pages/CaseForm';

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div class="container content-area">
          <Header />
          <div>
            <Routes>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/case/:id" component={SingleCase} />
              {/* <Route exact path="/profile/:username?" component={Profile} /> */}
              <Route exact path="/caseform" component={CaseForm} />
              <Route component={NoMatch} />
            </Routes>
          </div>
          <div>
          <Footer />
          </div>
        </div>
      </Router>
        </ApolloProvider>
  );
}

export default App;
