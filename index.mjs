import fs from 'fs';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const features = JSON.parse(fs.readFileSync(path.join(__dirname, 'resources/features-registry.json'), 'utf-8'));
const cms = JSON.parse(fs.readFileSync(path.join(__dirname, 'resources/content-model-schema.json'), 'utf-8'));
const capabilities = JSON.parse(fs.readFileSync(path.join(__dirname, 'resources/capabilities-metadata.json'), 'utf-8'));

export { features, cms, capabilities };