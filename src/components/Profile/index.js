import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import useTheme from 'hooks/useTheme';
import * as Styled from './style';

const Profile = () => {
    const [theme] = useTheme();

    const data = useStaticQuery(graphql`
        query {
            avatar: file(relativePath: { eq: "avatar.jpg" }) {
                childImageSharp {
                    fixed(width: 140, height: 140) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            bg: file(relativePath: { eq: "bg.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1920) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <Styled.Wrapper bgUrl={data.bg.childImageSharp.fluid.src}>
            <Styled.Filter dark={theme === 'dark'} />
            <Styled.ProfileWrapper>
                <Styled.AvatarBorder>
                    <Styled.Avater>
                        <Styled.Image
                            fixed={data.avatar.childImageSharp.fixed}
                        />
                    </Styled.Avater>
                </Styled.AvatarBorder>
                <Styled.PersonalDetails>
                    <h1 className="mt-0 mb-2">Georgios Giatsidis</h1>
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
