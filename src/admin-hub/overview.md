# Admin Hub Overview

---

The admin hub is an open source app that allows you to manage all aspects of your GetCandy store.

### Livewire admin hub, zero-config... just install and go!

```sh
composer require getcandy/admin-hub
```

## Authentication

The admin hub, by design choice, does not allow users in the `users` table to login in. We have our own authentication (which piggy backs off of Laravel's own) to allow `staff` to log in to the hub.

We wanted there to be a clear separation between the users in your store and the staff members who can log in to the hub. Having a different table for authentication means that, from a security perspective, users could never accidently be able to log in.

There is a simple additional step needed when installing and that's to add the guard to the guards array in the `auth.php` config file.

```php
'guards' => [
    // ..
    'staff' => [
        'driver' => 'getcandyhub',
    ],
],
```

That's it, you're done. Just remember that in order to create a staff member to log in, they go in the `getcandy_staff` table.

## Accessing the hub

Once the package is installed, just head to `/hub` and you should see the login screen.
