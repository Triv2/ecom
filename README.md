# Build In Public - Modern Simple Next.js 14 Ecommerce

## Introduction

Goal is to create a modern simple ecommerce platform similar to shopify but without all the fancy features. Going to try and minimize the number of packages/libraries used, if we can do it ourselves we will. This in my opinion is the best way to learn.

The finished project will have a backend with a landing page where small business owners can sign-up/login to their content management systems for their stores.

Ideally each store that gets created should have their own distinct URL, however some users would rather the platform handle that aspect. Will try to implement both features, allowing the user to determine if they want their store to be `/app/[storeName]`. 

Since we are using Simpec as the fake business name it would be `simpec.com/MyStore` for the platform hosted ones, or similar. We can also set it up to where Simpec can promote small businesses on a frontpage banner.

*This is a general idea, it is most likely going to change as the project gets built. The main thing is getting the core concept in place.*

## Stack
- Clerk: This is the best option for authentication for our needs. Customers will only have to login when they make a purchase, and can only leave a review after a making a purchase. Business owners will be able to login to access the CMS. 
- Next.js 14: Best for performance reasons, and to learn more about it.
- Shadcn-ui: Simple easy to use, will be customizing many components and building them from scratch where possible. But at the same time, will use a shadcn component if it saves time. 
- Prisma ORM: Simple, no need for anything crazy.
- Stripe: Using this for payment processing, will add it last. Can optionally add a different payment processor if enough people request it
- Uploadthing: Easy image upload for the products
- Database: Will be using  SQL database for this project, CockroachDB, NeonDB, PlanetScale, and etc will work fine. 


## Features
- Admin CMS for CRUD: products, categories, subcategories, orders, cart
	- After minimum viable product this can be extended.
- Landing page based on modern e-commerce style websites(shopify)
	-Sleek, minimalist, and simple.
- Front-end: Business Contact Form, About Section, Featured Products, Best-Selling Products, Sales Banner, categories and subcategories, reviews


## Timeline
*Starting with a front-end first approach, designing the landing page first then moving towards the CMS*

1. First commit will be baseline install of next 14, shadcn-ui, and clerk. Using TailwindCSS-Animated for some simple animations on the landing page. Also will be used to make transitions in the CMS for smoother use.
	

2. Additional will be committing most of the landing page in the first commit. Will try to finish it with second commit
	
		
