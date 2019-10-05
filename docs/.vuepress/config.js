module.exports = {
	theme: 'thindark',
	plugins: [
    ['@dovyp/vuepress-plugin-clipboard-copy', true],
		['@vuepress/back-to-top', true],
	],
	locales: {
		'/': {
			lang: 'en-US', // this will be set as the lang attribute on <html>
			title: 'nsyslog',
			description: 'The next gen log agent'
		},
		'/es/': {
			lang: 'es-ES',
			title: 'nsyslog',
			description: 'El agente de la próxima generación'
		}
	},

  themeConfig: {
    sidebar: {
			'/es/intro/' : ['install','basics','example1','example2','commands','cli','expressions'],
		},
    nav: [
      { text: 'Start', link: '/intro/install' },
			{ text: 'Docs', items: [
					{text:'Introduction', link: '/intro/basics'},
					{text:'Configuration', link: '/config/basic'}
				]
			},
      { text: 'Download', link: 'https://github.com/solzimer/nsyslog' }
    ]
  }
}
