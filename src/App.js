import Header from "./components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Client from "./components/Client";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          keyArgs: false,
          merge: (existing, incoming) => {
            return incoming;
          },
        },

        projects: {
          keyArgs: false,
          merge: (existing, incoming) => {
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
          <Client />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
