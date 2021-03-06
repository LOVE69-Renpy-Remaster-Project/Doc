module.exports = {
    title: 'Love69 Ren’Py Remaster Project Doc Website',
    description: 'Love69 Ren’Py Remaster Project Documentation,Love69 Ren’Py Remaster Project 文档',
    theme: 'reco',
    base: '/Doc/',
    markdown: {
      lineNumbers:true
    },
    
    head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'author', content: 'Luckykeeper' }],
    ['meta', { name: 'keywords', content: 'LOVE69,LOVEPOTION SIXTYNINE,Ren’py,汉化,移植,跨平台,文档,Documentation'}],
    ['meta', { name: 'description', content: 'LOVEPOTION SIXTYNINE （LOVE69） Ren’py 汉化移植项目的文档网站'}],
    ['meta', { name: 'theme-color', content: '#42b983' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    plugins: [
      [
        '@vuepress/google-analytics',
        {
          'ga': 'UA-221056269-1' // UA-00000000-0
        }
      ],
      ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
        }
    }],
    // 代码复制弹窗插件
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",
      tip: {
          content: "复制成功!"
      }
    }]],
    locales: {
        '/': {
          lang: 'zh-CN'
        }
      },
      
      themeConfig: {
        noFoundPageByTencent: false,
        subSidebar: 'auto',
        sidebar: {
          '/intro/': [
            '',
            '各文档详细介绍',
            '关于本站以及开始本项目的初衷'
          ],'/standard/': [
              '',
              '目录组织结构',
              '代码规范',
              '可用方法'
            ],'/dev/': [
              '',
              '解包',
              '环境准备',
              '常见问题',
              '快速上手',
              '写一个非常简单的对话'
            ],'/chinese-localization/': [
              '',
              '汉化',
              '移植',
              '原作分析',
              '扩展内容：Galgame常见引擎介绍'
            ],'/renpy/': [
              '',
              '导航',
              '添加不同大小的小头像',
              '已读未读文本不同颜色',
              '文本描边',
              'CTC动画',
              '人物语音不中断',
              'QuickMenu（快捷菜单）的制作',
              '读取最新存档功能',
              '制作主菜单',
              '魔改存读档界面',
              '设置和持久化变量',
              '历史记录跳跃',
              '周目BGM切换',
              '制作Gallery',
              '制作音乐回放',
              '制作剧情回想',
              '动画效果制作——基础篇',
              '动画效果制作——CDD篇',
              'ATL动画和转场',
              'Ver1.0文档结语',
              '附录：小技巧',
            ]},
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
                { text: '文档首页', link: '/docs/' , icon:'reco-home'},
                { text: '介绍', link: '/intro/' , icon:'reco-document'},
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
          ],  
      }
}
