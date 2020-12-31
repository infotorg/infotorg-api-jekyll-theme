# Jekyll Infotorg APIs theme Quickstart
> Scaffold for a basic Jekyll theme for use as a reference or template

[![Ruby - >=2.3](https://img.shields.io/badge/Ruby->=2.3-green?logo=ruby&logoColor=white)](https://ruby-lang.org)
[![Jekyll - 3.9](https://img.shields.io/badge/Jekyll-3.9-green?logo=jekyll&logoColor=white)](https://jekyllrb.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green)](#license)

![Theme screenshot](screenshot.png)

## How to use this project

### Quickstart

Create a new project from this template. Or just use the code or docs here as a reference.

<div align="center">

[![Use this template](https://img.shields.io/badge/Use_this_template-2ea44f?style=for-the-badge&logo=github)](https://github.com/coderua/infotorg-api-jekyll-theme/generate)

</div>

### Demo

View a live demo on GH Pages:

<div align="center">

[![GH Pages - View demo](https://img.shields.io/badge/GH_Pages-View_demo-green?style=for-the-badge)](https://coderua.github.io/infotorg-api-jekyll-theme/)

</div>

## What is a Jekyll theme?

If you build a Jekyll site, you'll typically use a theme to style your site or at least give a base which you and customize on top of.

A theme is a way of packaging layout files, CSS styling and includes files to be installed in another Jekyll project. A theme might be made from scratch or based on a static HTML. A theme is a great way of making styling reusable across projects by you and other people.

A good example of a theme is Minima, which is the default theme used when running `jekyll new PATH`.

[![jekyll - minima](https://img.shields.io/static/v1?label=jekyll&message=minima&color=blue&logo=github)](https://github.com/jekyll/minima)

## About

### Where this project comes from

The theme scaffold was generated with this command and Jekyll 4:

```sh
$ jekyll new NAME
```

### Package a theme

The part that allows this project gem to be packaged as an installable gem-based theme is this file:

- [infotorg-api-jekyll-theme.gemspec](/infotorg-api-jekyll-theme.gemspec)

The other parts like the config and Gemfile or the layout and includes directories are standard for a Jekyll project.

Resources:

- [Creating a gem-based theme](https://jekyllrb.com/docs/themes/#creating-a-gem-based-theme) in Jekyll docs.
- [Publishing your theme](https://jekyllrb.com/docs/themes/#publishing-your-theme) in Jekyll docs.
- [Adding a theme to your GitHub Pages site using Jekyll](https://help.github.com/en/github/working-with-github-pages/adding-a-theme-to-your-github-pages-site-using-jekyll) guide on Github's help.

## Installation
>  Install this theme in your project

Two approaches are covered for installing the theme. The Remote Theme approach is necessary for plain GH Pages setup, while the second approach needs some kind of CI like GitHub Actions or Netlify. Both require only a few lines of code.

### GH Pages Remote Theme flow

Only a few standard themes are available on the locked GH Pages environment. So you must use this Remote Theme plugin to fetch your custom theme.

Use the [remote theme](https://github.com/benbalter/jekyll-remote-theme) approach to load a theme using GitHub details.

`_config.yml`
```yaml
  ####
  # --- Required configuration ---
  ####

  # Set a branch name or version at the `remote_theme` value e.g. `@main` or `@v1.0.0`.
  # Be careful if you omit the branch then automatically will be used `master`. 
  remote_theme: "infotorg/infotorg-api-jekyll-theme@main"
  plugins:
  - jekyll-remote-theme
  - jekyll-seo-tag
  
  ####
  # --- Optional configuration ---
  ####

  # --- Site defaults configuration ---
  defaults:
    - scope:
        path: ""
      values:
        # Default layout for any page that doesn't contain 'layout' option in the Front Matter.
        # (https://jekyllrb.com/docs/step-by-step/03-front-matter/) 
        layout: "default"
        show_navigation: true
  sass:
    style: compressed # possible values: nested expanded compact compressed
  
  
  # --- Site data configuration ---
  
  # Sets a page language in the `<html lang="YOUR-LOCALE">` tag
  lang: en-US

  # Sets a visible site title in a page header.
  # As well used as a part of title in a <title> tag.
  # For a "Security" page will looks: <title>Security | infotorg API</title>
  title: infotorg API

  # Sets a visible subtitle under the title on the page
  subtitle: Onboarding guidelines and documentation
  
  # Your Google Analytics GTM-XXXX code
  google_analytics_tag_manager: ''
  
  
  # --- Swagger UI configuration ---
  
  # Path to Open API file name, used for Swagger UI.
  # As a convention, all Open API files should be stored in the /assets/openapi folder.
  openapi: '/assets/openapi/eiendom.json'
  
  # Swagger UI Theme
  # If not set will fetch the latest default theme css from an official CDN.
  # Other available themes:
  #  - feeling-blue
  #  - flattop
  #  - material
  #  - monokai
  #  - muted
  #  - newspaper
  #  - outline
  # Theme files are located in the /assets/css/swagger-ui/3.x folder.
  # Screenshots are available on the https://github.com/ostranme/swagger-ui-themes page.
  swaggerui_theme: ''
  ```

Continue to [Install project gems](#install-project-gems)

### Custom CI/local flow

While gems are locked on GH Pages, you can install custom gems like a theme if you use a CI flow. Such as with GH Actions or Netlifym.

#### 1. Add to your config

Update your project's `_config.yaml`:

```yaml
####
# --- Required configuration ---
####
theme: infotorg-api-jekyll-theme

####
# --- Optional configuration ---
####

# --- Site defaults configuration ---
defaults:
- scope:
    path: ""
  values:
    # Default layout for any page that doesn't contain 'layout' option in the Front Matter.
    # (https://jekyllrb.com/docs/step-by-step/03-front-matter/) 
    layout: "default"
    show_navigation: true
sass:
style: compressed # possible values: nested expanded compact compressed


# --- Site data configuration ---

# Sets a page language in the `<html lang="YOUR-LOCALE">` tag
lang: en-US

# Sets a visible site title in a page header.
# As well used as a part of title in a <title> tag.
# For a "Security" page will looks: <title>Security | infotorg API</title>
title: infotorg API

# Sets a visible subtitle under the title on the page
subtitle: Onboarding guidelines and documentation

# Your Google Analytics GTM-XXXX code
google_analytics_tag_manager: ''


# --- Swagger UI configuration ---

# Path to Open API file name, used for Swagger UI.
# As a convention, all Open API files should be stored in the /assets/openapi folder.
openapi: '/assets/openapi/eiendom.json'

# Swagger UI Theme
# If not set will fetch the latest default theme css from an official CDN.
# Other available themes:
#  - feeling-blue
#  - flattop
#  - material
#  - monokai
#  - muted
#  - newspaper
#  - outline
# Theme files are located in the /assets/css/swagger-ui/3.x folder.
# Screenshots are available on the https://github.com/ostranme/swagger-ui-themes page.
swaggerui_theme: ''
```

#### 2. Add to Gemfile

To install from **RubyGems**:

- `Gemfile`
    ```ruby
    source "https://rubygems.org"
    
    gem "github-pages"
    gem "infotorg-api-jekyll-theme"
    ```

To install from **GitHub**:

- `Gemfile`
    ```ruby
    source "https://rubygems.org"
    
    gem "github-pages"
    gem "infotorg-api-jekyll-theme", git: "https://github.com/coderua/infotorg-api-jekyll-theme"
    ```

### Install project gems

Now install your gems locally. This is also needed on GH Actions. Netlify takes care of gems for you though.

Configure Bundler locally - only needed once.

```sh
$ bundle config set --local path vendor/bundle
```

Install project gems.

```sh
$ bundle install
```

### Installed path

Useful info for understanding where your theme gets installed based on the approach.

#### GH Pages supported theme

Themes downloaded from RubyGems usually install here:

- `vendor/bundle/ruby/RUBY_VERSION/gems/THEME_NAME-THEME_VERSION`

#### GH Pages Remote Theme flow

The Remote Theme plugin stores the theme in memory and not on disk with gems.

#### Custom CI/local flow

If you added your theme to your Gemfile directly and installed from GitHub URL, it will get installed here:

```
vendor/bundle/ruby/RUBY_VERSION/bundler/gems/THEME_NAME-THEME_VERSION
```

Where the version at the end is a hash (`123456789abc`) or a tag number (`1.0.0`).

### Installed dependencies

See the [gemspec](/infotorg-api-jekyll-theme.gemspec) file to see what dependencies get installed. This came with the scaffold. Update minimum Jekyll version.
