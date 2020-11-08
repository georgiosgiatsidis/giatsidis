import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    display: inline-flex;
`;

export const Label = styled.label`
    display: block;
    position: relative;
    width: 60px;
    height: 30px;
    background: var(--textLink);
    border-radius: 40px;
    user-select: none;
    cursor: pointer;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
        height: 30px;
        background: #fff;
        border-radius: 40px;
        transition: left 250ms ease;
    }

    ${(props) =>
        props.checked &&
        css`
            &:after {
                left: 100%;
                transform: translateX(-100%);
            }
        `}
`;

export const Input = styled.input`
    width: 0;
    height: 0;
    visibility: hidden;
`;

export const DarkIcon = styled.span`
    display: block;
    text-align: left;
    padding-left: 9px;
`;

export const LightIcon = styled.span`
    display: block;
    text-align: right;
    padding-right: 5px;
`;
