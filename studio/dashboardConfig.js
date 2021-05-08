export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '6096bf68395877b596e2d2c0',
                  title: 'Sanity Studio',
                  name: 'sanity-next-boilerplate-studio',
                  apiId: 'dc47eb4f-1aaa-4374-847e-eb8e1f1c1bfa'
                },
                {
                  buildHookId: '6096bf687d651baf378855a7',
                  title: 'Landing pages Website',
                  name: 'sanity-next-boilerplate',
                  apiId: '2d980f14-e8ad-4430-beb0-b5d8f2dccce9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Brydom/sanity-next-boilerplate',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-next-boilerplate.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
