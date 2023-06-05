import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { PeopleDetailsTile } from "../../../common/PeopleDetailsTile"
import { useEffect } from "react";
import { useState } from "react";
import { getPersonDetails, getPersonCredits } from "../peopleAPI";
import { Header, List, StyledLink, Wrapper } from "./styled";
import { PersonDetailsTile } from "../../../common/PersonDetailsTile";
import noPicture from "../../../images/noPicture.png";
import { Genres } from "../../../getMovieGenres";

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
            <Genres>
                {({ genres }) => (
                    <>
                        <Wrapper>
                            <Header> Movies - Cast ({personCredits && personCredits.cast ? personCredits.cast.length : 0})</Header>
                            <List>
                                {personCredits &&
                                    personCredits.cast &&
                                    personCredits.cast.map((cast) => (
                                        <StyledLink to={`/movies/movies/${cast.id}`}>
                                            <PersonDetailsTile
                                                as="li"
                                                id={cast.id}
                                                imageSrc={
                                                    cast.poster_path
                                                        ? `https://image.tmdb.org/t/p/w500/${cast.poster_path}`
                                                        : noPicture
                                                }
                                                altText={cast.name}
                                                title={cast.title}
                                                year={cast.release_date.slice(0, 4)}
                                                genreList={genres.filter((genre) =>
                                                    cast.genre_ids.includes(genre.id)
                                                )}
                                                rate={cast.vote_average}
                                                votes={cast.vote_count}
                                                
                                            />
                                        </StyledLink>
                                    ))}
                            </List>
                        </Wrapper>
                        <Wrapper>
                            <Header>Movies - Crew ({personCredits && personCredits.crew ? personCredits.crew.length : 0})</Header>
                            <List>
                                {personCredits &&
                                    personCredits.crew &&
                                    personCredits.crew.map((crew) => (
                                        <StyledLink to={`/movies/movies/${crew.id}`}>
                                            <PersonDetailsTile
                                                as="li"
                                                id={crew.id}
                                                imageSrc={
                                                    crew.poster_path
                                                        ? `https://image.tmdb.org/t/p/w500/${crew.poster_path}`
                                                        : noPicture
                                                }
                                                altText={crew.name}
                                                title={crew.title}
                                                year={crew.release_date.slice(0, 4)}
                                                genreList={genres.filter((genre) =>
                                                    crew.genre_ids.includes(genre.id)
                                                )}
                                                rate={crew.vote_average}
                                                votes={crew.vote_count}
                                            />
                                        </StyledLink>
                                    ))}
                            </List>
                        </Wrapper>
                    </>
                )}
            </Genres>
        </>
    );
};
