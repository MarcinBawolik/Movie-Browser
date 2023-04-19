import { ButtonLink, HeaderError, IconError, InfoError, WrapperError } from "./styled";
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
                <ButtonLink>Back to home page</ButtonLink>
            </WrapperError>
        </>
    )
};