import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
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
                <a href="#">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </li>
        </ul>
    </Wrapper>
);

export default Social;
