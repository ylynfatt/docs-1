# Installation

[[toc]]

## Requirements

- PHP ^8.0
- Laravel 8+
- MySQL 5.7+ / PostgreSQL 9.2+
- exif PHP extension (on most systems it will be installed by default)
- GD PHP extension (used for image manipulation)

## Install GetCandy

### Composer require package

```sh
composer require getcandy/getcandy
```

## Search configuration

GetCandy uses Laravel scout for search. We have had good success with using Meilisearch. Although it's entirely up to you as long as it's compatible. If you just want to give the wheels a spin, we also ship with a MySQL driver, just bear in mind this is highly restrictive and we do not recommend using this in any production capacity.

Publish the scout config.

```sh
php artisan vendor:publish --provider="Laravel\Scout\ScoutServiceProvider"
```

### Going with Meilisearch

If you're on OSX then you could make use of [Takeout](https://github.com/tighten/takeout) which makes getting Meilisearch set up on Docker a breeze.

Meilisearch also provide great documentation on how to get set up.

[Install Meilisearch](https://docs.meilisearch.com/learn/getting_started/installation.html)

Once you've done that, simple require the composer packages.

```sh
composer require meilisearch/meilisearch-php
```

### Going with MySQL

Update the `SCOUT_DRIVER` to `mysql` and add this to your `scout.php` config file.

```php
/*
|--------------------------------------------------------------------------
| MySQL Configuration
|--------------------------------------------------------------------------
*/
'mysql' => [
    'mode' => 'LIKE_EXPANDED',
    'model_directories' => [app_path()],
    'min_search_length' => 0,
    'min_fulltext_search_length' => 4,
    'min_fulltext_search_fallback' => 'LIKE',
    'query_expansion' => false
],
```

## Hub Authentication

We use our own authentication guard for the hub, nothing crazy, it just piggy backs off Laravel's own but allows us to use the `staff` table instead of users.
Just add this to your `auth.php` config file:

```php
'guards' => [
    // ...
    'staff' => [
        'driver' => 'getcandyhub',
    ],
]
```

## Run migrations

As you'd expect, there's quite a few tables GetCandy needs to function, so run any migrations

```sh
php artisan migrate
```

## Run the Artisan installer

```sh
php artisan getcandy:install
```

This will take you through a set of questions to configure your GetCandy install. The process includes...

- Creating a default admin user (if required)
- Specifying the table prefix
- Seeding initial data
- Publishing config files
- Optionally, installing demo data
- Inviting you to star our repo on GitHub 😎

Note: there isn't currently a function to automatically remove the demo data.


::: tip Success 🎉
You are now installed!
:::
