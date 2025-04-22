import glob from 'fast-glob'

interface Article {
  title: string
  description: string
  author?: string
  date: string
}

export interface ArticleWithSlug extends Article {
  slug: string
}

export async function getAllArticles() {

  let articles = [
    {
      author: 'Saurabh Punia',
      date: '2025-02-04',
      title: 'Building Scalable Web Applications with Laravel and Vue.js',
      description:
        'Laravel and Vue.js have become a powerful combination for modern web development, offering a smooth developer experience while ensuring robust backend functionality and interactive front-end capabilities.',
      slug: 'building-scalable-application-with-laravel-and-vue',
    },
    {
      author: 'Saurabh Punia',
      date: '2025-04-22',
      title: 'Multi-Tenancy with Role and Permission Management in Laravel',
      description:
        'Managing roles and permissions in a multi-tenant Laravel application can be tricky—especially when each tenant needs its own isolated user roles and permissions. Thankfully, the powerful combo of spatie/laravel-permission and stancl/tenancy makes this not just possible, but elegant.',
      slug: 'multi-tenancy-and-rbac-with-laravel',
    }
  ]

  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}
