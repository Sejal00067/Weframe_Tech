export default function sitemap() {
  return [
    {
      url: `${ProcessingInstruction.env.NEXT_PUBLIC_BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${ProcessingInstruction.env_NEXT_PUBLIC_BASE_URL}/produitsingle`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}