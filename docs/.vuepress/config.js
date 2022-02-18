module.exports = {
    title: 'Love69 Ren’Py Remaster Project Doc Website',
    description: 'Love69 Ren’Py Remaster Project Documentation,Love69 Ren’Py Remaster Project 文档',
    theme: 'reco',
    base: '/Doc/',
    head: [
    ['link', { rel: 'icon', href: '/images/项目组logo_smallsize.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'author', content: 'Luckykeeper' }],
    ['meta', { name: 'keywords', content: 'LOVE69,LOVEPOTION SIXTYNINE,Ren’py,汉化,移植,跨平台,文档,Documentation'}],
    ['meta', { name: 'description', content: 'LOVEPOTION SIXTYNINE （LOVE69） Ren’py 汉化移植项目的文档网站'}],
    ['meta', { name: 'theme-color', content: '#42b983' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/项目组logo_smallsize.png' }],
    ],
    locales: {
        '/': {
          lang: 'zh-CN'
        }
      },
      themeConfig: {
        noFoundPageByTencent: false,
        subSidebar: 'auto',
        sidebar: {
            '/standard/': [
              '',
              '目录组织'
            ],
          },
        vssueConfig: {
            platform: 'github',
            owner: 'LOVE69-Renpy-Remaster-Project',
            repo: 'Doc',
            clientId: '1cd4ed1eb3240fb3ac49',
            clientSecret: '00fdc3435f6a1bd301ba2b6986d3343452c45b3d',
            autoCreateIssue: true,
            admins: 'luckykeeper'
          },
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'luckykeeper/LOVE69_renpy_remaster',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'GitHub',icon:'reco-github',

        // 以下为可选的编辑链接选项

        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'LOVE69-Renpy-Remaster-Project/Doc',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'main',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '在 GitHub 上编辑' ,
        logo: '/images/项目组logo_smallsize.png',
        startYear: '2021',
        author: 'Luckykeeper',
        authorAvatar: '/images/header-tou.jpg',
        lastUpdated: '最后更新时间',
        // algolia: {
        //     apiKey: 'd03dff9e4b29ca7c8c240f1d78b9b14b',
        //     indexName: 'Love69_Doc_Website',
        //     // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
        //     appId: 'MO2AUWDNT8'
        // },
        nav: [
            {
              text: '文档' , icon:'reco-document',
              ariaLabel: 'Document Menu',
              items: [
                { text: '代码规范', link: '/standard/' , icon:'reco-document'},
                { text: '二次开发/二创', link: '/dev/' , icon:'reco-document'},
                { text: '汉化、移植', link: '/chinese-localization/' , icon:'reco-document'},
                { text: 'Ren’Py 实例学习', link: '/renpy/' , icon:'reco-document'}
              ],
              
            },
            {text: '作者博客', link: 'https://luckykeeper.site', target:'_blank' ,icon:'reco-home'},
            {
              text: '网站源' , icon:'reco-menu',
              ariaLabel: 'Site',
              items: [
                { text: 'GitHub-Pages', link: 'https://love69-renpy-remaster-project.github.io/Doc/'},
                { text: '国内镜像站（请不要在镜像站登录评论组件）', link: 'https://love69doc.luckykeeper.site:44443/Doc/'}],
            },
          ]
      }
}