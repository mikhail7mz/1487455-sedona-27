import squoosh from 'gulp-libsquoosh';

export const createWebp = () => {
  return gulp.src('source/img/**.*.{jpg,png}')
    .pipe(squoosh({
      webp: {}
    }))
    .pipe(gulp.dest('build/img'));
}
