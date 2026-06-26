# Athlete Profile System       Client Proposal
### Axis Sports Lab · Phase 1 MVP

---

## What Is the Athlete Profile System?

Every athlete who joins an Axis Sports Lab membership will receive a **personal digital profile page**       a dedicated web page that showcases their highlights, bio, school information, and photos.

Think of it like a **digital sports card** that lives on your website and can be shared with coaches, recruiters, family, and friends.

**Example URL:**
```
axissportslab.com/athletes/john-smith
```

---

## How It Works       Simple Overview

```
Athlete buys membership
        ↓
Go High Level sends athlete an intake form
        ↓
Athlete / Parent fills in their info
        ↓
Staff is notified → creates profile in the admin dashboard
        ↓
Profile is published to the website
        ↓
Athlete receives their profile link automatically
```

No complicated software. No coding required from staff. Just a simple form → review → publish workflow.

---

## The Tech Stack (In Plain English)

| Component | Tool | What It Does |
|-----------|------|--------------|
| **Website Frontend** | React (already live) | Displays the athlete profile page to visitors |
| **Content Management** | Sanity CMS | Where staff creates and manages athlete profiles |
| **Automation** | Go High Level (GHL) | Sends intake forms, notifies staff, sends profile links |
| **Image Storage** | Sanity Media Library | Stores athlete photos and videos securely |

### Why Sanity CMS?
- **Free** on the starter plan (covers Phase 1 entirely)
- Staff gets a clean, simple dashboard       no coding needed
- Upload photos, add bio, publish/unpublish with one click
- Works on any computer or phone

---

## Staff Admin Dashboard       What Staff Can Do

Inside the Sanity dashboard, staff will be able to:

- ✅ Create a new athlete profile
- ✅ Upload athlete photo
- ✅ Add bio, school, graduation year, sport & position
- ✅ Embed 1 highlight video (YouTube or direct link)
- ✅ Upload up to 5 photos
- ✅ Publish the profile (makes it live on the website)
- ✅ Unpublish the profile (takes it offline without deleting)
- ✅ Edit any profile at any time

---

## What the Athlete Profile Page Includes (Basic       Free with Membership)

Each public-facing profile page will display:

| Feature | Included |
|---------|----------|
| Athlete photo | ✅ |
| Athlete bio | ✅ |
| School & graduation year | ✅ |
| Sport & position | ✅ |
| 1 highlight video | ✅ |
| Up to 5 photos | ✅ |
| Shareable profile link | ✅ |
| Share buttons (text, copy link) | ✅ |
| "Book a Session" button | ✅ |
| "Claim Free Workout" button | ✅ |
| "Powered by Axis Sports Lab" footer | ✅ |

---

## Go High Level Automation Flow

```
TRIGGER: Membership purchased
    ↓
ACTION: GHL sends athlete intake form via email/SMS
    ↓
ATHLETE ACTION: Fills out form (name, photo, bio, school, video link, etc.)
    ↓
ACTION: Staff receives notification       "New athlete profile ready to build"
    ↓
STAFF ACTION: Opens Sanity dashboard → Creates profile → Publishes
    ↓
ACTION: GHL automatically sends profile link to athlete & parent
```

**Estimated time from purchase to live profile: 24–48 hours**

---

## Profile Tiers & Upsells

### Basic       FREE with Membership (Value: $99)
- Athlete profile page
- 1 highlight video
- 5 photos
- Athlete bio
- School & graduation year
- Shareable profile link

---

### Pro Athlete Profile       $99 Setup OR $19/month
Everything in Basic, plus:
- Up to 5 videos
- Up to 20 photos
- Performance metrics section
- Awards section
- Social media links
- QR code for the profile

---

### Elite Athlete Profile       $299 Setup OR $49/month
Everything in Pro, plus:
- Unlimited videos & photos
- Recruiting section
- Downloadable athlete resume (PDF)
- Featured athlete badge on the website
- Priority profile updates

---

### Add-On Packages

| Package | Price | Includes |
|---------|-------|----------|
| **Highlight Reel** | $149 – $499 | Professional reel, social media clips, recruiting-style video |
| **Player Intro Video** | $99 – $299 | Professional intro video, social-ready content |
| **Recruiting Package** | $499 – $999 | Full recruiting profile, highlight reel, player resume, recruiting page |

---

## Phase 1 Scope & Timeline

| Task | Timeline |
|------|----------|
| Set up Sanity CMS (admin dashboard) | Day 1 |
| Build athlete profile page template on website | Day 1–2 |
| Connect Sanity to website | Day 2 |
| Set up GHL intake form | Day 2–3 |
| Set up GHL automations (notifications + link delivery) | Day 3 |
| Test full flow end-to-end | Day 3–4 |
| Go live | Day 4–5 |

**Estimated Phase 1 delivery: 4–5 business days**

---

## Cost Breakdown       Phase 1

| Item | Monthly Cost |
|------|-------------|
| Sanity CMS (Starter Plan) | **$0** |
| Go High Level (already active) | Already paying |
| Website hosting       Vercel (already active) | Already paying |
| **Total new cost** | **$0/month** |

Phase 1 runs entirely on existing infrastructure and Sanity's free tier.
*(Sanity free tier supports up to 3 users and 10GB storage       more than enough for Phase 1)*

---

## What Phase 2 Could Look Like (Future)

Once demand is validated in Phase 1:

- **Athlete login portal**       athletes log in to view and share their own profile
- **Recruiting dashboard**       connect directly with college coaches
- **Performance tracking**       stats, progress over time
- **Full Athlete Operating System**       the complete vision

Phase 2 would be scoped and priced separately once Phase 1 results are reviewed.

---

## Summary

| | |
|--|--|
| **Goal** | Give every member a professional digital athlete profile |
| **How** | Sanity CMS (admin) + React website (public) + GHL (automation) |
| **Staff effort** | ~10–15 minutes per profile |
| **Athlete experience** | Fill out one form → receive profile link within 48 hours |
| **Added cost** | $0/month in Phase 1 |
| **Launch timeline** | 4–5 business days |
| **Upsell opportunity** | Pro ($99/$19mo) · Elite ($299/$49mo) · Add-on packages |

---

*Prepared by TechGenics for Axis Sports Lab*
*Document Version: Phase 1 MVP · June 2026*
