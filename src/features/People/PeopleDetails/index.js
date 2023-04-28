import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { PeopleDetailsTile } from "../../../common/PeopleDetailsTile"
import { useEffect } from "react";
import { useState } from "react";
import { getPersonDetails, getPersonCredits } from "../peopleAPI";
import { Header, List, Wrapper } from "./styled";
import { PersonDetailsTile } from "../../../common/PersonDetailsTile";
import noPicture from "../../../images/noPicture.png";

export const PeopleDetails = () => {
    const { id } = useParams();
    const [personDetails, setPersonDetails] = useState(null);
    const [personCredits, setPersonCredits] = useState(null);

    useEffect(() => {
        const fetchDetailsData = async () => {
            const data = await getPersonDetails({ id });
            setPersonDetails(data);
        };
        fetchDetailsData();
    }, [id]);

    useEffect(() => {
        const fetchPersonCreditsData = async () => {
            const data = await getPersonCredits({ id });
            setPersonCredits(data);
        };
        fetchPersonCreditsData();
    }, [id]);

    return (
        <>
            {personDetails ? (
                <>
                    <PeopleDetailsTile
                        id={id}
                        profile_path={personDetails.profile_path}
                        birthday={personDetails.birthday}
                        place_of_birth={personDetails.place_of_birth}
                        biography={personDetails.biography}
                        name={personDetails.name}
                    />
                </>
            ) : null}
            <Wrapper>
                <Header>Cast</Header>
                <List>
                    {personCredits &&
                        personCredits.cast &&
                        personCredits.cast.map((cast) => (
                            <PersonDetailsTile
                                as="li"
                                id={cast.id}
                                imageSrc={
                                    cast.poster_path
                                    ? `https://image.tmdb.org/t/p/w500/${cast.poster_path}`
                                    : noPicture
                                }
                                altText={cast.name}
                                title={cast.original_name}
                                year={cast.first_air_date}
                                genreList={cast.genre_ids}
                                rate={cast.vote_average}
                                votes={cast.vote_count}
                            />
                        ))}
                </List>
            </Wrapper>
            <Wrapper>
                <Header>Crew</Header>
                <List>
                    {personCredits &&
                        personCredits.crew &&
                        personCredits.crew.map((crew) => (
                            <PersonDetailsTile
                                as="li"
                                id={crew.id}
                                imageSrc={
                                    crew.poster_path
                                    ? `https://image.tmdb.org/t/p/w500/${crew.poster_path}`
                                    : noPicture
                                }
                                altText={crew.name}
                                title={crew.original_name}
                                year={crew.first_air_date}
                                genreList={crew.genre_ids}
                                rate={crew.vote_average}
                                votes={crew.vote_count}
                            />
                        ))}
                </List>
            </Wrapper>
        </>


    );
};
