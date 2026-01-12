# ✅ Content Update Checklist

Use this checklist when updating your resume content to ensure nothing is missed!

---

## 🔄 Regular Updates

### Monthly Review
- [ ] Review current role description in `experience.timeline`
- [ ] Update skill percentages if proficiency improved
- [ ] Check if new certifications need to be added
- [ ] Verify location and contact info is current

### When Changing Jobs
- [ ] Add new entry to `experience.timeline`
- [ ] Update `aboutMe.facts` → Role
- [ ] Update header `secondaryHeading` if title changed
- [ ] Add new skills to `skills.categories`
- [ ] Update metrics if applicable

### New Certification
- [ ] Add certification to `aboutMe.certifications`
- [ ] Add badge image to `/assets/` folder
- [ ] Update relevant experience entry with badge
- [ ] Mention in skill highlights if relevant

### Learning New Technology
- [ ] Add to appropriate `skills.categories[].items`
- [ ] Set realistic `percentage` (0-100)
- [ ] Choose appropriate `level`: Expert, Advanced, Proficient
- [ ] Consider mentioning in recent experience highlights

---

## 🎯 Before Publishing

### Content Quality
- [ ] Spell check all text (use VS Code's spell checker)
- [ ] Check grammar and punctuation
- [ ] Verify all dates are accurate
- [ ] Ensure consistent formatting (capitalization, etc.)
- [ ] Remove any placeholder text

### Technical Validation
- [ ] JSON validates (no red squiggles in VS Code)
- [ ] All image paths exist (check `/assets/` folder)
- [ ] No trailing commas in JSON
- [ ] Proper escaping of quotes and special characters
- [ ] Links use correct section IDs

### Testing
- [ ] Run `npm start` locally
- [ ] Test all navigation links work
- [ ] Verify timeline displays correctly
- [ ] Check skill bars render properly
- [ ] Ensure images load
- [ ] Test on different screen sizes
- [ ] Check browser console for errors (F12)

### Deployment
- [ ] Run `npm run build:css` successfully
- [ ] Git status shows only intended changes
- [ ] Commit with descriptive message
- [ ] Push to development branch first
- [ ] Test on development environment
- [ ] Merge to master when ready

---

## 🔍 Content Review Questions

### Header Section
- Does your name and title accurately reflect who you are?
- Is the CTA compelling?

### About Me
- Does your bio effectively summarize your value?
- Are all facts current and accurate?
- Do tags reflect your main expertise areas?
- Are metrics impressive and truthful?
- Are all certifications current and images present?

### Education
- Are dates accurate?
- Are descriptions compelling?
- Do images enhance understanding?

### Experience
- Is chronology correct?
- Are levels (junior/medior/senior/lead) accurate?
- Do descriptions show impact, not just duties?
- Are highlights specific and impressive?
- Is badge usage consistent?

### Skills
- Are percentages honest and consistent?
- Are categories well-organized?
- Do you have recent experience with listed skills?
- Are skill names properly capitalized?

---

## 🐛 Common Mistakes to Avoid

### JSON Syntax Errors
- ❌ Trailing comma: `"value",]` 
- ✅ No trailing comma: `"value"]`

- ❌ Single quotes: `'text'`
- ✅ Double quotes: `"text"`

- ❌ Unescaped quote: `"He said "hello""`
- ✅ Escaped quote: `"He said \"hello\""`

### Content Errors
- ❌ Inconsistent date formats
- ✅ Use consistent format: "2020 - 2021"

- ❌ Vague descriptions
- ✅ Specific, achievement-oriented descriptions

- ❌ Skill percentages don't reflect reality
- ✅ Honest assessment of proficiency

### Image Errors
- ❌ Wrong path: `"image": "az-204.png"`
- ✅ Correct path: `"image": "assets/az-204.png"`

- ❌ Missing image file
- ✅ Verify file exists before referencing

---

## 🎨 Style Guide

### Capitalization
- **Job Titles**: Title Case → "Senior Data Engineer"
- **Companies**: As branded → "Accenture"
- **Technologies**: As branded → "Azure", "GitHub", "C#"
- **Sections**: Title Case → "About Me", "Professional Background"

### Dates
- Ranges: "2020 - 2021"
- Current: "2023 - Present" or "Current"
- Ongoing: "2+ years"
- Single year: "2020"

### Percentages (Skills)
- Expert: 90-100%
- Advanced: 75-89%
- Proficient: 60-74%
- Beginner: <60%

### Descriptions
- Use action verbs
- Be specific with numbers/metrics
- Focus on impact and results
- Keep consistent tone
- Professional but personable

---

## 📝 Quick Reference

### File to Edit
`config/content.json`

### Validate JSON
- VS Code shows errors inline
- Or use: https://jsonlint.com

### Test Locally
```bash
npm start
```
Opens browser at http://127.0.0.1:8080

### Deploy
```bash
npm run build:css
git add .
git commit -m "Update content: [what you changed]"
git push
```

---

## 🎯 Quality Standards

Before marking complete:
- ✅ Content is accurate and current
- ✅ JSON validates without errors
- ✅ Tested locally and works perfectly
- ✅ Images load correctly
- ✅ No console errors
- ✅ Spelling and grammar checked
- ✅ Consistent formatting throughout
- ✅ Professional tone maintained

---

## 📊 Content Freshness Targets

| Section | Update Frequency |
|---------|------------------|
| Experience | When job changes or quarterly |
| Skills | Monthly (as you learn) |
| Certifications | When earned |
| About Me (Bio) | Quarterly |
| About Me (Facts) | When changes occur |
| Education | Rarely (historical) |

---

## 🚀 Ready to Update?

1. Open `config/content.json`
2. Make your changes
3. Save the file
4. Check validation (no red squiggles)
5. Test locally (`npm start`)
6. Deploy when satisfied

**You've got this!** 🎉

---

*Keep this checklist handy for smooth content updates!*
