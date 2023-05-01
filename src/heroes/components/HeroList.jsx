import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./HeroCard";


export const HeroList = ( { publisher } ) => {

    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ]); 

    console.log(heroes);

    //const lis = heroes.map( (hero ) => <li key={hero.id}>{ hero.superhero }</li> )
    //const headings = heroes.map((hero, index) => <h1 key={index}>{hero}</h1>)

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroes.map( hero => (
                    <HeroCard 
                      key={ hero.id } 
                      { ...hero }
                    />
                ))
            }
        </div>
    )

}
