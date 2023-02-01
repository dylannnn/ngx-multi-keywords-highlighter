# Verdaccio

## Configuration

[Default configuration](https://verdaccio.org/docs/configuration)

### Customization Web User Interface

```yaml
web:
  enable: true
  title: Verdaccio
  logo: http://somedomain/somelogo.png
  primary_color: "#4b5e40"
  gravatar: true | false
  scope: "@scope"
  sort_packages: asc | desc
  darkMode: false
  favicon: http://somedomain/favicon.ico | /path/favicon.ico
  rateLimit:
    windowMs: 50000
    max: 1000
  pkgManagers:
    - npm
    - yarn
    - pnpm
  login: true
  scriptsBodyAfter:
    - '<script type="text/javascript" src="https://my.company.com/customJS.min.js"></script>'
  metaScripts:
    - '<script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>'
    - '<script type="text/javascript" src="https://browser.sentry-cdn.com/5.15.5/bundle.min.js"></script>'
    - '<meta name="robots" content="noindex" />'
  scriptsbodyBefore:
    - '<div id="myId">html before webpack scripts</div>'
  html_cache: true
  showInfo: true
  showSettings: true
  # In combination with darkMode you can force specific theme
  showThemeSwitch: true
  showFooter: true
  showSearch: true
  showDownloadTarball: true
  showRaw: true
```
