import { LiquidEffectAnimation } from "@/components/ui/liquid-effect-animation";

export default function LiquidEffect() {
  return (
    <LiquidEffectAnimation
      text={["Liquid", "Effect"]}
      subText="Interactive UI Component"
      tagline="Built with Three.js  •  React  •  Tailwind CSS"
      backgroundColor="#fafafa"
      textColor="#1d1d1f"
      className="rounded-xl"
    />
  );
}