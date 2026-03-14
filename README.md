# M4 Travels Sri Lanka — Website

A clean, professional static website for M4 Travels Sri Lanka.

---

## 📁 File Structure

```
m4travels/
├── index.html          ← The website
├── css/
│   └── style.css       ← All styling (don't edit unless you know CSS)
├── js/
│   ├── content.js      ← ⭐ EDIT THIS FILE to update website content
│   └── app.js          ← App logic (don't edit)
└── images/
    └── gallery/        ← Put your photos here
        ├── sigiriya.jpg
        ├── nine-arch.jpg
        ├── galle.jpg
        ├── tooth-relic.jpg
        ├── beach.jpg
        └── wildlife.jpg
```

---

## ✏️ How to Update Website Content

**Non-IT friendly! You only need to edit one file: `js/content.js`**

1. Open `js/content.js` in Notepad (Windows) or TextEdit (Mac)
2. Find the section you want to change
3. Edit the text **between the quote marks** `" "`
4. Save the file
5. Upload to GitHub → the website updates automatically

### What you can update in content.js:
- ✅ WhatsApp number & email
- ✅ Facebook & Instagram links
- ✅ Services (title, description, icon)
- ✅ Prices & package details
- ✅ Customer reviews
- ✅ Gallery photo paths

---

## 🖼️ How to Add Photos

1. Name your photo file (e.g. `sigiriya.jpg`) — **use lowercase, no spaces**
2. Put it in the `images/gallery/` folder
3. Open `js/content.js` and find the `gallery` section
4. Update the `src` path to match your filename
5. Upload everything to GitHub

---

## 🚀 GitHub Pages Setup (One-time)

### Step 1: Create your repos
- **Private repo** (your source): e.g. `m4travels-source`
- **Public repo** (for hosting): e.g. `m4travels-site`

### Step 2: Upload files to your PUBLIC repo
Upload all files from this folder to your public repo.

### Step 3: Enable GitHub Pages
1. Go to your **public repo** on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **Deploy from a branch**
4. Choose **main** branch, **/ (root)** folder
5. Click **Save**
6. Your site will be live at: `https://yourusername.github.io/m4travels-site`

### Step 4: Connect your GoDaddy domain
1. In GoDaddy, go to **DNS Management** for your domain
2. Add a **CNAME record**:
   - Name: `www`
   - Value: `yourusername.github.io`
3. Add **A records** for root domain pointing to GitHub Pages IPs:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
4. In GitHub Pages settings, enter your custom domain (e.g. `www.m4travels.lk`)
5. Check "Enforce HTTPS" ✅

> DNS changes can take up to 24–48 hours to fully propagate.

---

## 💬 Booking Form

The booking form automatically sends all details to your WhatsApp.  
No server or backend needed — it opens WhatsApp with the message pre-filled.

---

## 📞 Updating WhatsApp Number

Open `js/content.js` and update these two lines:
```js
whatsapp_number: "+94777510000",    // No spaces or dashes
whatsapp_display: "+94 77 751 0000", // How it shows on the website
```

---

## 🔧 Tech Stack

- Plain HTML, CSS, JavaScript
- No frameworks, no build tools
- Google Fonts (Cormorant Garamond + DM Sans)
- Works perfectly on GitHub Pages

---

*Website built for M4 Travels Sri Lanka*
