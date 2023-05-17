const gulp = require('gulp');
const { exec } = require('child_process');

gulp.task('compile-typescript', function (done) {
  exec('node ./esbuild.config.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.error(stderr);
    done(err);
  });
});

const path = require('path');

gulp.task('copy-schema', function () {
  const schemaPath = path.join(__dirname, '../../cms/src/api/separator/content-types/separator/schema.json');
  return gulp.src(schemaPath)
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', gulp.series('compile-typescript','copy-schema'));