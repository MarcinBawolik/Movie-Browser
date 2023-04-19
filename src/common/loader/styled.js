import styled from "styled-components";

export const Load = styled.div`
    position: fixed;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    margin: 120px 0;

    &:after {
        content: "";
        width: 91px;
        height: 91px;
        border: 11.375px solid #DDDDEE;
        border-top-color: black;
        border-radius: 50%;
        animation: loading 0.75s ease infinite; 
    }

    @keyframes loading {
        from { transform: rotate(0turn) }
        to { transform: rotate(1turn) }
    }
`