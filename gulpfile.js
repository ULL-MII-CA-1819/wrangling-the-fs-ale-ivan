
let gulp = require('gulp');
let shell = require('gulp-shell');
const mocha = require('gulp-mocha');


gulp.task("default", ["travis"]);
gulp.task("test", () =>
        gulp.src('./test/test.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}))
);
// gulp.task("test", shell.task("mocha"));

gulp.task('docs', shell.task("asciidoctor docs/resumen.adoc -o docs/index.html"));

gulp.task("pre-install", shell.task([
    "sudo gem install asciidoctor"
    ]));

gulp.task("travis", () => {
  shell.task("sudo gem install asciidoctor");
  shell.task("asciidoctor docs/resumen.adoc -o docs/index.html");
});
