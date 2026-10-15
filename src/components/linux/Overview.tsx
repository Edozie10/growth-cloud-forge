import { Play } from "lucide-react";
import { PROGRAM_VIDEO_URL } from "@/components/linux/constants";
import thumbnail from "@/assets/Red_Hat_Linux_Program_Overview.png.asset.json";

const Overview = () => {
  return (
    <section id="overview" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Make your next training investment a <span className="gradient-text">deliberate one</span>
          </h2>
          <p className="text-muted-foreground mb-10">
            Watch the video to meet your instructor, explore the program, and understand the skills,
            schedule, and financial commitment before you decide.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <a
            href={PROGRAM_VIDEO_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch the program overview video"
            className="group relative block aspect-video w-full overflow-hidden rounded-lg border border-border bg-card focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <img
              src={thumbnail.url}
              alt="Red Hat Linux Program Overview — Cohort 3"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/10" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 shadow-glow transition-transform duration-300 group-hover:scale-110">
                <Play className="h-7 w-7 translate-x-0.5 text-primary-foreground" fill="currentColor" />
              </span>
            </span>
            <span className="absolute bottom-3 left-4 font-mono text-xs uppercase tracking-wide text-white/80">
              Program overview
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Overview;
