import React from 'react';
import Card from './Card';
import FlexContainer from './FlexContainer';

// ActorList component displays a list of actors in a FlexContainer with a header.
// It also handles the onClick event for each actor item.
export default function ActorList({ header, actors, onClick }) {
  return (
    <FlexContainer title={header}>
      {actors.map((actor) => (
        // Each actor is wrapped inside a div that provides some spacing and cursor behavior.
        // onClick is used to handle the click event on each actor item.
        <div
          className="m-2 w-44 cursor-pointer hover:opacity-90"
          key={actor.credit_id}
          onClick={() => onClick(actor.id)}
        >
          {/* The Card component is used to display the actor's image and title (name + character). */}
          {/* If the actor has a character, it is shown in parentheses after the name. */}
          <Card
            id={actor.id}
            showTitle={true}
            title={`${actor.name} ${actor.character ? "(" + actor.character + ")" : ""}`}
            image={actor.profile_path}
          />
        </div>
      ))}
    </FlexContainer>
  );
}
