import { ButtonLink, HeaderError, IconError, InfoError, TriangleIcon, WrapperError } from "./styled";


export const Error = () => {
    return (
        <>
            <IconError>
                <TriangleIcon />
            </IconError>
            <WrapperError>
                <HeaderError>Ooops! Something went wrong... </HeaderError>
                <InfoError>Please check your network connection<br />and try again</InfoError>
                <ButtonLink>Back to home page</ButtonLink>
            </WrapperError>
        </>
    )
};