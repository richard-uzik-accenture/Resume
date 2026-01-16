# Mobile Testing Checklist

**Project:** Resume Website  
**Version:** 1.0  
**Date:** January 16, 2026  
**Status:** Ready for Testing

---

## Device Testing Matrix

### iOS Devices
- [ ] **iPhone SE (2020)** - 375x667px
  - [ ] Portrait orientation
  - [ ] Landscape orientation
  - [ ] Safari browser
  - [ ] Touch interactions working
  - [ ] Animations smooth (60fps)
  - [ ] No horizontal scroll

- [ ] **iPhone 13/14** - 390x844px
  - [ ] Portrait orientation
  - [ ] Landscape orientation
  - [ ] Safe area insets respected
  - [ ] Safari browser
  - [ ] Dynamic Island compatibility

- [ ] **iPhone 13 Pro Max** - 428x926px
  - [ ] Portrait orientation
  - [ ] Large screen optimizations
  - [ ] Safari browser

- [ ] **iPad (9th gen)** - 810x1080px
  - [ ] Portrait orientation
  - [ ] Landscape orientation
  - [ ] Safari browser
  - [ ] Grid layouts (2-3 columns)

- [ ] **iPad Pro 12.9"** - 1024x1366px
  - [ ] Portrait orientation
  - [ ] Landscape orientation
  - [ ] Safari browser
  - [ ] Desktop-like experience

### Android Devices
- [ ] **Samsung Galaxy S21** - 360x800px
  - [ ] Portrait orientation
  - [ ] Chrome browser
  - [ ] Samsung Internet
  - [ ] Touch interactions

- [ ] **Google Pixel 6** - 412x915px
  - [ ] Portrait orientation
  - [ ] Chrome browser
  - [ ] Material Design compatibility

- [ ] **Samsung Galaxy Tab S8** - 753x1037px
  - [ ] Portrait orientation
  - [ ] Landscape orientation
  - [ ] Chrome browser

### Browser Testing
- [ ] **Safari (iOS 15+)**
  - [ ] WebKit rendering correct
  - [ ] Backdrop-filter support
  - [ ] CSS clamp() working
  - [ ] Touch gestures

- [ ] **Chrome Mobile (Latest)**
  - [ ] Blink rendering correct
  - [ ] All animations working
  - [ ] Touch interactions

- [ ] **Firefox Mobile**
  - [ ] Gecko rendering correct
  - [ ] CSS Grid support
  - [ ] Flexbox layouts

- [ ] **Samsung Internet**
  - [ ] Chromium-based features
  - [ ] Touch optimizations

---

## Functional Testing Checklist

### Navigation & Scroll
- [ ] Smooth scrolling works on all devices
- [ ] Anchor links navigate to correct sections
- [ ] Return-to-top button appears after scroll
- [ ] Return-to-top button working properly
- [ ] No scroll jank or stuttering
- [ ] Navigation cards clickable with proper touch targets

### Typography & Readability
- [ ] All text readable at minimum size (16px)
- [ ] Headings scale properly with clamp()
- [ ] Line heights appropriate for reading
- [ ] No text overflow or truncation
- [ ] Letter spacing correct on small screens

### Touch Interactions
- [ ] All buttons minimum 44x44px touch targets
- [ ] Navigation cards respond to touch
- [ ] Skill items respond to touch
- [ ] Experience cards respond to touch
- [ ] No accidental tap triggers
- [ ] Touch feedback visible (scale animations)
- [ ] Hover states disabled on touch devices

### Layout & Spacing
- [ ] No horizontal scroll (320px - 768px)
- [ ] Content fits within viewport
- [ ] Grid layouts collapse properly:
  - [ ] Skills: 4→3→2→1 columns
  - [ ] Navigation cards: 3→2→1 columns
- [ ] Timeline stacks vertically on mobile
- [ ] Padding/margins appropriate at all breakpoints
- [ ] Safe areas respected on iOS

