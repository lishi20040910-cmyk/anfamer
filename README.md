# MeadowBliss-inspired Shopify theme (starter)

This is a starter Shopify theme inspired by the look-and-feel of meadowbliss.org. It's intended as a base for customization and does not include copyrighted content or real images.

Features
- Shopify Online Store 2.0 structure (sections, templates, snippets, assets)
- Responsive CSS, lightweight JS for menu and CTA interactions
- Configurable homepage sections via `config/settings_schema.json`
- English placeholder content (en-US)

How to preview locally
1. Install Shopify CLI: https://shopify.dev/themes/tools/cli
2. Authenticate and connect to your store
3. From this repo, run:

   shopify theme serve --path=path/to/your/theme

Or, to upload to your store:

   shopify theme push --theme "Theme name" --allow-live

Notes
- Replace placeholder images in `assets/` with real images.
- Replace site logo by uploading a file in the theme editor or replacing `settings.logo`.
- This theme is a minimal starting point. Add product templates, filters, and integrations as needed.
