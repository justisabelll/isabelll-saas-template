# isabelll saas starter template

this is a template for a saas using a stack i like:

- next.js
- supabase
- drizzle orm
- tailwindcss + shadcn/ui
- clerk auth

## includes:

- seo
- auth
- blog
- landing page
- waiting list
- mailing list

## not included:

- **emails**
  should be trival to setup with a service like resend, didn't want to create to much boilerplate that would have to just be removed each time

- **analytics**
  also should be trival and i don't really have a preference

- **payments w/ stripe**
  i believe these should be tailored to each app; however, i've made a repo to **demonstrate stripe payments in a next.js app** available [here](https://github.com/justisabelll/next-stripe-example) that provides a good starting point

## todo:

- graceful error handling
- og images

credits:
[shipfast by marc lou](https://shipfa.st)
big project inspiration and component ideas

[portfolio starter kit](https://vercel.com/templates/next.js/portfolio-starter-kit)
blog logic and design from

[tailwind ui](https://tailwindui.com)
some components from tailwind ui and

[hyperui](https://hyperui.dev)
some components from hyperui

[jason santos](https://jasonsantos.gumroad.com/l/JustGradients)
for the default blog images

---

## setup checklist

- [ ] **install dependencies (ofc)**: `npm install`
- [ ] **create a new supabase database**: [start here](https://database.new). after creation, ensure to update your `.env` file with the following keys:

  - `database_url` (your database url)
  - `next_public_supabase_url` (your project url)
  - `next_public_supabase_anon_key` (your supabase anon key)
  - be sure to review this [guide](https://supabase.com/docs/guides/database/connecting-to-postgres) to ensure you are doing the type of db connection you want

- [ ] **create new clerk app**: [dashboard](https://clerk.dev/dashboard). after creation, ensure to update your `.env` file with the following keys (get them [here](https://clerk.com/docs/quickstarts/nextjs)):
  - `next_public_clerk_public_key` (your clerk public key)
  - `clerk_secret_key` (your clerk api key)
  - optional: connect clerk with supabase for row level security (rls): for integration details, see [supabase and clerk integration](https://clerk.com/docs/integrations/databases/supabase)
  - optional: [clerk webhooks](https://clerk.com/docs/integrations/webhooks/sync-data)
- [ ] **make and run migrations**: `npm run make:migration`, `npm run push:migration`

**note:** you should probably not store the blog images in the public folder, use a service like [uploadthing](https://uploadthing.com) to avoid high bandwidth costs

you should be good to go

deploy however you like, i like vercel
