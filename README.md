## Steps to reproduce

1. `npm run build`
2. `npm run start`
3. Visit http://localhost:3000/, and open DevTools. Notice the client component's `"rendering"` log doesn't appear until after the RSC un-suspends.
