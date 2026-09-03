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
          <div className="aspect-video w-full rounded-lg border border-border bg-card flex items-center justify-center">
            <p className="font-mono text-sm text-muted-foreground">Program overview video coming soon</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
