# Quick Start: Updating Content

## Common Updates

### Change Your Name or Title
Edit `config/content.json`:

```json
"header": {
  "primaryHeading": "My name is [YOUR NAME]",
  "secondaryHeading": "[YOUR TITLE]",
  ...
}
```

### Update Your Current Role
Find the most recent entry in `experience.timeline` and modify:

```json
{
  "year": "2023-25",
  "title": "Data Engineering Team Lead",  // Change this
  "company": "Accenture",                 // Change this
  "description": "..."                     // Change this
}
```

### Add a New Skill
In `skills.categories`, find the appropriate category and add to `items`:

```json
{
  "name": "TypeScript",
  "level": "Advanced",
  "percentage": 85
}
```

### Update Certifications
In `aboutMe.certifications`:

```json
{
  "image": "assets/your-cert.png",
  "alt": "Certification Name",
  "label": "CERT-123",
  "pill": "Certification Title"
}
```

### Change Location
In `aboutMe.facts`:

```json
{ "label": "Location", "value": "Your City" }
```

## Testing Your Changes

1. Save `content.json`
2. Refresh your browser (the dev server should already be running with `npm start`)
3. Check that your changes appear correctly

## Important Notes

- **Always validate JSON** before saving (use JSONLint.com if unsure)
- **Keep the structure** - only change values, not keys or array structures
- **Watch for commas** - JSON is strict about trailing commas (they're not allowed)
- **Escape quotes** - Use `\"` inside strings if you need quotes

## Example: Full Skill Category

```json
{
  "id": "mytools",
  "icon": "icon-briefcase",
  "heading": "My Tools",
  "description": "Tools I use daily",
  "items": [
    { "name": "Tool 1", "level": "Expert", "percentage": 95 },
    { "name": "Tool 2", "level": "Advanced", "percentage": 80 }
  ]
}
```

That's it! Your content is now fully configurable. No more hunting through HTML files! 🎉
