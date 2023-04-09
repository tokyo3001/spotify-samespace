import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import SongContextProvider from "./SongContext";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"; //apollo client is a state management library in js which helps in managing remote and local data.

let client = new ApolloClient({
  uri: "https://api.ss.dev/resource/api",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  // strict mode highlights the potential problem in an application
  <React.StrictMode>   
    {/* ApolloProvider wraps your react app and places apollo client on the context, enabling you to access it from anywhere in your component tree. */}
    <ApolloProvider client={client}>
      {/* provides navigation between views from different components in a react app, allows the browser URL to be changed, and keeps the UI in sync with the URL. */}
      <BrowserRouter>
        {/* it is used to provide context to all the components whithout rewritting them again */}
        <SongContextProvider>
          <App />
        </SongContextProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
