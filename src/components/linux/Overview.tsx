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
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <span className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
            <span className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
              <Play className="h-4 w-4 translate-x-0.5" fill="currentColor" />
              Watch the program overview
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Overview;
