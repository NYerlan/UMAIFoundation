import ProgramCard from "./ProgramCard";

interface Program {
  title: string;
  description: string;
  imageUrl: string;
}

const PROGRAMS: Program[] = [
  {
    title: "ArtKits",
    description: "Delivering art supplies and creative activities directly to children's hospital rooms",
    imageUrl: "/images/programs/artkit.jpg"
  },
  {
    title: "Art Therapy",
    description: "Professional art therapists providing one-on-one sessions for emotional healing",
    imageUrl: "/images/programs/therapy.jpg"
  },
  {
    title: "Art Workshops",
    description: "Weekly art classes led by professional artists in hospital settings",
    imageUrl: "/images/programs/workshop.jpg"
  },
  {
    title: "Digital Art",
    description: "Introducing children to digital art tools and software",
    imageUrl: "/images/programs/digital.jpg"
  },
  {
    title: "Art History",
    description: "Educational programs teaching art history and appreciation",
    imageUrl: "/images/programs/history.jpg"
  },
  {
    title: "Art Exhibitions",
    description: "Organizing art exhibitions featuring children's artwork in hospitals and galleries",
    imageUrl: "/images/programs/exhibition.jpg"
  }
];

export default function ProgramGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {PROGRAMS.map((program) => (
        <ProgramCard
          key={program.title}
          title={program.title}
          description={program.description}
          imageUrl={program.imageUrl}
        />
      ))}
    </div>
  );
}
