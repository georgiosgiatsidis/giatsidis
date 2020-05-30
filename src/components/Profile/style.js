import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-size: cover;
    background-position: center center;
    position: relative;
    background-image: url(${(props) => props.bgUrl});
    color: #fff;
`;

export const Filter = styled.div`
    transition: all 250ms ease;

    &:after {
        background-color: rgba(0, 0, 0, 0.5);
        content: '';
        display: block;
        height: 100%;
        left: 0;
        top: 0;
        position: absolute;
        width: 100%;
        z-index: 1;
    }
`;

export const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    z-index: 2;

    @media (max-width: 580px) {
        display: block;
        text-align: center;
    }
`;
export const PersonalDetails = styled.div`
    padding-left: 15px;
    & a {
        padding: 5px;
    }
`;

export const Avater = styled.div`
    display: flex;
    max-width: 150px;
    margin: 0 auto;

    & > img {
        width: 100%;
        border-radius: 50%;
        box-shadow: inset 0 0 8px 0 rgba(0, 0, 0, 0.5);
        margin: 0;
    }
`;

export const AvatarBorder = styled.div`
    display: flex;
    position: relative;
    padding: 5px;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        border-radius: 50%;
        background: linear-gradient(45deg, #5f1835, #0f2d64);
    }
`;

export const Icon = styled.span`
    color: var(--textLink);
`;
