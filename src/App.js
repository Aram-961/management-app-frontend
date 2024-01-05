import Header from "./components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Client from "./components/Client";
import Project from "./components/Project";
import AddClientModal from "./components/AddClientModal";

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
        <Header />
        <div className='container'>
          <AddClientModal />
          <Project />
          <Client />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
