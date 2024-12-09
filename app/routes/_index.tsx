import BlurFadeText from "@/components/magicui/blur-fade-text";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "minimal blog" },
    { name: "description", content: "Hrushi Borhade - blog!" },
  ];
};

const BLUR_FADE_DELAY = 0.04;

export default function Index() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 dark">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none "
                yOffset={8}
                text={`Hi, I'm Hrushi 👋`}
              />
              <BlurFadeText
                className="max-w-[550px] md:text-base font-poppins"
                delay={BLUR_FADE_DELAY}
                text={`Software engineer who loves building things that matter.
Fascinated by human psychology, business, and the art of storytelling.
Usually caffeinated, occasionally filming, perpetually curious`}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
