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
                  buildHookId: '60da24e4d3c1ad340e237b55',
                  title: 'Sanity Studio',
                  name: 'thephotogenicbug-sanityio-studio',
                  apiId: 'bc16c081-67b6-4e13-b4fe-66f0393ed1b4'
                },
                {
                  buildHookId: '60da24e57556542da1a4bb9e',
                  title: 'Blog Website',
                  name: 'thephotogenicbug-sanityio',
                  apiId: 'b3310c33-346b-485a-9b45-864515f5db92'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thephotogenicbug/Thephotogenicbug-sanityio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://thephotogenicbug-sanityio.netlify.app', category: 'apps'}
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
