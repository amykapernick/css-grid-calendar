module.exports = eleventyConfig => {
	// Static resources
	eleventyConfig.addPassthroughCopy({ 'resources/fonts': 'fonts' })
	eleventyConfig.addPassthroughCopy({ 'resources/css': 'css' })
	eleventyConfig.addPassthroughCopy({ 'resources/img': 'img' })

	return {
		dir: {
			data: '_data',
		},
		templateFormats: ['njk', 'html', 'css'],
		htmlTemplateEngine: 'njk',
		dataTemplateEngine: 'njk',
	}
}