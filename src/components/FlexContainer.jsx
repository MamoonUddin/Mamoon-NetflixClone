import React from 'react';

// FlexContainer component represents a container with flexible layout to wrap its children.
// It receives a prop `title` (the title to be displayed at the top of the container).
export default function FlexContainer(props) {
  return (
    // The section element serves as the container for the flex layout.
    // It sets a maximum width and centers the container horizontally.
    // It also adds some padding at the top and bottom.
    <section className="w-full max-w-5xl m-auto px-2 md:px-8 py-8">
      {/* The title is displayed as an h2 element with a text size of 3xl and a dark gray text color. */}
      <h2 className="text-3xl text-dark-50 pb-6">{props.title}</h2>

      {/* The div element acts as a flex container and centers its children horizontally. */}
      {/* It wraps its children in a flexible layout (flex-wrap). */}
      <div className="w-full flex justify-center flex-wrap">
        {/* The props.children represent the child elements of the FlexContainer component. */}
        {/* They are placed inside the flex container and will be laid out flexibly. */}
        {props.children}
      </div>
    </section>
  );
}
