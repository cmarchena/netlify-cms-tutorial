import React from 'react';
import { Link } from 'react-router-dom';
const styles = {
  container: {
    margin: '0 auto',
    width: '40vw',
    textAlign: 'justify'
  },

  img: {
    width: '100%'
  }
};
export default ({ data }) => {
  return (
    <div style={styles.container}>
      <h1>El tocador de Raquel Arañon</h1>
      <h4>{data.allMarkdownRemark.totalCount} Artículos</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            {node.frontmatter.title}
            <span>— {node.frontmatter.date}</span>
          </h3>
          <p>{node.excerpt}</p>
          <Link to={node.frontmatter.path}>Ver más</Link>
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
          }
          excerpt
        }
      }
    }
  }
`;