### Images & Media
- [ ] All images load properly
- [ ] Image aspect ratios maintained
- [ ] SVG icons render correctly
- [ ] Background images positioned correctly
- [ ] No image distortion or pixelation

### Animations & Performance
- [ ] Animations run at 60fps
- [ ] No janky animations on scroll
- [ ] prefers-reduced-motion respected
- [ ] Will-change applied appropriately
- [ ] No layout shifts during animations
- [ ] Entrance animations trigger correctly

### Forms & Inputs (if applicable)
- [ ] Form inputs minimum 44px height
- [ ] Input fields accessible on mobile keyboard
- [ ] No keyboard overlap issues
- [ ] Auto-zoom disabled (font-size ≥16px)

### Accessibility
- [ ] Focus states visible for keyboard navigation
- [ ] Tab order logical
- [ ] Screen reader compatible
- [ ] Color contrast meets WCAG AA (4.5:1)
- [ ] Touch targets meet WCAG (44x44px)
- [ ] Alt text present on all images

---

## Performance Testing

### Lighthouse Mobile Audit Targets
- [ ] **Performance Score:** >90
  - [ ] First Contentful Paint (FCP): <2.0s
  - [ ] Largest Contentful Paint (LCP): <2.5s
  - [ ] Speed Index: <3.0s
  - [ ] Time to Interactive (TTI): <3.5s
  - [ ] Total Blocking Time (TBT): <300ms
  - [ ] Cumulative Layout Shift (CLS): <0.1

- [ ] **Accessibility Score:** >95
  - [ ] ARIA labels present
  - [ ] Color contrast sufficient
  - [ ] Touch targets adequate
  - [ ] Semantic HTML used

- [ ] **Best Practices Score:** >90
  - [ ] HTTPS (in production)
  - [ ] No console errors
  - [ ] Images optimized
  - [ ] Modern image formats

- [ ] **SEO Score:** >90
  - [ ] Meta descriptions present
  - [ ] Viewport meta tag set
  - [ ] Font sizes readable
  - [ ] Tap targets sized appropriately

### Network Performance
- [ ] Test on 3G connection
- [ ] Test on 4G connection
- [ ] Test on WiFi
- [ ] CSS file size acceptable (<100KB gzipped)
- [ ] JavaScript file size acceptable (<50KB)
- [ ] JSON config loads quickly (<500ms)

### Chrome DevTools Testing
- [ ] **Mobile Device Simulation:**
  - [ ] iPhone 12 Pro
  - [ ] Pixel 5
  - [ ] Galaxy S20 Ultra
  - [ ] iPad Air
  - [ ] Surface Duo

- [ ] **Throttling Tests:**
  - [ ] Slow 3G
  - [ ] Fast 3G
  - [ ] 4x CPU slowdown

---

## Visual Regression Testing

### Component-Specific Checks
- [ ] **Header Section**
  - [ ] Background gradient visible
  - [ ] Text centered properly
  - [ ] CTA button properly sized
  - [ ] Spacing appropriate

- [ ] **Navigation Cards**
  - [ ] Cards stack on mobile (<600px)
  - [ ] Images maintain aspect ratio
  - [ ] Hover/touch states working
  - [ ] Text readable

- [ ] **About Me Section**
  - [ ] Profile photo displays correctly
  - [ ] Facts list readable
  - [ ] Tags wrap properly
  - [ ] Metrics cards stack on mobile
  - [ ] Certification grid responsive

- [ ] **Education Timeline**
  - [ ] Timeline spine hidden on mobile
  - [ ] Cards stack vertically
  - [ ] Images display correctly
  - [ ] Badges positioned properly
  - [ ] No overlapping elements

- [ ] **Experience Timeline**
  - [ ] Cards stack vertically
  - [ ] Year badges positioned correctly
  - [ ] Highlights wrap properly
  - [ ] No timeline artifacts visible

