var gulp = require("gulp");
var rename = require("gulp-rename");
var clean = require("gulp-clean");

gulp.task("rename", function(){
  return gulp.src("./build/views/**/*.js")
    .pipe(rename({
      extname: ".jsx"
    }))
    .pipe(gulp.dest("./build/views"));
});

gulp.task("clean", function(){
  return gulp.src("./build/views/**/*.js")
    .pipe(clean({force: true}));
});
