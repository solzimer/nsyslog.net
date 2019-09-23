module.exports = {
	theme: 'thindark',
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
    sidebar: 'auto',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/intro/install' },
      { text: 'Download', link: 'https://github.com/solzimer/nsyslog' }
    ]
  }
}
