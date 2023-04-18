import { Banner } from "../../../common/Banner"
import { MovieTile } from "../../../common/MovieTile"
import poster from "../../../images/poster.png"

export const MovieDetails = () => (
    <>
    <Banner />
    <MovieTile 
    imageSrc={poster}
    altText={poster}
    title="Mulan"
    year="2020"
    genre="komedia"
    rate="7,4"
    votes="355"
    />
    </>
)