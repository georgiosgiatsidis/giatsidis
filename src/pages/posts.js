/* eslint-disable react/prop-types */
import React from 'react';
import { Link, graphql } from 'gatsby';
import { rhythm } from 'utils/typography';
import Layout from 'components/Layout';
import Container from 'components/Container';
import SEO from 'components/SEO';

class BlogIndexTemplate extends React.Component {
    render() {
        const posts = this.props.data.allMarkdownRemark.edges;

        return (
            <Layout>
                <SEO title="Posts" />
                <Container>
                    <main>
                        {posts.map(({ node }) => {
                            const title = node.frontmatter.title;

                            return (
                                <article key={title}>
                                    <header>
                                        <h3
                                            style={{
                                                fontSize: rhythm(1),
                                                marginBottom: rhythm(1 / 4),
                                            }}
                                        >
                                            <Link
                                                style={{ boxShadow: 'none' }}
                                                to={node.frontmatter.path}
                                                rel="bookmark"
                                            >
                                                {title}
                                            </Link>
                                        </h3>
                                        <small>{node.frontmatter.date}</small>
                                    </header>
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: node.frontmatter.spoiler,
                                        }}
                                    />
                                </article>
                            );
                        })}
                    </main>
                </Container>
            </Layout>
        );
    }
}

export default BlogIndexTemplate;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
                description
            }
        }
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        path
                        title
                    }
                }
            }
        }
    }
`;
