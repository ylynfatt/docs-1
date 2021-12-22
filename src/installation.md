# Installation

---

- [Requirements](#requirements)
- [Core](#core)
- [Admin Hub](#admin-hub)
- [Frontend API](#frontend-api)
- [Checkout](#checkout)

<a name="requirements"></a>
## Requirements

- PHP ^8.0
- Laravel 8+
- MySQL 5.7+ / PostgreSQL 9.2+
- exif PHP extension (on most systems it will be installed by default)
- GD PHP extension (used for image manipulation)

<a name="core"></a>
## Install GetCandy

### Composer require package

```sh
composer require getcandy/getcandy
```

### Add initial search config

GetCandy uses scout for search and to get you started we have included a mysql driver. To get this set up you will need to publish the Scout config as per their docs.

```php
php artisan vendor:publish --provider="Laravel\Scout\ScoutServiceProvider"
```

Then update the `SCOUT_DRIVER` to `mysql` and add this to your `scout.php` config file.

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

### Run the Artisan installer

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


> {success} You are now installed!

### Running Seeders

```sh
php artisan db:seed --class=GetCandy\\\\Database\\\\Seeders\\\\DemoSeeder
```
