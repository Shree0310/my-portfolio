"use client";

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

const PreviewBlock = ({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">{title}</h3>
        {description && (
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{description}</p>
        )}
      </div>

      <div className="flex min-h-[200px] items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 p-8 dark:border-neutral-700 dark:bg-neutral-900">
        {children}
      </div>
    </div>
  );
};

const ButtonsPreviewOnly = () => {
  return (
    <div className="w-full p-4 sm:p-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100">Buttons</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          A collection of animated and stylized button components.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch justify-items-stretch">
        <PreviewBlock
          title="Gradient Button"
          description="A button with a gradient background and hover state."
        >
          <div className="flex gap-4">
            <GradientButton>Click here</GradientButton>
            <GradientButton gradientFrom="from-purple-700" gradientVia="via-pink-600" gradientTo="to-purple-700">
              Purple
            </GradientButton>
          </div>
        </PreviewBlock>

        <PreviewBlock
          title="Border Beam Button"
          description="A button with an animated border beam effect."
        >
          <div className="flex gap-4">
            <BorderBeamButton>Click here</BorderBeamButton>
            <BorderBeamButton beamColorFrom="#ec4899" beamColorTo="#8b5cf6">
              Pink to Violet
            </BorderBeamButton>
          </div>
        </PreviewBlock>

        <PreviewBlock
          title="Hover Lift Button"
          description="A button that lifts up on hover with spring animation."
        >
          <div className="flex gap-4">
            <HoverLiftButton>Click here</HoverLiftButton>
            <HoverLiftButton liftDistance={-30}>Big Lift</HoverLiftButton>
          </div>
        </PreviewBlock>

        <PreviewBlock
          title="Secondary Button"
          description="A solid secondary button with customizable colors."
        >
          <div className="flex gap-4">
            <SecondaryButton>Click here</SecondaryButton>
            <SecondaryButton>Slate</SecondaryButton>
          </div>
        </PreviewBlock>

        <PreviewBlock
          title="Disabled Button"
          description="A button in disabled state with reduced opacity."
        >
          <DisabledButton>Click here</DisabledButton>
        </PreviewBlock>

        <PreviewBlock title="Link Button" description="Text-only buttons with color variants.">
          <div className="flex flex-col gap-1">
            <LinkButton color="sky">Primary</LinkButton>
            <LinkButton color="orange">Secondary</LinkButton>
            <LinkButton color="green">Success</LinkButton>
            <LinkButton color="red">Danger</LinkButton>
            <LinkButton color="violet">Accent</LinkButton>
          </div>
        </PreviewBlock>

        <PreviewBlock
          title="Illumino Button"
          description="A button with an illuminated underline glow effect."
        >
          <div className="flex gap-4">
            <IlluminoButton>Click here</IlluminoButton>
            <IlluminoButton glowColor="violet-500">Violet</IlluminoButton>
          </div>
        </PreviewBlock>

        <PreviewBlock
          title="Animated 3D Button"
          description="A button with 3D rotation effect on hover."
        >
          <div className="flex gap-4">
            <Animated3DButton>Animate</Animated3DButton>
            <Animated3DButton rotateXOnHover={15} rotateYOnHover={20} shadowColor="#06b6d4" glowColor="cyan">
              Cyan
            </Animated3DButton>
          </div>
        </PreviewBlock>

        <PreviewBlock
          title="Glowing Button"
          description="A button with animated shadow glow effect."
        >
          <div className="flex gap-4">
            <GlowingButton>Join</GlowingButton>
            <GlowingButton initialShadowColor="#ec4899" hoverShadowColor="#db2777" glowColor="pink-500">
              Subscribe
            </GlowingButton>
          </div>
        </PreviewBlock>

        <PreviewBlock
          title="Pulsating Button"
          description="A button with pulsating ring animation on hover."
        >
          <div className="flex gap-4">
            <PulsatingButton>Invite this person</PulsatingButton>
            <PulsatingButton pulseCount={4} pulseDuration={0.8} pulseColor="bg-red-400/30">
              Urgent
            </PulsatingButton>
          </div>
        </PreviewBlock>

        <PreviewBlock title="Icon Buttons" description="Icon-only buttons with pre-made variants.">
          <div className="flex gap-2">
            <HeartButton />
            <TrashButton />
            <ShareButton />
          </div>
        </PreviewBlock>
      </div>
    </div>
  );
};

export default ButtonsPreviewOnly;

