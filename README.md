#### code for thmsbfft.info

----

- choo
- smarkt
- monolazy & monoimage
- recsst

```bash
# create manifest for /log
node create-gallery.js

# start a development server
npm run start

# start a production server
npm run serve
```

#### notes

----

- The `choo` architecture I have here is similar to what you'd get using `create-choo-app`. One neat thing might be using the `main.js` view as a kind of switchboard to avoid polluting `index.js`.

- This project uses `bankai` in production, concurrently with `socket.io` (for websockets). `server.js` sets up `bankai/http` to get optimized bundles and no logs.

- `create-gallery` walks `/gallery` and generates a `manifest.json` with some metadata on the images, the notes associated in the `.txt` (thanks smarkt!) and a b64, useful to display a placeholder while the image is lazy-loading.