- [ ] **Skills Section**
  - [ ] Grid: 4→3→2→1 column collapse
  - [ ] Icons sized appropriately
  - [ ] Progress bars visible
  - [ ] Skill items readable
  - [ ] Category cards properly spaced

---

## Edge Cases & Bug Testing

### Orientation Changes
- [ ] Portrait → Landscape smooth transition
- [ ] Landscape → Portrait smooth transition
- [ ] No layout breaks on orientation change
- [ ] No content cut off

### Zoom & Accessibility
- [ ] Page zoomable to 200%
- [ ] Content still accessible when zoomed
- [ ] No horizontal scroll when zoomed
- [ ] Text reflows properly

### Content Edge Cases
- [ ] Long skill names don't overflow
- [ ] Long company names wrap properly
- [ ] Multiple badges display correctly
- [ ] Many highlights in experience cards

### Browser-Specific Issues
- [ ] iOS Safari address bar collapse behavior
- [ ] Android Chrome bottom nav handling
- [ ] Firefox mobile rendering
- [ ] Samsung Internet compatibility

### Network Edge Cases
- [ ] JSON fails to load (error handling)
- [ ] Slow network doesn't break layout
- [ ] Images lazy load on slow connections

---

## Cross-Browser Compatibility

### Modern Browsers (Last 2 Versions)
- [ ] Chrome Mobile 110+
- [ ] Safari iOS 15+
- [ ] Firefox Mobile 110+
- [ ] Samsung Internet 20+
- [ ] Edge Mobile

### CSS Feature Support
- [ ] CSS Grid supported
- [ ] Flexbox supported
- [ ] CSS clamp() supported
- [ ] CSS custom properties (variables) supported
- [ ] backdrop-filter supported (with fallback)
- [ ] CSS calc() supported

---

## Deployment Testing

### Azure Static Web Apps
- [ ] Test environment deployed
- [ ] Production environment deployed
- [ ] CDN caching working
- [ ] HTTPS certificates valid
- [ ] Custom domain working (if applicable)

### Post-Deployment Checks
- [ ] All routes accessible
- [ ] Assets loading from CDN
- [ ] No 404 errors
- [ ] JSON config accessible
- [ ] Images loading correctly

---

## Final QA Checklist

- [ ] All breakpoints tested (320px, 375px, 480px, 768px, 1024px)
- [ ] No console errors in any browser
- [ ] All animations working smoothly
- [ ] Touch interactions feel natural
- [ ] Text is readable on all devices
- [ ] Images display correctly everywhere
- [ ] Performance targets met
- [ ] Accessibility requirements met
- [ ] Cross-browser compatibility verified
- [ ] Safe for production deployment

---

## Known Issues / Limitations

Document any known issues or limitations discovered during testing:

1. **Sass Deprecation Warnings:**
   - Mixed declarations warning in _skills.scss
   - Non-critical, will be addressed in future Sass version update
   - Does not affect functionality

2. **Browser Compatibility:**
   - backdrop-filter not supported in older browsers (graceful degradation)
   - CSS clamp() requires modern browsers (fallback: fixed sizes)

3. **Performance:**
   - Browserslist data 11 months old (non-critical)
   - Consider running `npx update-browserslist-db@latest`

---

## Testing Tools

### Recommended Testing Tools
- **Chrome DevTools:** Mobile device simulation
- **Firefox Responsive Design Mode:** Device testing
- **BrowserStack:** Real device testing
- **Lighthouse CI:** Automated performance testing
- **WebPageTest:** Performance analysis
- **WAVE:** Accessibility testing
- **axe DevTools:** Accessibility auditing

### Testing Commands
```bash
# Run local development server for testing
npm start

# Build production CSS for testing
npm run build:css

# Run Lighthouse audit (Chrome DevTools)
# Open DevTools → Lighthouse → Mobile → Analyze
```

---

**Last Updated:** January 16, 2026  
**Next Review:** After testing completion  
**Testing Owner:** QA Team / Developer
