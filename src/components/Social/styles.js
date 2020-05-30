import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    width: 40px;
    height: 120px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    right: 20px;

    & ul {
        list-style: none;

        li {
            a {
                color: var(--textTitle);

                svg {
                    transition: transform 0.3s;
                }

                &:hover {
                    color: var(--textLink);

                    svg {
                        transform: scale(1.5);
                    }
                }
            }
        }
    }
`;
