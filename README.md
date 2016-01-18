# Aurora Hugo Theme
Aurora is an elegant and minimalistic theme for the [Hugo](http://gohugo.io) static website engine.

![Aurora Theme Screenshot](https://raw.github.com/coryshaw/hugo-aurora-theme/master/images/screenshot.png)

Aurora was built on top of the [Skeleton](http://getskeleton.com/) CSS framework. It contains minimal base styles that provide mobile and tablet responsiveness, a nice grid system, and that's about it!

From there I added on a few custom styles to make the theme what it is.

## Contents

- [Installation](#installation)
- [Features](#features)
- [Getting started](#getting-started)
    - [The config file](#the-config-file)
    - [Change the hero background](#change-the-hero-background)
- [Contributing](#contributing)
- [License](#license)


## Installation

Inside the folder of your Hugo site run:

    $ mkdir themes
    $ cd themes
    $ git clone https://github.com/coryshaw/hugo-aurora-theme.git

For more information read the official [setup guide](//gohugo.io/overview/installing/) of Hugo.

## Features

- Add your Google Analytics ID to add tracking code
- No JavaScript
- Copyright in footer
- Sub-footer template for adding whatever content you want
- Dynamically generated primary navigation from your config.toml file
- Translatable strings via config.toml file
- Customize the background image for each page
- Give photo credit for every image you use that's not your own
- Loads faster than Google :)


## Getting started

After installing the Aurora Theme successfully it requires a just a few more steps to get your site running.

A good starting point is to take the contents of the "exampleSite" folder and place it at the root level of your site, then run "hugo server" in your terminal.


### The config file

Take a look inside the [`exampleSite`](//github.com/coryshaw/hugo-aurora-theme/tree/master/exampleSite) folder of this theme. You'll find a file called [`config.toml`](//github.com/coryshaw/hugo-aurora-theme/blob/master/exampleSite/config.toml). To use it, copy the [`config.toml`](//github.com/coryshaw/hugo-aurora-theme/blob/master/exampleSite/config.toml) in the root folder of your Hugo site. Feel free to change the strings in this theme.

Inside the config file you can:

- Change the copyright text in your footer
- Enable Google Analytics tracking for your site
- Modify the background image and photo credit for your homepage
- Define your primary navigation
- Modify the background image and photo credit for your list page
- Customize or translate the theme's strings

```
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
```

### Change the hero background

Every page of the Aurora theme can (and is meant to) have a different hero background image. This is the main personality of your site. When you generate a new page, a default image that comes with the theme is used, but I would encourage you to change it.

To specify your own hero background image for generated content pages, see the TOML front matter of your new page. If you place a new image in your site's static folder, and link to it in the following front matter...


```
bgimgurl = "/images/coryshaw_lava.jpg"
photocredit = "Cory Shaw"
```

...Aurora will use your new image instead of the default.

On your Homepage, the Hero block is a bit taller. To modify your homepage hero image, you need to modify your site's config.toml using the example [`config.toml`](//github.com/coryshaw/hugo-aurora-theme/blob/master/exampleSite/config.toml) that comes with the theme...

```
[params.home]
		backgroundimage = "/images/coryshaw_boulder.jpg"
		photocredit = "Beau Rogers"
```

## Contributing

Did you find a bug or have an idea for a new feature? Feel free to use the [issue tracker](//github.com/coryshaw/hugo-aurora-theme/issues) to let me know, or make  a [pull request](//github.com/coryshaw/hugo-aurora-theme/pulls).


## License

This theme is released under the MIT license. For more information read the [License](//github.com/coryshaw/hugo-aurora-theme/blob/master/LICENSE.md).




