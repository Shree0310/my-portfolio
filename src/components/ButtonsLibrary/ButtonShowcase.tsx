"use client";

import Heading from "@/components/Heading";
import SubHeading from "@/components/SubHeading";
import ComponentPreview from "../ComponentLibrary/ComponentPreview";
import GradientButton from "../Playground/Buttons/GradientButton";
import BorderBeamButton from "../Playground/Buttons/BorderBeamButton";
import HoverLiftButton from "../Playground/Buttons/HoverLiftButton";
import SecondaryButton from "../Playground/Buttons/SecondaryButton";
import DisabledButton from "../Playground/Buttons/DisabledButton";
import LinkButton from "../Playground/Buttons/LinkButton";
import IlluminoButton from "../Playground/Buttons/IlluminoButton";
import Animated3DButton from "../Playground/Buttons/Animated3DButton";
import GlowingButton from "../Playground/Buttons/GlowingButton";
import PulsatingButton from "../Playground/Buttons/PulsatingButton";
import { HeartButton, TrashButton, ShareButton } from "../Playground/Buttons/IconButton";
import CopyButton from "../Playground/Buttons/CopyButton";
import {
  gradientButtonCode,
  borderBeamButtonCode,
  hoverLiftButtonCode,
  secondaryButtonCode,
  disabledButtonCode,
  linkButtonCode,
  illuminoButtonCode,
  animated3DButtonCode,
  glowingButtonCode,
  pulsatingButtonCode,
  iconButtonCode,
  copyButtonCode,
  loginButtonCode,
} from "./ButtonCodesnippets";
import LoginButton from "../Playground/Buttons/LoginButton";

const ButtonsShowcase = () => {
  const previewWrapperClassName =
    "p-10 min-h-[260px] sm:min-h-[300px]";
  const codeWrapperClassName =
    "min-h-[320px] sm:min-h-[380px]";

  return (
    <div className="w-full space-y-10 p-4 sm:p-6 md:p-10">
      <Heading>Buttons Library</Heading>
      <SubHeading className="pt-0 md:pt-1">
        A collection of animated and stylized button components. Click <span className="font-semibold">Code</span> to copy the full snippet.
      </SubHeading>

      <ComponentPreview
        title="Gradient Button"
        description="A button with a gradient background and hover state."
        code={gradientButtonCode}
        previewWrapperClassName={previewWrapperClassName}
        codeWrapperClassName={codeWrapperClassName}
      >
        <div className="flex gap-4">
          <GradientButton>Click here</GradientButton>
          <GradientButton
            gradientFrom="from-purple-700"
            gradientVia="via-pink-600"
            gradientTo="to-purple-700"
          >
            Purple
          </GradientButton>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Border Beam Button"
        description="A button with an animated border beam effect."
        code={borderBeamButtonCode}
        previewWrapperClassName={previewWrapperClassName}
        codeWrapperClassName={codeWrapperClassName}
      >
        <div className="flex gap-4">
          <BorderBeamButton>Click here</BorderBeamButton>
          <BorderBeamButton beamColorFrom="#ec4899" beamColorTo="#8b5cf6">
            Pink to Violet
          </BorderBeamButton>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Hover Lift Button"
        description="A button that lifts up on hover with spring animation."
        code={hoverLiftButtonCode}
        previewWrapperClassName={previewWrapperClassName}
        codeWrapperClassName={codeWrapperClassName}
      >
        <div className="flex gap-4">
          <HoverLiftButton>Click here</HoverLiftButton>
          <HoverLiftButton liftDistance={-30}>Big Lift</HoverLiftButton>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Secondary Button"
        description="A solid secondary button with customizable colors."
        code={secondaryButtonCode}
        previewWrapperClassName={previewWrapperClassName}
        codeWrapperClassName={codeWrapperClassName}
      >
        <div className="flex gap-4">
          <SecondaryButton>Click here</SecondaryButton>
          <SecondaryButton>
            Slate
          </SecondaryButton>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Disabled Button"
        description="A button in disabled state with reduced opacity."
        code={disabledButtonCode}
        previewWrapperClassName={previewWrapperClassName}
        codeWrapperClassName={codeWrapperClassName}
      >
        <DisabledButton>Click here</DisabledButton>
      </ComponentPreview>

      <ComponentPreview
        title="Link Button"
        description="Text-only buttons with color variants."
        code={linkButtonCode}
        previewWrapperClassName={previewWrapperClassName}
        codeWrapperClassName={codeWrapperClassName}
      >
        <div className="flex flex-col gap-1">
          <LinkButton color="sky">Primary</LinkButton>
          <LinkButton color="orange">Secondary</LinkButton>
          <LinkButton color="green">Success</LinkButton>
          <LinkButton color="red">Danger</LinkButton>
          <LinkButton color="violet">Accent</LinkButton>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Illumino Button"
        description="A button with an illuminated underline glow effect."
        code={illuminoButtonCode}
        previewWrapperClassName={previewWrapperClassName}
        codeWrapperClassName={codeWrapperClassName}
      >
        <div className="flex gap-4">
          <IlluminoButton>Click here</IlluminoButton>
          <IlluminoButton glowColor="violet-500">Violet</IlluminoButton>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Animated 3D Button"
        description="A button with 3D rotation effect on hover."
        code={animated3DButtonCode}
        previewWrapperClassName={previewWrapperClassName}
        codeWrapperClassName={codeWrapperClassName}
      >
        <div className="flex gap-4">
          <Animated3DButton>Animate</Animated3DButton>
          <Animated3DButton
            rotateXOnHover={15}
            rotateYOnHover={20}
            shadowColor="#06b6d4"
            glowColor="cyan"
          >
            Cyan
          </Animated3DButton>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Glowing Button"
        description="A button with animated shadow glow effect."
        code={glowingButtonCode}
        previewWrapperClassName={previewWrapperClassName}
        codeWrapperClassName={codeWrapperClassName}
      >
        <div className="flex gap-4">
          <GlowingButton>Join</GlowingButton>
          <GlowingButton
            initialShadowColor="#ec4899"
            hoverShadowColor="#db2777"
            glowColor="pink-500"
          >
            Subscribe
          </GlowingButton>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Pulsating Button"
        description="A button with pulsating ring animation on hover."
        code={pulsatingButtonCode}
        previewWrapperClassName={previewWrapperClassName}
        codeWrapperClassName={codeWrapperClassName}
      >
        <div className="flex gap-4">
          <PulsatingButton>Invite this person</PulsatingButton>
          <PulsatingButton
            pulseCount={4}
            pulseDuration={0.8}
            pulseColor="bg-red-400/30"
          >
            Urgent
          </PulsatingButton>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Icon Buttons"
        description="Icon-only buttons with pre-made variants."
        code={iconButtonCode}
        previewWrapperClassName={previewWrapperClassName}
        codeWrapperClassName={codeWrapperClassName}
      >
        <div className="flex gap-2">
          <HeartButton />
          <TrashButton />
          <ShareButton />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Copy Button"
        description="A button with animated icon transition between copy and checkmark states."
        code={copyButtonCode}
        previewWrapperClassName={previewWrapperClassName}
        codeWrapperClassName={codeWrapperClassName}
      >
        <CopyButton />
      </ComponentPreview>
      <ComponentPreview
        title="Login Button"
        description="A button with initial text, then a loading spinner and and final state text"
        code={loginButtonCode}
        previewWrapperClassName={previewWrapperClassName}
        codeWrapperClassName={codeWrapperClassName}>
        <LoginButton/>
      </ComponentPreview>
    </div>
  );
};

export default ButtonsShowcase;