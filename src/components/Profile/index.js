import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import * as Styled from './style';
import Image from '../image';

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
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/georgegiatsidis/"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a
                            title="Github"
                            target="_blank"
                            href="https://github.com/georgiosgiatsidis"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </p>
                </Styled.PersonalDetails>
            </Styled.ProfileWrapper>
            <Image />
        </Styled.Wrapper>
    );
};

export default Profile;
