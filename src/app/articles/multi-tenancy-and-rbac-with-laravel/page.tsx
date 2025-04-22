import Image from 'next/image'
import { ArticleLayout } from '@/components/ArticleLayout'
import tenancyLaravelImg from './tenancy-laravel.png'

const article = {
    author: 'Saurabh Punia',
    date: '2025-04-22',
    title: 'Multi-Tenancy and Role-Based Access Control with Laravel',
    description:
        'Learn how to implement multi-tenancy with the Tenancy for Laravel package and role-based access control using Spatie’s Laravel Permission package, ensuring scalability and security in your applications.',
    slug: 'multi-tenancy-and-rbac-with-laravel'
}

export const metadata = {
    title: article.title,
    description: article.description,
}

export default async function Article() {
    return (
        <ArticleLayout article={article}>
            <h2>Introduction</h2>
            <p>
                Multi-tenancy and role-based access control (RBAC) are essential for building scalable and secure applications. 
                Laravel, with its rich ecosystem, provides powerful tools to achieve this. In this article, we’ll explore 
                how to use the <strong>Tenancy for Laravel</strong> package for multi-tenancy and the <strong>Spatie Laravel Permission</strong> package for RBAC, along with advanced techniques like tenant-specific cache keys.
            </p>

            <Image src={tenancyLaravelImg} alt="Tenancy for Laravel and Spatie Permission" />

            <h2>Setting Up Multi-Tenancy with Tenancy for Laravel</h2>
            <p>
                The <strong>Tenancy for Laravel</strong> package simplifies multi-tenancy implementation. Here’s how to set it up:
            </p>

            <h3>1. Install the Package</h3>
            <pre><code>composer require stancl/tenancy</code></pre>

            <h3>2. Configure Tenancy</h3>
            <p>
                Publish the configuration file and set up tenant-specific database and domain configurations:
            </p>
            <pre><code>php artisan vendor:publish --tag=tenancy-config</code></pre>
            <p>Update the `tenancy.php` file to define tenant models, domains, and database settings.</p>

            <h3>3. Tenant Initialization</h3>
            <p>
                Use middleware like `InitializeTenancyByDomain` or `InitializeTenancyBySubdomain` to identify tenants:
            </p>
            <pre><code>{`Route::middleware(['web', 'tenant'])->group(function () {
    Route::get('/', function () {
        return 'Tenant-specific content';
    });
});`}</code></pre>

            <h3>4. Tenant Management</h3>
            <p>
                Create tenants programmatically or via a UI. For example:
            </p>
            <pre><code>{`$tenant = Tenant::create([
    'id' => 'tenant1',
    'name' => 'Tenant 1',
]);
$tenant->domains()->create(['domain' => 'tenant1.example.com']);`}</code></pre>

            <h2>Implementing RBAC with Spatie Laravel Permission</h2>
            <p>
                The <strong>Spatie Laravel Permission</strong> package provides an elegant way to manage roles and permissions. 
                Here’s how to integrate it:
            </p>

            <h3>1. Install the Package</h3>
            <pre><code>composer require spatie/laravel-permission</code></pre>

            <h3>2. Publish and Run Migrations</h3>
            <pre><code>{`php artisan vendor:publish --provider="Spatie\Permission\PermissionServiceProvider" --tag="migrations"
php artisan migrate`}</code></pre>

            <h3>3. Define Roles and Permissions</h3>
            <p>
                Use the `Role` and `Permission` models to define roles and permissions:
            </p>
            <pre><code>{`use Spatie\\Permission\\Models\\Role;
use Spatie\\Permission\\Models\\Permission;

$role = Role::create(['name' => 'admin']);
$permission = Permission::create(['name' => 'edit articles']);

$role->givePermissionTo($permission);
$user->assignRole('admin');`}</code></pre>

            <h3>4. Middleware for Access Control</h3>
            <p>
                Protect routes using middleware:
            </p>
            <pre><code>{`Route::group(['middleware' => ['role:admin']], function () {
    Route::get('/admin', [AdminController::class, 'index']);
});`}</code></pre>

            <h2>Using Unique Cache Keys for Tenants</h2>
            <p>
                When working with multi-tenancy, it’s important to ensure that cached data is isolated per tenant. 
                The <strong>Spatie Laravel Permission</strong> package uses a cache key to store permissions. 
                By dynamically changing the cache key for each tenant, you can ensure that permissions are tenant-specific.
            </p>

            <h3>1. Setting the Cache Key</h3>
            <p>
                In the `TenancyServiceProvider`, you can modify the cache key dynamically during tenancy initialization:
            </p>
            <pre><code>{`use Spatie\\Permission\\PermissionRegistrar;

TenancyBootstrapped::class => [
    static function (TenancyBootstrapped $event): void {
        app(PermissionRegistrar::class)->cacheKey = 
            config('permission.cache.key') . '.tenant.' . $event->tenancy->tenant->id;
    },
],`}</code></pre>

            <h3>2. Reverting to Central Context</h3>
            <p>
                When switching back to the central application context, reset the cache key:
            </p>
            <pre><code>{`TenancyEnded::class => [
    static function (): void {
        app(PermissionRegistrar::class)->cacheKey = config('permission.cache.key');
    },
],`}</code></pre>

            <h3>3. Benefits of Tenant-Specific Cache Keys</h3>
            <ul>
                <li>Ensures that permissions and roles are isolated per tenant.</li>
                <li>Prevents conflicts when multiple tenants access the application simultaneously.</li>
                <li>Improves scalability by maintaining separate caches for each tenant.</li>
            </ul>

            <h2>Conclusion</h2>
            <p>
                By combining <strong>Tenancy for Laravel</strong> and <strong>Spatie Laravel Permission</strong>, 
                along with techniques like tenant-specific cache keys, you can build scalable, secure, and multi-tenant 
                applications with robust access control. These tools provide the flexibility and power needed to meet 
                the demands of modern SaaS platforms and enterprise applications.
            </p>
        </ArticleLayout>
    )
}