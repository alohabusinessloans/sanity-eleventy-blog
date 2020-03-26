export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e7cd46f81bb7901e3f6b787',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-xy3i32pf',
                  apiId: '11380c0e-4623-4e43-b42d-64615e096f35'
                },
                {
                  buildHookId: '5e7cd46f81bb790237f6b787',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-7cpj7xrb',
                  apiId: '0f1afa46-a0ec-4c0d-afbe-ecf32f5ca1a3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alohabusinessloans/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-7cpj7xrb.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
