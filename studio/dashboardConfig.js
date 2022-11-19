export default {
  widgets: [
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
                  buildHookId: '637945ea662f72179c089ded',
                  title: 'Sanity Studio',
                  name: 'osl-hub-sanity-studio',
                  apiId: '3dfc1932-d40c-42e8-b123-797d9fd0e1a1'
                },
                {
                  buildHookId: '637945eabd89442d6f0dcbe4',
                  title: 'Blog Website',
                  name: 'osl-hub-sanity',
                  apiId: '01570b0c-2b21-49dc-8b55-05b3c594168e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nofurtherinformation/osl-hub-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://osl-hub-sanity.netlify.app', category: 'apps'}
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
