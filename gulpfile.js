import gulp from 'gulp';
import browser from 'browser-sync';
import { clean } from './gulp/tasks/clean.js';
import { copy } from './gulp/tasks/copy.js';
import { copyImages } from './gulp/tasks/copyImages.js';
import { optimizeImages } from './gulp/tasks/optimizeImages.js';
import { html } from './gulp/tasks/html.js';
import { styles } from './gulp/tasks/styles.js';
import { scripts } from './gulp/tasks/scripts.js';
import { createWebp } from './gulp/tasks/createWebp.js';
import { optimizeSvg } from './gulp/tasks/optimizeSvg.js';
import { createSvgSprite } from './gulp/tasks/createSvgSprite.js';
import { server } from './gulp/tasks/server.js';

global.gulp = gulp;
global.browser = browser;

export const watcher = () => {
  gulp.watch('source/sass/**/*.scss', gulp.series(styles));
  gulp.watch('source/js/*.js', gulp.series(scripts));
  gulp.watch('source/*.html', gulp.series(html, browser.reload));
}

export const build = gulp.series(
  clean,
  copy,
  optimizeImages,
  gulp.parallel(
    html,
    styles,
    scripts,
    createWebp,
    optimizeSvg,
    createSvgSprite
));

export default gulp.series(
  clean,
  copy,
  copyImages,
  gulp.parallel(
    html,
    styles,
    scripts,
    createWebp,
    optimizeSvg,
    createSvgSprite
  ),
  gulp.series(
    server,
    watcher
));
