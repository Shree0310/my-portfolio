import ComponentPreview from "@/components/ComponentLibrary/ComponentPreview";
import Heading from "@/components/Heading";
import SubHeading from "@/components/SubHeading";
import Footer from "@/components/Navbar/Footer";
import ComponentsLibraryLayout from "@/components/ComponentLibrary/ComponentsLibraryLayout";

import fs from "fs";
import path from "path";

import AnimatedCard from "@/components/Playground/Cards/AnimatedCard";
import BeamCard from "@/components/Playground/Cards/BeamCard";
import SecondaryBeamCard from "@/components/Playground/Cards/SecondaryBeamCard";
import MenuCard from "@/components/Playground/Cards/MenuCard";

import JumpingCards from "@/components/Playground/JumpingCards";
import ExpandingCards from "@/components/Playground/ExpandingCards";

const readSource = (relativePath: string) => {
  try {
    return fs.readFileSync(path.join(process.cwd(), relativePath), "utf8");
  } catch {
    return "";
  }
};

const animatedCardSource = readSource("src/components/Playground/Cards/AnimatedCard.tsx");
const beamCardSource = readSource("src/components/Playground/Cards/BeamCard.tsx");
const secondaryBeamCardSource = readSource("src/components/Playground/Cards/SecondaryBeamCard.tsx");
const menuCardSource = readSource("src/components/Playground/Cards/MenuCard.tsx");
const jumpingCardsSource = readSource("src/components/Playground/JumpingCards.tsx");
const expandingCardsSource = readSource("src/components/Playground/ExpandingCards.tsx");

const cardsPreviewItems = [
  {
    title: "Animated Card",
    description: "UX friendly UI components with minute interactions.",
    code: animatedCardSource,
    Preview: AnimatedCard,
  },
  {
    title: "Beam Card",
    description: "Animated beam lines with optional avatar stack.",
    code: beamCardSource,
    Preview: BeamCard,
  },
  {
    title: "Secondary Beam Card",
    description: "Secondary invite-style card with animated SVG lines + button.",
    code: secondaryBeamCardSource,
    Preview: SecondaryBeamCard,
  },
  {
    title: "Menu Card",
    description: "Menu/list card that highlights options.",
    code: menuCardSource,
    Preview: MenuCard,
  },
  {
    title: "Jumping Cards",
    description: "Animated cards that expand and move with spring transitions.",
    code: jumpingCardsSource,
    Preview: JumpingCards,
  },
  {
    title: "Expandable Cards",
    description: "Click-to-expand cards with modal overlay.",
    code: expandingCardsSource,
    Preview: ExpandingCards,
  },
] as const;

export default function CardsLibraryPage() {
  return (
    <ComponentsLibraryLayout activeSection="cards">
      <div className="w-full p-4 sm:p-6 md:p-10 md:pb-10 space-y-8">
        <Heading>Cards Library</Heading>
        <SubHeading>
          Click any card preview below and use the <span className="font-semibold">Code</span> tab to copy the snippet.
        </SubHeading>

        <div className="space-y-12">
          {cardsPreviewItems.map(({ title, description, code, Preview }) => (
            <ComponentPreview
              key={title}
              title={title}
              description={description}
              code={code}
              codeWrapperClassName={
                title === "Jumping Cards"
                  ? "min-h-[520px]"
                  : "min-h-[420px]"
              }
              previewWrapperClassName={
                title === "Jumping Cards"
                  ? "items-start justify-start p-6 sm:p-10 min-h-[820px] sm:min-h-[900px]"
                  : "p-10 sm:p-12 min-h-[360px] sm:min-h-[440px]"
              }
            >
              {/* Use the same “cards section” look as your showcase where it matters */}
              {title === "Beam Card" ? (
                <Preview
                  avatars={[
                    "/Images/Avatar1.jpg",
                    "/Images/Avatar2.jpg",
                    "/Images/Avatar3.jpg",
                  ]}
                />
              ) : (
                <Preview />
              )}
            </ComponentPreview>
          ))}
        </div>

        <Footer />
      </div>
    </ComponentsLibraryLayout>
  );
}

