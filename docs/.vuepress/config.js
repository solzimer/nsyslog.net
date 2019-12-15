module.exports = {
	theme: 'thindark',
	plugins: [
    ['@dovyp/vuepress-plugin-clipboard-copy', true],
		['@vuepress/back-to-top', true],
		require('./plugins/apidocs')
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
			description: 'El agente de la próxima generación',

		}
	},

  themeConfig: {
		label : "English",
    sidebar: {
			'/intro/' : ['install','basics','example1','example2','commands','cli','expressions'],
			'/config/' : ['main','components','include','properties','config','inputs','processors','transporters'],
		},
    nav: [
      { text: 'Start', link: '/intro/install' },
			{ text: 'Docs', items: [
					{text:'Introduction', link: '/intro/basics'},
					{text:'Configuration', link: '/config/main'}
				]
			},
			{ text: 'API docs', type:'external', link:"/jsdoc/index.html", target:"_blank", rel:"jsdocs"},
      { text: 'Download', link: 'https://github.com/solzimer/nsyslog' }
    ],

		locales : {
			'/' : { label: 'English' },
			'/es/' : {
				label : "Español",
				sidebar: {
					'/es/intro/' : ['install','basics','example1','example2','commands','cli','expressions'],
					'/es/config/' : ['main','components','include','properties','config','inputs','processors','transporters'],
				},
				nav : [
		      { text: 'Inicio', link: '/es/intro/install' },
					{ text: 'Docs', items: [
							{text:'Introducción', link: '/es/intro/basics'},
							{text:'Configuración', link: '/es/config/main'},
							{text:'Fuentes', link: '/es/inputs/index'},
							{text:'Procesadores', link: '/es/processors/index'},
							{text:'Transportes', link: '/es/transporters/index'},
						]
					},
					{ text: 'API docs', type:'external', link:"/jsdoc/index.html", target:"_blank", rel:"jsdocs"},
		      { text: 'Descarga', link: 'https://github.com/solzimer/nsyslog' }
		    ]
			}
		}
  }
}
