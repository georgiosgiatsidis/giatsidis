import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { Wrapper } from './styles';

const Social = () => (
    <Wrapper>
        <ul>
            <li>
                <a href="#">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
            </li>
            <li>
                <a href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </li>
            <li>
                <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </li>
            <li>
                <a
                    title="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/georgegiatsidis/"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </li>
            <li>
                <a
                    title="Github"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/georgiosgiatsidis"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </li>
        </ul>
    </Wrapper>
);

export default Social;
