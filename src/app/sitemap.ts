import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sumac.systems'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/thank-you`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.1, // Low priority for thank you page
    },
    {
      url: `${baseUrl}/client-portal`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.2,
    },
    // Dynamic service pages
    {
      url: `${baseUrl}/services/web-design`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/ai-seo`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/google-business-profile`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/automations`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
    }
  ]
}
