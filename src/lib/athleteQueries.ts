export const FEATURED_ATHLETES_QUERY = `
  *[_type == "athlete" && published == true] | order(_createdAt desc) [0...3] {
    _id, name, slug, photo, school, graduationYear, sport, position, tier
  }
`;

export const ALL_ATHLETES_QUERY = `
  *[_type == "athlete" && published == true] | order(_createdAt desc) {
    _id,
    name,
    slug,
    photo,
    school,
    graduationYear,
    sport,
    position,
    tier
  }
`;

export const ATHLETE_BY_SLUG_QUERY = `
  *[_type == "athlete" && slug.current == $slug && published == true][0] {
    _id,
    name,
    slug,
    photo,
    bio,
    school,
    graduationYear,
    sport,
    position,
    highlightVideoUrl,
    photos,
    tier,
    performanceMetrics,
    awards,
    socialLinks,
    recruitingInfo
  }
`;
