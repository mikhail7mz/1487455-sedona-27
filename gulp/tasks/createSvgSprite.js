import { stacksvg } from 'gulp-stacksvg';

export const createSvgSprite = () => {
  return gulp.src('source/img/icons/*.svg')
    .pipe(stacksvg({ output: 'sprite' }))
    .pipe(gulp.dest('build/img'));
}
