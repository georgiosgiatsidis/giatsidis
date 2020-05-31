import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import Container from 'components/Container';
import SEO from 'components/SEO';

/*eslint-disable react/prop-types */

export default function BlogPostTemplate({ data }) {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;
    return (
        <Layout>
            <SEO title={frontmatter.title} />
            <Container>
                <div className="blog-post-container">
                    <div className="blog-post">
                        <h1>{frontmatter.title}</h1>
                        <h2>{frontmatter.date}</h2>
                        <div
                            className="blog-post-content"
                            dangerouslySetInnerHTML={{ __html: html }}
                        />
                    </div>
                </div>
            </Container>
        </Layout>
    );
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
            }
        }
    }
`;
