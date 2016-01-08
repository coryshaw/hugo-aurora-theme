# Aurora Hugo Theme
Aurora is an elegant and minimalistic theme for the [Hugo](http://gohugo.io) static website engine.

![Aurora Theme Screenshot](https://raw.github.com/coryshaw/aurora/master/exampleSite/aurora_hugo_theme_screenshot.jpg)

Aurora was built on top of the [Skeleton](http://getskeleton.com/) CSS framework. It contains minimal base styles that provide mobile and tablet responsiveness, a nice grid system, and that's about it!

From there I added on a few custom styles to make the theme what it is.

**Features**

- Add your Google Analytics ID to add tracking code
- Absolutely zero JavaScript (for now)
- Copyright in footer
- Sub-footer template for adding whatever content you want
- Dynamically generated primary navigation from your config.toml file
- Translatable strings via config.toml file
- Customize the background image for each page
- Give photo credit for every image you use that's not your own

**config.toml**

baseurl = "http://mysite.com/"
languageCode = "en-us"
title = "My Awesome Site"
theme = "aurora"
[taxonomies]
	tag = "tags"

[params]
	# Copyright text that displays in your footer next to the current year
	copyright = "My Name"

	# Enable Google Analytics by inserting your tracking code
	googleanalyticsid = "UA-00000-00"

	# Home/Index page background image and photo credit
	[params.home]
		backgroundimage = "/images/coryshaw_carribbean.jpg"
		photocredit = "Cory Shaw"

	# Define your primary navigation
	[[params.navigation]]
		name = "Home"
		path = "/"
	[[params.navigation]]
		name = "About"
		path = "/about/"
	[[params.navigation]]
		name = "Posts"
		path = "/posts/"

	# Background Image and photo credit for your list of posts page
	[params.list]
		backgroundimage = "/images/coryshaw_carribbean.jpg"
		photocredit = "Cory Shaw"

	# Customize or translate strings
	[params.strings]
		copyright = "Copyright"
		photocredit = "Photo Credit"
		tags = "Tags"
		published = "Published"
		updated = "Updated"
