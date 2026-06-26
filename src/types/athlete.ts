export type AthletePhoto = {
  _key: string;
  asset: { _ref: string };
  alt?: string;
};

export type Athlete = {
  _id: string;
  name: string;
  slug: { current: string };
  photo: { asset: { _ref: string } };
  bio: string;
  school: string;
  graduationYear: number;
  sport: string;
  position: string;
  highlightVideoUrl: string;
  photos: AthletePhoto[];
  tier: "basic" | "pro" | "elite";
  published: boolean;

  // Pro / Elite only
  performanceMetrics?: { label: string; value: string }[];
  awards?: string[];
  socialLinks?: { platform: string; url: string }[];

  // Elite only
  recruitingInfo?: string;
};
