import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";

const heroMedia = {
  src: "https://www.pexels.com/download/video/12956438/",
  poster:
    "https://images.pexels.com/photos/37178237/pexels-photo-37178237.jpeg?auto=compress&cs=tinysrgb&w=1280",
  background:
    "https://images.pexels.com/photos/37178237/pexels-photo-37178237.jpeg?auto=compress&cs=tinysrgb&w=1920",
  title: "Timeless Interior Vision",
  date: "Baharnani Office",
  scrollToExpand: "Scroll to expand",
};

export function HomeScrollHero() {
  return (
    <ScrollExpandMedia
      mediaType="video"
      mediaSrc={heroMedia.src}
      posterSrc={heroMedia.poster}
      bgImageSrc={heroMedia.background}
      title={heroMedia.title}
      date={heroMedia.date}
      scrollToExpand={heroMedia.scrollToExpand}
      textBlend
    >
      <div className="mx-auto max-w-4xl rounded-2xl bg-white/80 p-6 backdrop-blur-sm md:p-8">
        <h2 className="text-2xl font-recia font-semibold text-zinc-900 md:text-3xl">Design That Feels Personal</h2>
        <p className="mt-4 text-base leading-7 text-zinc-700">
          We design elegant residential and office interiors with a balance of warmth, function, and
          enduring style. Explore our approach and discover spaces crafted around real life.
        </p>
      </div>
    </ScrollExpandMedia>
  );
}
