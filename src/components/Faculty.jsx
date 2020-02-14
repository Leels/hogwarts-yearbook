import React from "react";
import AlbusDumpledor from "./images/AlbusDumbledore.jpg";
import MadamHooch from "./images/MadamHooch.jpg";
import ProfFlitwick from "./images/ProfFlitwick.jpeg";
import ProfLupin from "./images/ProfLupin.jpg";
import ProfMcGonagall from "./images/ProfMcGonagall.jpg";
import ProfSnape from "./images/ProfSnape.jpg";
import ProfSprout from "./images/ProfSprout.png";
import ProfTrelawney from "./images/ProfTrelawney.jpg"
import FacultyPage from "./FacultyPage";

const faculty = [
  {
    image: AlbusDumpledor,
    name: "Albus Dumbledore",
    quote: "real done with these punks"
  },
  {
    image: ProfMcGonagall,
    name: "Professor ProfMcGonagall",
    quote: "fuck you Malfoy"
  },
  {
    image: ProfSnape,
    name: "Professor Snape",
    quote: "I am not evil, and this is not a phase"
  },
  {
    image: MadamHooch,
    name: "Madam Hooch",
    quote: "Ooph, that's a broken wrist"
  },
  {
    image: ProfFlitwick,
    name: "Professor Flitwick",
    quote: "swish and flick"
  },
  {
    image: ProfLupin,
    name: "Professor Lupin",
    quote: "I got werewolf problems"
  },
  {
    image: ProfSprout,
    name: "Professor Sprout",
    quote: "my plants are killer!"
  },
  {
    image: ProfTrelawney,
    name: "Professor Trelawney",
    quote: "I see you Harry"
  }
];

function Faculty(){
  return (
    <div>
    {faculty.map((prof, index) =>
      <FacultyPage
      image={prof.image}
      name={prof.name}
      quote={prof.quote}
      key={index}/>
    )}
    </div>
  );
}

export default Faculty;
