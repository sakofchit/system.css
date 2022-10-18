
![system.css](https://i.imgur.com/goRcNZK.png)

[Documentation](https://sakofchit.github.io/system.css/)

System.css is a CSS library for building interfaces that resemble Apple's System OS which ran from 1984-1991. Design-wise, not much really changed from System 1 to System 6; however, this library is based on System 6 as it was the final monochrome version of macOS.

Fortunately, this library does not use any JavaScript and is compatible with any front-end framework of your choice. Most styles can also be overwritten to allow for deeper customization.

## Getting Started
There are a couple of ways you can get started with System.css!

**Import from CDN (easiest)**

Add the following to your head tag:

```html
<link rel="stylesheet" href="https://unpkg.com/@sakun/system.css" />
```

Here's some starter code to help you get started:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>System.css Starter</title>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="https://unpkg.com/@sakun/system.css" />
</head>
<body>
    <div class="window" style="width:30rem;">
        <div class="title-bar"> 
            <button aria-label="Close" class="close"></button>
            <h1 class="title">System.css</h1>
            <button aria-label="Resize" class="resize"></button>
        </div>
        <div class="separator"></div>
        
        <div class="window-pane">
            Hello world!
        </div>
    </div>

    <div class="window" style="width:30rem;">
        <div class="title-bar"> 
            <button aria-label="Close" class="close"></button>
            <h1 class="title">Search</h1>
            <button aria-label="Resize" disabled class="hidden"></button>
        </div>
        <div class="separator"></div>
        
        <div class="modeless-dialog">
            <section class="field-row" style="justify-content: flex-start">
                <label for="text_find" class="modeless-text">Find:</label>
                <input id="text_find" type="text" style="width:100%;" placeholder="">
            </section>
            <section class="field-row" style="justify-content: flex-end">
                <button class="btn">Cancel</button>
                <button class="btn" style="width:95px;">Find</button>
            </section>
        </div>
        </div>
</body>
</html>
```

**Import from [npmjs](https://www.npmjs.com/package/@sakun/system.css)**

    npm i @sakun/system.css

## Developing

1. Clone the repository and run ```npm install```
2. Run ```npm start``` to start the development environment.

Everything you'll need can be found in [style.css](https://github.com/sakofchit/system.css/blob/main/style.css).


## Contributing, Credits, etc.

Thanks for checking this project out! This library was made in good fun and was largely inspired by [98.css](https://github.com/jdan/98.css). The Chicago 12pt and Geneva 9pt fonts are recreations by [@blogmywiki](https://twitter.com/blogmywiki)

 System.css is still in beta! I recreated components based on Apple's Human Interface Guidelines. However, there's still a pretty good chance that I might've missed/overlooked something essential. I've also had to recreate most of the assets, which can also be found [here](https://github.com/sakofchit/system.css/tree/main/icon).

If you find a bug, consider opening an issue. If there's something that you'd like to add, please feel free to create a PR!

If you'd like to see what else I'm up to, consider following me on [Twitter](https://twitter.com/sakofchit) or checking out my [personal site](https://sakun.co) :)

## Sponsors
[![CSS Scan](https://d33wubrfki0l68.cloudfront.net/6da92d1f39c939204d13f67ec76e725362b41e70/55cb0/img/logo.png)](https://getcssscan.com/?ref=systemcss)

[CSS Scan](https://getcssscan.com/?ref=systemcss): The fastest and easiest way to check, copy and edit CSS
