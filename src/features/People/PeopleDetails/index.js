import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { PeopleDetailsTile } from "../../../common/PeopleDetailsTile"
import { useEffect } from "react";
import { useState } from "react";
import { getPersonDetails } from "../peopleAPI";

export const PeopleDetails = () => {
    const { id } = useParams();
    const [personDetails, setPersonDetails] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPersonDetails({ id });
            setPersonDetails(data);
        };
        fetchData();
    }, [id]);

    return (
        <>
            {personDetails ? (
                <>
                    <PeopleDetailsTile 
                    id={id}
                    profile_path={personDetails.profile_path}
                    birthday={personDetails.birthday}
                    place_of_birth={personDetails. place_of_birth}
                    biography={personDetails. biography}
                    name={personDetails.name}
                    />
                </>
            ) : null}
        </>


    );
};
