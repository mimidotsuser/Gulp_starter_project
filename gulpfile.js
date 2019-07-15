let gulp=require('gulp');
let sass=require('gulp-sass');
let uglify=require('gulp-uglify');
let ts=require('gulp-typescript');
let autoprefixer=require('gulp-autoprefixer');

let paths={
    ts:{
        scr:'./src/assets/ts/*.ts',
        dest:'./dist/public/assets/js/'
    },
    sass:{
        scr:'./src/public/assets/sass/*.sass',
        dest:'./dist/public/assets/css/'
    },
    html:{
        scr:'./src/public/pages/*.html',
        dest:'./dist/public/pages/'
    },
    images:{
        scr:'./src/public/assets/images/*.',
        dest:'./dist/public/assets/images/'
    }
};

let tsProject=ts.createProject({
    "target": "es3",
    "sourceMap": false,
    "alwaysStrict": true,
    "moduleResolution": "node",
    "noImplictyAny":true
});

function sassTask(){
    return gulp.src(paths.sass.scr)
        .pipe(sass())
        .pipe(autoprefixer({cascade:true}))
        .pipe(gulp.dest(paths.sass.dest))
}

function tsTask() {
    return gulp.src(paths.ts.scr)
        .pipe(tsProject())
        .pipe(uglify())
        .pipe(gulp.dest(paths.ts.dest))
}

function watch(){
    //watch changes
    gulp.watch([paths.sass.scr],sassTask);
    gulp.watch([paths.ts.scr],tsTask);
}


exports.default=gulp.parallel(watch,sassTask,tsTask);

