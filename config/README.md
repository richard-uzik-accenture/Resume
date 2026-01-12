# Content Management Guide

## Overview
All text content on the resume website is now configurable through JSON files. This allows you to update text without editing HTML directly.

## Configuration File
**Location:** `config/content.json`

## How to Update Content

### 1. Header Section
```json
"header": {
  "primaryHeading": "My name is Richard",
  "secondaryHeading": "Azure Data Engineer & Consultant",
  "ctaText": "Explore my skills →"
}
```

### 2. Navigation Cards
```json
"navigationCards": [
  {
    "id": "education",
    "heading": "Education",
    "linkText": "Explore",
    "image": "/assets/cropped-education.jpg",
    "alt": "Education Image"
  }
]
```

### 3. About Me Section
Update profile information, facts, tags, metrics, and certifications:
- `eyebrow`: Professional title
- `title`: Headline
- `summary`: Brief bio
- `facts`: Array of key-value pairs
- `tags`: Array of skill/area tags
- `metrics`: Achievement statistics
- `certifications`: Certification cards

### 4. Education Timeline
Each education entry includes:
- `period`: Date range
- `periodBadge`: Badge text
- `subheading`: Phase description
- `image`: Photo path
- `title`: Institution name
- `institution`: Degree title
- `description`: Detailed description
- `position`: "left" or "right" (timeline placement)

### 5. Experience Timeline
Each experience entry includes:
- `year`: Display year
- `level`: "junior", "medior", "senior", or "lead"
- `title`: Job title
- `company`: Company name
- `duration`: Time period
- `badge`: Optional certification/status badge
- `description`: Role description
- `highlights`: Array of key achievements
- `position`: "left" or "right" (timeline placement)

### 6. Skills Section
Organized into categories, each with:
- `id`: Category identifier
- `icon`: SVG sprite icon name
- `heading`: Category title
- `description`: Category description
- `items`: Array of skills with:
  - `name`: Skill name
  - `level`: Expertise level text
  - `percentage`: Skill bar percentage (0-100)

## Making Changes

### Step 1: Edit JSON
Open `config/content.json` and modify the text you want to change.

### Step 2: Validate JSON
Ensure your JSON is valid. Use a JSON validator if needed.

### Step 3: Test Locally
Run the development server:
```bash
npm start
```

### Step 4: Deploy
Follow the standard deployment process. The JSON file will be deployed along with other assets.

## Tips

1. **Keep it valid**: Always validate JSON syntax before saving
2. **Special characters**: Use proper escaping for quotes and special characters
3. **HTML entities**: Use HTML entities like `&rarr;` for arrows
4. **Consistent structure**: Don't change the JSON structure, only the values
5. **Images**: Update image paths if changing images, ensure they exist in `/assets/`

## Fallback
If the JSON fails to load, the original HTML content will remain visible (though it's now managed by JavaScript, so ensure the JSON is always accessible).

## Example: Adding a New Skill

```json
{
  "name": "New Technology",
  "level": "Advanced",
  "percentage": 85
}
```

Add this object to the `items` array in the appropriate skills category.

## Example: Updating Experience

To add a new role or update current one, edit the experience timeline array:

```json
{
  "year": "2026",
  "level": "lead",
  "title": "Senior Architect",
  "company": "Company Name",
  "duration": "1+ year",
  "badge": "Current Role",
  "description": "Your role description here...",
  "highlights": ["Highlight 1", "Highlight 2", "Highlight 3"],
  "position": "right"
}
```

## Support
For issues or questions about content management, refer to the project documentation or contact the development team.
