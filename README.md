
![system.css](https://i.imgur.com/0RbDEWz.png)

System.css is a CSS library for building interfaces that resemble Apple's System OS which ran from 1984-1991. Design-wise, not much really changed from System 1 to System 6; however this library is based on System 6 as it was the final monochrome version of MacOS.

Fortunately, this library does not use any JavaScript and is compatible with any front-end framework of your choice. Most styles can also be overwritten to allow for deeper customization.

## Getting Started
There's a couple ways you can get started with System.css!

**Import from CDN**

Here's some starter code to help you get started:
```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>System.css Starter</title>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="https://unpkg.com/@sakun/system.css@0.1.0/dist/system.css" />
    </head>
    <body>
        <div class="window" style="width:30rem;">
            <div class="title-bar"> 
                <button class="close"></button>
                <h1 class="title">System.css</h1>
                <button class="resize"></button>
            </div>
            <div class="separator"></div>
            
            <div class="window-pane">
                Hello world!
            </div>
        </div>

        <div class="window" style="width:30rem;">
            <div class="title-bar"> 
              <button class="close"></button>
              <h1 class="title">Search</h1>
              <button class="hidden"></button>
            </div>
            <div class="separator"></div>
            
            <div class="modeless-dialog">
              <section class="field-row" style="justify-content: flex-start">
                <p class="modeless-text">Find:</p>
                <input type="text" style="width:100%;" placeholder=""/>
          
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


## Contributing, Credits, etc.

Thanks for checking this project out! This library was made in good fun and was largely inspired by [98.css](https://github.com/jdan/98.css). The Chicago 12pt and Geneva 9pt fonts are recreations by [@blogmywiki](https://twitter.com/blogmywiki)

 System.css is still in beta! I recreated components based on Apple's Human Interface Guidelines. However, there's still a pretty good chance that I've might've missed/overlooked something essential. I've also had to recreate most of the assets, which can also be found here.

If you find a bug, consider opening an issue. If there's something that you'd like to add, please feel free to create a PR!

If you'd like to see what else I'm up to, consider following me on [Twitter](https://twitter.com/sakofchit) or checking out my [personal site](https://sakun.co) :)