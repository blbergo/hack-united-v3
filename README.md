# PooPals
## Inspiration
We were inspired by one of our friends who appears to have undiagnosed IBS.

## What it does
Our web app enables users to create and filter nearby bathroom locations, get directions to the closest bathroom, and view a heat map of commonly used lavatories.

## How we built it
We built this using Next.js, Tailwind CSS, react-google-maps and react-query on the front end. We self-hosted pocketbase using Oracle Cloud, deployed it to Vercel and used Porkbun DNS for the subdomain.

## Challenges we ran into
The main issue for us was accurately scoping what our team could develop in such a short time. Luckily, we were able to readjust our stance 24 hours in and deliver a clean MVP.

## Accomplishments that we're proud of
This was the first time that two of our members used Next.js, Tailwind, and Typescript, and we all used Pocketbase for the first time as well, and we are proud of the progress we made over the course of this weekend.

## What we learned
We learned a lot about caching, specifically how to invalidate API routes as well as refresh react-query's cache when reviews are submitted.

## What's next for PooPals
Hopefully we can add more regions, as well smooth out the UI, and adapt it for larger screens.
