import Header from "./components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Project from "./pages/Project.jsx";

// This code creates an Apollo cache with a custom type policy for the Query type.
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      // The typePolicies property defines how the cache should handle different types of data in the store.
      fields: {
        clients: {
          // This comment explains that the merge function is used to handle incoming data for the clients field.
          merge: (existing, incoming) => {
            // Return incoming, which means that the incoming data will always overwrite any existing data in the cache.
            return incoming;
          },
        },
        projects: {
          // This comment explains that the merge function is used to handle incoming data for the projects field.
          merge: (existing, incoming) => {
            // Return incoming, which means that the incoming data will always overwrite any existing data in the cache.
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache,
});
function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/project/:id' element={<Project />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
