import { PeopleImage } from "./Feature";

const peoples = () => {
    return (
        <>
            {PeopleImage.map((val) => (
                <student key={val.headline} headline={val.headline} people={val.people} name={val.name} feedback={val.feedback} />
            ))}
        </>
    );
};
