export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '6280d30f8e33d520762f939e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-mgiempts',
                  apiId: 'c85a595b-d8f7-48b2-83b5-56054c95932b'
                },
                {
                  buildHookId: '6280d3109cfdfb1d7af49e86',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-a6rnt7br',
                  apiId: '275337c6-ff00-48ba-8ca5-b3b4b8b00b4a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aleballia/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-a6rnt7br.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
