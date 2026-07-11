const fs = require('fs');
const html = fs.readFileSync('C:/Users/Adeel EK6/.gemini/antigravity/brain/0074452b-38cb-4a73-9a79-2b6b696414de/.system_generated/steps/1283/content.md', 'utf8');

const text = html
  .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
  .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
  .replace(/<[^>]+>/g, '\n')
  .replace(/\n\s*\n/g, '\n')
  .trim();

console.log(text.substring(0, 10000));
