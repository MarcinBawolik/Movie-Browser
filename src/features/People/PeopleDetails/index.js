import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { PeopleDetailsTile } from "../../../common/PeopleDetailsTile";
import { useEffect, useState } from "react";
import { getPersonDetails, getPersonCredits } from "../peopleAPI";
import { Header, List, StyledLink, Wrapper } from "./styled";
import { PersonTile } from "../../../common/PersonTile";
import noPoster from "../../../images/noPoster.png";
import { Genres } from "../../../getMovieGenres";
import Loader from "../../../common/Loader";
import { Error } from "../../../common/Error";
import { useQuery } from "react-query";

export const PeopleDetails = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    const {
        data: person,
        isLoading: isMovieLoading,
        isError: isMovieError,
    } = useQuery(["movie", { id }], getPersonDetails);

    const {
        data: credits,
        isLoading: isCreditsLoading,
        isError: isCreditsError,
    } = useQuery(["credits", { id }], getPersonCredits);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading || isMovieLoading || isCreditsLoading) {
        return <Loader></Loader>;
    }

    if (isMovieError || isCreditsError) {
        return <Error></Error>;
    }

    return (
        <>
            {person && (
                <>
                    <PeopleDetailsTile
                        id={id}
                        profile_path={person.profile_path}
                        birthday={person.birthday}
                        place_of_birth={person.place_of_birth}
                        biography={person.biography}
                        name={person.name}
                    />
                </>
            )}
            <Genres>
                {({ genres }) => (
                    <>
                        <Wrapper>
                            {credits.cast.length > 0 && (
                                <>
                                    <Header> Movies - Cast ({credits.cast.length})</Header>
                                    <List>
                                        {credits &&
                                            credits.cast &&
                                            credits.cast.map((cast) => (
                                                <StyledLink to={`/movies/movies/${cast.id}`}>
                                                    <PersonTile
                                                        as="li"
                                                        id={cast.id}
                                                        imageSrc={
                                                            cast.poster_path
                                                                ? `https://image.tmdb.org/t/p/w500/${cast.poster_path}`
                                                                : noPoster
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
                                </>
                            )}
                        </Wrapper>
                        <Wrapper>
                            {credits.crew.length > 0 && (
                                <>
                                    <Header>Movies - Crew ({credits.crew.length})</Header>
                                    <List>
                                        {credits &&
                                            credits.crew &&
                                            credits.crew.map((crew) => (
                                                <StyledLink to={`/movies/movies/${crew.id}`}>
                                                    <PersonTile
                                                        as="li"
                                                        id={crew.id}
                                                        imageSrc={
                                                            crew.poster_path
                                                                ? `https://image.tmdb.org/t/p/w500/${crew.poster_path}`
                                                                : noPoster
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
                                </>
                            )}
                        </Wrapper>

                    </>
                )}
            </Genres>
        </>
    );
}; 