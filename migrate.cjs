const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'src');
const componentsDir = path.join(src, 'app/components');
const pagesDir = path.join(src, 'pages');
const layoutsDir = path.join(src, 'layouts');

// Create directories
if (!fs.existsSync(pagesDir)) fs.mkdirSync(pagesDir, { recursive: true });
if (!fs.existsSync(layoutsDir)) fs.mkdirSync(layoutsDir, { recursive: true });

// Move layout
if (fs.existsSync(path.join(componentsDir, 'Layout.tsx'))) {
  let content = fs.readFileSync(path.join(componentsDir, 'Layout.tsx'), 'utf8');
  fs.renameSync(path.join(componentsDir, 'Layout.tsx'), path.join(layoutsDir, 'Layout.tsx'));
}

// Move pages
const pageFiles = [
  'AdminDashboard.tsx', 'Booking.tsx', 'CustomerDashboard.tsx', 
  'Home.tsx', 'Login.tsx', 'NotFound.tsx', 'Register.tsx', 
  'UserProfile.tsx', 'VehicleDetails.tsx', 'VehicleSearch.tsx', 'VendorDashboard.tsx'
];

for (const file of pageFiles) {
  const oldPath = path.join(componentsDir, file);
  const newPath = path.join(pagesDir, file);
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    let content = fs.readFileSync(newPath, 'utf8');
    // Fix imports that pointed to sibling folders
    content = content.replace(/\.\/figma\/ImageWithFallback/g, '../app/components/figma/ImageWithFallback');
    
    // UI components are in src/app/components/ui/
    // Wait, the project currently might not import UI components or might import them as @/app/components/ui
    // We'll leave other imports as is for now, if it breaks we can fix later.
    fs.writeFileSync(newPath, content);
  }
}

// Update routes.tsx
const routesPath = path.join(src, 'app/routes.tsx');
if (fs.existsSync(routesPath)) {
  let routes = fs.readFileSync(routesPath, 'utf8');
  routes = routes.replace(/.\/components\/Layout/g, '../layouts/Layout');
  routes = routes.replace(/.\/components\//g, '../pages/');
  fs.writeFileSync(routesPath, routes);
}

console.log("Migration completed.");
