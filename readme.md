#### GULP STARTER PROJECT
This project helps one build faster a Gulp project for either node or browser. 
This is just a starter project without any application code.

 **Project template architecture structure**
 ```
 .
 |--- dist
 |      |_public
 |          |
 |          |-assets
 |          |   |
 |          |   |-css 
 |          |   |-images 
 |          |   |-js 
 |          |-pages         
|--- src
 |      |_public
 |          |
 |          |-assets
 |          |   |
 |          |   |-sass 
 |          |   |-images 
 |          |   |-ts 
 |          |       |-index.js
 |          |-pages         
 | gulpfile.js
 | package.json
 | package-lock.json
 | readme.md
 | .gitignore
 
 ```
user sass+typescript files are place under `src/public/assets` respective folders. 
This can be modified in the gulpfile.js at the root folder.
##### MODULES INCLUDED
```
    "gulp": "^4.0.2"
    "gulp-autoprefixer": "^6.1.0"
    "gulp-sass": "^4.0.2"
    "gulp-typescript": "^5.0.1"
    "gulp-uglify": "^3.0.2"
    "typescript": "^3.5.2"
```
### Installation
You should have the latest node (with npm/npx) installed
**Node Project**
- For node project, clone the `node branch`.
- The node starter template does not include any framework or server. You will have to setup one.
- Run `npm install` to load the dependencies
- To compile sass or typescript, run `npm run dev`
