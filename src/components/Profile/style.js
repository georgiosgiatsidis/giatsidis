import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 580px) {
        display: block;
        text-align: center;
    }
`;
export const PersonalDetails = styled.div`
    padding-left: 15px;
    & a {
        color: #fff;
        padding: 5px;
    }
`;

export const Avater = styled.div`
    max-width: 150px;
    margin: 0 auto;

    & > img {
        width: 100%;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: inset 0 0 8px 0 rgba(0, 0, 0, 0.5);
    }
`;

export const Icon = styled.span`
    color: var(--textLink);
`;
