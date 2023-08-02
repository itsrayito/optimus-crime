import React from "react";

// this will import Apollo hooks & modules
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-boost';

// this will import components
import Header from './components/Header';
import Footer from './components/Footer';

// this imports pages
import Home from './pages/Home';

const client = new ApolloClient({
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider Client={client}>
      <div>
        <Header />
        <div>
          <Home />
          </div>
          <Footer />
        </div>
        </ApolloProvider>
  );
}

export default App;
