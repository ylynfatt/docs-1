# Upgrading

---

> {warning} Planned

- [Overview](#overview)

<a name="overview"></a>
## From 0.12.x

If you are using the origina GetCandy version 0.12.x, you can migrate your data to GetCandy v2 using a plugin.

```sh
composer require getcandy/migrate
```

```php
php artisan getcandy:migrate
```

It will ask you for the old database credentials and then will attempt to migrate your data to the new GetCandy v2 install.


