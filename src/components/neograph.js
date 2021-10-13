import React, { useEffect, useRef } from "react";
import useResizeAware from "react-resize-aware";
import PropTypes from "prop-types";
import Neovis from "neovis.js/dist/neovis.js";

const NeoGraph = (props) => {
  const {
    width,
    height,
    containerId,
    backgroundColor,
    neo4jUri,
    neo4jUser,
    neo4jPassword,
      searchname,
      collabweight,
  } = props;

  // const queryString = window.location.search;
  // const urlParams = new URLSearchParams(queryString);
  // const searchname = urlParams.get('name');
  // const collabweight = urlParams.get('weight');

  const visRef = useRef();

  useEffect(() => {
    const config = {
      container_id: visRef.current.id,
      server_url: neo4jUri,
      server_user: neo4jUser,
      server_password: neo4jPassword,
      labels: {
        "Author": {
            caption: "name",
            size: "pagerank",
            community: 'auth_community',
            title_properties: ["name", "pagerank"],
            shape: "diamond",
            font: {
              color: "blue",
              size: 11,
              background: "black"
            }
        }
        },
      relationships: {
        "CO_AUTH": {
          caption: false,
          thickness: 'weight'
                    }
                },
                initial_cypher: "MATCH (p:Author {name: '" + searchname + "' }) CALL apoc.path.subgraphAll(p, {relationshipFilter: 'CO_AUTH', labelFilter: 'Author',  maxLevel: 1}) YIELD nodes, relationships WITH nodes MATCH (a:Author)-[c:CO_AUTH]-(b:Author) WHERE a IN nodes AND b IN nodes AND c.weight >=" + collabweight + " RETURN a, b, c"
    };
    const vis = new Neovis(config);
    vis.render();
  }, [neo4jUri, neo4jUser, neo4jPassword, searchname, collabweight]);

  return (
    <div
      id={containerId}
      ref={visRef}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: `${backgroundColor}`,
      }}
    />
  );
};

NeoGraph.defaultProps = {
  width: 1200,
  height: 600,
  backgroundColor: "black",
};

NeoGraph.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  containerId: PropTypes.string.isRequired,
  neo4jUri: PropTypes.string.isRequired,
  neo4jUser: PropTypes.string.isRequired,
  neo4jPassword: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};

const ResponsiveNeoGraph = (props) => {
  const [resizeListener, sizes] = useResizeAware();

  const side = Math.max(sizes.width, sizes.height) / 2;
  const neoGraphProps = { ...props, width: 2*side, height: 1.5*side };
  return (
    <div style={{ position: "relative" }}>
      {resizeListener}
      <NeoGraph {...neoGraphProps} />
    </div>
  );
};

ResponsiveNeoGraph.defaultProps = {
  backgroundColor: "black",
};

ResponsiveNeoGraph.propTypes = {
  containerId: PropTypes.string.isRequired,
  neo4jUri: PropTypes.string.isRequired,
  neo4jUser: PropTypes.string.isRequired,
  neo4jPassword: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};

export {NeoGraph, ResponsiveNeoGraph};