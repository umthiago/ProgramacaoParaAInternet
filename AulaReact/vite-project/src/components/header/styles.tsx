import { styled } from "styled-components";

export const Container = styled.header`
    display: flex;
    background-color:  pink;
    align-items: center;
    justify-content: center;
    height: 198px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    .details {
        width: 100%;
        h1{
            font-size: 32px;
            color: #fff;
        }
        h2{
            font-size: 32px;
            color: #fff;
            font-weight: 400;
            opacity: 0.9;
            margin-top: 6px;
        }
    }
    .pai_img{
        width: 100%;
        border-left: 3px solid #d82121;
    }

`;


