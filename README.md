# Axis Sports Lab — Developer Notes

## Deploy Slow Kyun Hota Hai?

`deploy.bat` chalane par yeh steps hote hain:
1. Pura `dist/` folder delete hota hai
2. Scratch se naya build banta hai (`npm run build`)
3. Sari files WebDAV se server par upload hoti hain

WebDAV slow hai — isliye **10-15 minute** lagte hain sirf ek choti change ke liye bhi.

---

## Fast Config Change — public/config.json Solution

### Problem
Har chhoti change ke liye bhi poora deploy karna padta hai = time waste.

### Solution
`public/` folder mein ek `config.json` file rakho jisme changeable settings hon.

**Kyun public/?**
Vite `public/` folder ki files ko:
- Chhota nahi karta
- Naam nahi badalta (hash nahi lagata)
- Seedha `dist/` mein copy kar deta hai as-is

### Example

`public/config.json`:
```json
{
  "whatsapp": "923001234567",
  "phone": "281-123-4567"
}
```

Build ke baad yeh file banti hai:
```
dist/
└─ config.json   ← same naam, seedha copy
```

### Faida

| Situation | Pehle | Baad mein |
|---|---|---|
| Sirf setting change | Poora deploy.bat — 15 min | Sirf config.json upload — 10 sec |
| Naya build | deploy.bat — 15 min | deploy.bat — 15 min |

---

## WebDAV vs FTP

| | WebDAV | FTP |
|---|---|---|
| Speed | Slow | Fast |
| Kaise kaam karta hai | Har file ke liye alag HTTP request | Ek connection se sari files |
| Port | 2078 (SSL) | 21 |

> **Tip:** Developer se FTP credentials maango — same cPanel hosting par hoga, sirf fast hoga.
