import { ButtonLink, HeaderError, IconError, InfoError, StyledLink, WrapperError } from "./styled";
import { ReactComponent as Triangle } from "./icon/triangle.svg";

export const Error = () => {
    return (
        <>
            <IconError>
                <Triangle />
            </IconError>
            <WrapperError>
                <HeaderError>Ooops! Something went wrong... </HeaderError>
                <InfoError>Please check your network connection<br />and try again</InfoError>
                <StyledLink to={`/people/popular-people`}>
                    <ButtonLink>Back to home page</ButtonLink>
                </StyledLink>
            </WrapperError>
        </>
    )
};