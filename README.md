# introduce_compedia
- This product using GULP to build SASS and extract file [.css / .js] to [.min.css / .min.js]
- Install GULP
    + Document:
        * https://www.youtube.com/watch?v=LYbt50dhTko
        * https://www.freecodecamp.org/news/gulp-4-walk-through-with-example-code-c3c018eab306/
    + Plugin:
        * https://www.npmjs.com/
    + Function GULP from NPM need to install:
        * npm install node-sass gulp-sass --save-dev
        * npm install --save-dev gulp-cssmin
        * npm install --save-dev gulp-jsmin
    + Build SASS/CSS/JS:
        * Step 1: cd to folder have gulpfile.js file
            - $ cd folder-name/introduce_compedia
        * Step 2: run command 'gulp'
            - $ gulp
- Note:
    Strategies for cache busting
    + When ever change version css/js, just add or change string: '?v=' + number (ex: ?v=1.0) 
    in the last of 'src'/'href' after file css/js name