const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, 'docs/.vuepress/dist')))
	.use('/',express.static(path.join(__dirname, 'docs/.vuepress/public')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
