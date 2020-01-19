import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import * as Styled from './style';

const Profile = () => {
    const data = useStaticQuery(graphql`
        query {
            fileName: file(relativePath: { eq: "avatar.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1920) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <Styled.Wrapper>
            <Styled.ProfileWrapper>
                <Styled.Avater>
                    <img src={data.fileName.childImageSharp.fluid.src} alt="" />
                </Styled.Avater>
                <Styled.PersonalDetails>
                    <h1 className="name">Georgios Giatsidis</h1>
                    <p>
                        Software Engineer
                        <a
                            title="Email address"
                            href="mailto:georgiosgiatsidis@hotmail.gr"
                        >
                            <Styled.Icon>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </Styled.Icon>
                        </a>
                        <a
                            title="LinkedIn"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/georgegiatsidis/"
                        >
                            <Styled.Icon>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </Styled.Icon>
                        </a>
                        <a
                            title="Github"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/georgiosgiatsidis"
                        >
                            <Styled.Icon>
                                <FontAwesomeIcon icon={faGithub} />
                            </Styled.Icon>
                        </a>
                    </p>
                </Styled.PersonalDetails>
            </Styled.ProfileWrapper>
        </Styled.Wrapper>
    );
};

export default Profile;
