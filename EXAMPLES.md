# Example: Updating Your Resume Content

## Scenario 1: You Got a New Certification! 🎓

**Edit `config/content.json`** and add to `aboutMe.certifications`:

```json
{
  "image": "assets/az-305.png",
  "alt": "AZ-305",
  "label": "AZ-305",
  "pill": "Azure Solutions Architect"
}
```

Save → Refresh → Done! ✅

---

## Scenario 2: New Role at Work 💼

**Find the last item** in `experience.timeline` and add after it:

```json
{
  "year": "2026",
  "level": "lead",
  "title": "Principal Data Architect",
  "company": "Accenture",
  "duration": "Current",
  "badge": "Current Role",
  "description": "Leading enterprise-wide data architecture initiatives across cloud platforms.",
  "highlights": ["Cloud Architecture", "Team Mentorship", "Strategic Planning"],
  "position": "right"
}
```

Save → Refresh → Your timeline updates! ✅

---

## Scenario 3: Learning New Technology 🚀

**Add a skill** to any category in `skills.categories[].items`:

```json
{ 
  "name": "Kubernetes", 
  "level": "Proficient", 
  "percentage": 70 
}
```

Save → Refresh → Skill bar appears! ✅

---

## Scenario 4: Update Your Bio 📝

**Change the about section** in `aboutMe`:

```json
"summary": "I help teams ship robust data solutions on Azure, with a focus on modern cloud architecture and AI integration."
```

Save → Refresh → Bio updated! ✅

---

## Scenario 5: Relocating? 🌍

**Update location** in `aboutMe.facts`:

```json
{ "label": "Location", "value": "Prague" }
```

And update the map label:

```json
"mapLabel": "Based in Prague"
```

Save → Refresh → Location changed! ✅

---

## Before vs After

### ❌ Before (Old Way)
1. Open `index.html` (500+ lines)
2. Scroll to find the right section
3. Navigate through nested HTML tags
4. Find the specific text among attributes
5. Edit carefully without breaking tags
6. Save and hope nothing broke

### ✅ After (New Way)
1. Open `config/content.json`
2. Find the key (e.g., "primaryHeading")
3. Change the value
4. Save

**That's it!** 🎉

---

## Pro Tips

### Use VS Code's Search
Press `Ctrl+F` in `content.json` and search for the text you want to change. Much faster than scrolling HTML!

### JSON Validation is Your Friend
If you see a red squiggle in VS Code, hover over it to see what's wrong. Common issues:
- Missing comma
- Extra comma at end of array
- Unescaped quote character
- Wrong data type (string vs number)

### Test Locally Always
Before committing changes:
```bash
npm start
```
Then check your changes in the browser at http://127.0.0.1:8080

### Keep It Organized
The JSON structure mirrors your website sections:
- `header` → Header section
- `navigationCards` → Three main cards
- `aboutMe` → About Me section
- `education` → Education timeline
- `experience` → Work experience
- `skills` → Skills grid

---

## Real Example: Quick Bio Update

**Task**: Update your professional summary

**File**: `config/content.json`

**Find this**:
```json
"summary": "I help teams ship robust data solutions on Azure, blending hands-on engineering with mentorship and delivery leadership."
```

**Change to**:
```json
"summary": "Passionate about building scalable data platforms that drive business value through innovative cloud solutions."
```

**Result**: Instant bio update across the site! 🚀

---

That's the power of JSON-based content management! 
No more HTML hunting, just straightforward key-value editing. 🎯
