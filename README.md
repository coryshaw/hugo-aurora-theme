# Aurora Hugo Theme

Aurora is an elegant and minimalistic theme for the [Hugo](http://gohugo.io) static website engine, designed to offer a delightful reading and writing experience. Built on top of the lightweight [Skeleton](http://getskeleton.com/) CSS framework, Aurora provides a responsive layout, a simple grid system, and custom styles that define its unique look.

![Aurora Theme Screenshot](https://raw.github.com/coryshaw/hugo-aurora-theme/master/images/screenshot.png)

## Contents

- [Installation](#installation)
- [As a Hugo Module](#as-a-hugo-module)
- [Features](#features)
- [Getting Started](#getting-started)
  - [The Config File](#the-config-file)
  - [Change the Hero Background](#change-the-hero-background)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install Aurora as a traditional theme:

1. Inside your Hugo site directory, run:

   ```bash
   mkdir -p themes
   cd themes
   git clone https://github.com/coryshaw/hugo-aurora-theme.git aurora
   ```

2. Add `theme = "aurora"` to your site's `config.toml`.

For more details, refer to the official [Hugo setup guide](https://gohugo.io/getting-started/installing/).

## As a Hugo Module

To use Aurora as a Hugo Module:

1. Initialize your Hugo site as a Hugo Module (if not already done):

   ```bash
   hugo mod init github.com/youruser/yourproject
   ```

2. Add Aurora to your `config.toml`:

   ```toml
   [module]
     [[module.imports]]
     path = "github.com/coryshaw/hugo-aurora-theme"
   ```

3. Run `hugo mod get -u` to get the module and `hugo server` to start your site.

## Features

- Minimalistic design focusing on content
- Mobile and tablet responsive
- Google Analytics integration
- No JavaScript for faster loading times
- Copyright in footer
- Sub-footer template for additional content
- Dynamically generated primary navigation
- Translatable strings
- Customizable background images
- Photo credits for images

## Getting Started

After successfully installing the Aurora Theme, follow these steps to customize your site:

### The Config File

Refer to the [`exampleSite`](https://github.com/coryshaw/hugo-aurora-theme/tree/master/exampleSite) folder for a sample `config.toml`. Copy this file to the root of your Hugo site and adjust the settings to suit your preferences.

```toml
baseurl = "http://example.com/"
languageCode = "en-us"
title = "My Awesome Site"
theme = "aurora"
[taxonomies]
  tag = "tags"

[params]
  # Footer copyright text
  copyright = "My Name"

  # Google Analytics tracking ID
  googleanalyticsid = "UA-00000-00"

  # Custom hero background image and photo credit for the home page
  [params.home]
    backgroundimage = "/images/home_bg.jpg"
    photocredit = "Photographer Name"

  # Primary navigation links
  [[params.navigation]]
    name = "Home"
    path = "/"
  [[params.navigation]]
    name = "About"
    path = "/about/"
  [[params.navigation]]
    name = "Posts"
    path = "/posts/"

  # Customize or translate theme strings
  [params.strings]
    copyright = "Copyright"
    photocredit = "Photo Credit"
    tags = "Tags"
    published = "Published"
    updated = "Updated"
```

### Change the Hero Background

Customize the hero background for each page by specifying an image URL and photo credit in the page's front matter:

```toml
bgimgurl = "/images/page_bg.jpg"
photocredit = "Photographer Name"
```

## Contributing

Found a bug or have a feature request? Use the [issue tracker](https://github.com/coryshaw/hugo-aurora-theme/issues) to let me know, or submit a [pull request](https://github.com/coryshaw/hugo-aurora-theme/pulls).

## License

This theme is released under the MIT license. For more information read the [License](https://github.com/coryshaw/hugo-aurora-theme/blob/master/LICENSE.md).

## Customizing CSS theme via LESS Styles

Install the less-watch-compiler globally:

`npm install -g less less-watch-compiler`

Run the compiler in the theme directory:

`less-watch-compiler`

Make changes to less files and it will be auto compiled
