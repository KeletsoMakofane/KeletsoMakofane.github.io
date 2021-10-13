import React from "react";
import { ResponsiveNeoGraph } from '@components';
import { Layout } from '@components';

const NEO4J_URI =  "bolt://localhost:7687";
const NEO4J_USER = "neo4j";
const NEO4J_PASSWORD = "abcd";

const App = () => {
  return (

    <div className="App" style={{ fontFamily: "Quicksand" }}>
      <h1>React Neovis Example</h1>

        <ResponsiveNeoGraph
        containerId={"id0"}
        neo4jUri={NEO4J_URI}
        neo4jUser={NEO4J_USER}
        neo4jPassword={NEO4J_PASSWORD}
      />
    </div>

  );
};

export default App;