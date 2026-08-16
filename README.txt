# 21st Birthday Website ✨

A romantic-but-not-over-the-top birthday website for your friend.

## 1. Add her name
Open `index.html` and replace every:
`[Her Name]`
with her actual name.

## 2. Add your photos
Create a folder called `images` inside this folder. The updated version does not require a separate gallery.

Then add these files:
- `hero.jpg`
- `sunset.jpg`
- `mountains.jpg`
- `flower.jpg`
- `final.jpg`

The HTML already has blank image placeholders. To activate an image, replace the relevant placeholder, for example:

FROM:
<div class="hero-photo photo-placeholder">
  <span>YOUR PHOTO HERE</span>
  <small>hero.jpg</small>
</div>

TO:
<div class="hero-photo photo-placeholder">
  <img src="images/hero.jpg" alt="Birthday memory">
</div>

Do the same for the other placeholders.

## 3. Optional: change the message
All birthday text is in `index.html`. You can personalize the letter, memories, and 21 wishes.

## 4. Test it locally
The simplest option is to double-click `index.html`.

For a better local preview, open a terminal in this folder and run:

`python -m http.server 8000`

Then open:
`http://localhost:8000`

## 5. Deploy with GitHub Pages — easiest free option

1. Create/sign in to GitHub.
2. Create a new repository, for example `birthday-21`.
3. Upload:
   - `index.html`
   - `style.css`
   - `script.js`
   - the entire `images` folder
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and `/ (root)`.
7. Save.
8. GitHub will give you a public website URL.

## 6. Deploy with Vercel — also very easy

1. Go to Vercel and sign in with GitHub.
2. Create a new project.
3. Import your `birthday-21` GitHub repository.
4. Leave the framework preset as **Other** / no framework.
5. Deploy.
6. Vercel will give you a public URL.

## Important
Keep the image filenames exactly the same as the ones used in the HTML. JPG is recommended.

You can also replace the placeholder blocks with `<img>` tags pointing to your own image filenames.


## Extra photo spaces

The website now has additional mobile-friendly photo sections. Add these files to `images/`:

- `her-1.jpg`
- `her-2.jpg`
- `her-3.jpg`
- `her-4.jpg`
- `her-5.jpg`
- `favorite.jpg`

You can use these for:
- her solo pictures
- favorite pictures of her
- pictures from trips
- screenshots/memories
- a favorite photo of the two of you

The placeholders will remain visible until you replace them with images.
