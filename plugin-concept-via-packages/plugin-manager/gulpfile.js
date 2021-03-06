/* eslint-disable */
var gulp = require('gulp'),
  path = require('path'),
  ngc = require('@angular/compiler-cli/src/main').main,
  rollup = require('gulp-rollup'),
  rename = require('gulp-rename'),
  del = require('del'),
  runSequence = require('run-sequence'),
  inlineResources = require('./tools/gulp/inline-resources');

const rootFolder = path.join(__dirname);
const srcFolder = path.join(rootFolder, 'src');
const tmpFolder = path.join(rootFolder, '.tmp');
const buildFolder = path.join(rootFolder, 'build');
const distFolder = path.join(rootFolder, 'dist');

/**
 * 1. Delete /dist folder
 */
gulp.task('clean:dist', function () {
  return deleteFolders([distFolder]);
});

/**
 * 2. Clone the /src folder into /.tmp. If an npm link inside /src has been made,
 *    then it's likely that a node_modules folder exists. Ignore this folder
 *    when copying to /.tmp.
 */
gulp.task('copy:source', function () {
  return gulp.src([`${srcFolder}/**/*`, `!${srcFolder}/node_modules`])
    .pipe(gulp.dest(tmpFolder));
});

/**
 * 3. Inline template (.html) and style (.css) files into the the component .ts files.
 *    We do this on the /.tmp folder to avoid editing the original /src files
 */
gulp.task('inline-resources', function () {
  return Promise.resolve()
    .then(() => inlineResources(tmpFolder));
});


/**
 * 6. Run the Angular compiler, ngc, on the /.tmp folder. This will output all
 *    compiled modules to the /build folder.
 */
gulp.task('ngc:es5', function () {
  return ngc({
    project: `${tmpFolder}/tsconfig.release.es5.json`
  })
    .then((exitCode) => {
      if (exitCode === 1) {
        // This error is caught in the 'compile' task by the runSequence method callback
        // so that when ngc fails to compile, the whole compile process stops running
        throw new Error('ngc compilation failed');
      }
    });
});

/**
 * 4. Run the Angular compiler, ngc, on the /.tmp folder. This will output all
 *    compiled modules to the /build folder.
 */
gulp.task('ngc:es', function () {
  return ngc({
    project: `${tmpFolder}/tsconfig.release.es.json`
  })
    .then((exitCode) => {
      if (exitCode === 1) {
        // This error is caught in the 'compile' task by the runSequence method callback
        // so that when ngc fails to compile, the whole compile process stops running
        throw new Error('ngc compilation failed');
      }
    });
});


/**
 * 5. Run rollup inside the /build folder to generate our Flat ES module and place the
 *    generated file into the /dist folder
 */
gulp.task('rollup:es', function () {
  return gulp.src(`${buildFolder}/**/*.js`)
  // transform the files here.
    .pipe(rollup({

      // Bundle's entry point
      // See https://github.com/rollup/rollup/wiki/JavaScript-API#entry
      entry: `${buildFolder}/plugin-manager.js`,

      // A list of IDs of modules that should remain external to the bundle
      // See https://github.com/rollup/rollup/wiki/JavaScript-API#external
      external: [
        '@angular/core',
        '@angular/common'
      ],

      // Format of generated bundle
      // See https://github.com/rollup/rollup/wiki/JavaScript-API#format
      format: 'es'
    }))
    .pipe(rename('plugin-manager.js'))
    .pipe(gulp.dest(distFolder));
});

/**
 * 7. Run rollup inside the /build folder to generate our Flat ES module and place the
 *    generated file into the /dist folder
 */
gulp.task('rollup:umd', function () {
  return gulp.src(`${buildFolder}/**/*.js`)
  // transform the files here.
    .pipe(rollup({

      // Bundle's entry point
      // See https://github.com/rollup/rollup/wiki/JavaScript-API#entry
      entry: `${buildFolder}/plugin-manager.es5.js`,

      // A list of IDs of modules that should remain external to the bundle
      // See https://github.com/rollup/rollup/wiki/JavaScript-API#external
      external: [
        '@angular/core',
        '@angular/common'
      ],

      // Format of generated bundle
      // See https://github.com/rollup/rollup/wiki/JavaScript-API#format
      format: 'umd',

      // Export mode to use
      // See https://github.com/rollup/rollup/wiki/JavaScript-API#exports
      exports: 'named',

      // The name to use for the module for UMD/IIFE bundles
      // (required for bundles with exports)
      // See https://github.com/rollup/rollup/wiki/JavaScript-API#modulename
      moduleName: 'plugin-manager',

      // See https://github.com/rollup/rollup/wiki/JavaScript-API#globals
      globals: {
        typescript: 'ts'
      }
    }))
    .pipe(rename('plugin-manager.umd.js'))
    .pipe(gulp.dest(distFolder));
});

/**
 * 8. Run rollup inside the /build folder to generate our Flat ES module and place the
 *    generated file into the /dist folder
 */
gulp.task('rollup:es5', function () {
  return gulp.src(`${buildFolder}/**/*.js`)
  // transform the files here.
    .pipe(rollup({

      // Bundle's entry point
      // See https://github.com/rollup/rollup/wiki/JavaScript-API#entry
      entry: `${buildFolder}/plugin-manager.es5.js`,

      // A list of IDs of modules that should remain external to the bundle
      // See https://github.com/rollup/rollup/wiki/JavaScript-API#external
      external: [
        '@angular/core',
        '@angular/common'
      ],

      // Format of generated bundle
      // See https://github.com/rollup/rollup/wiki/JavaScript-API#format
      format: 'es',

      // Export mode to use
      // See https://github.com/rollup/rollup/wiki/JavaScript-API#exports
      exports: 'named',

      // The name to use for the module for UMD/IIFE bundles
      // (required for bundles with exports)
      // See https://github.com/rollup/rollup/wiki/JavaScript-API#modulename
      moduleName: 'plugin-manager-es5',

      // See https://github.com/rollup/rollup/wiki/JavaScript-API#globals
      globals: {
        typescript: 'ts'
      }
    }))
    .pipe(rename('plugin-manager.es5.js'))
    .pipe(gulp.dest(distFolder));
});


/**
 * 9. Copy all the files from /build to /dist, except .js files. We ignore all .js from /build
 *    because with don't need individual modules anymore, just the Flat ES module generated
 *    on step 5.
 */
gulp.task('copy:build', function () {
  return gulp.src([`${buildFolder}/**/*`])
    .pipe(gulp.dest(distFolder));
});

/**
 * 10. Copy package.json from /src to /dist
 */
gulp.task('copy:manifest', function () {
  return gulp.src([path.join(rootFolder, 'package.json')])
    .pipe(gulp.dest(distFolder));
});

/**
 * 11. Copy README.md from / to /dist
 */
gulp.task('copy:readme', function () {
  return gulp.src([path.join(rootFolder, 'README.MD')])
    .pipe(gulp.dest(distFolder));
});

/**
 * 12. Delete /.tmp folder
 */
gulp.task('clean:tmp', function () {
  return deleteFolders([tmpFolder]);
});

/**
 * 13. Delete /build folder
 */
gulp.task('clean:build', function () {
  return deleteFolders([buildFolder]);
});


/**
 * 14. Copy assets
 */
gulp.task('copy:assets', function () {
  return gulp.src([path.join(srcFolder, 'assets', '**/*')])
    .pipe(gulp.dest(path.join(distFolder, 'assets')));
});

/**
 * 15. Copy scss
 */
gulp.task('copy:scss', function () {
  return gulp.src([path.join(srcFolder, '**/*.scss')])
    .pipe(gulp.dest(distFolder));
});

/**
 * 16. Copy docs
 */
gulp.task('copy:docs', function () {
  return gulp.src([path.join(rootFolder, 'docs', '**/*')])
    .pipe(gulp.dest(path.join(distFolder, 'docs')));
});

gulp.task('compile', function () {
  runSequence(
    'clean:dist',
    'copy:source',
    'inline-resources',
    'ngc:es',
    'rollup:es',
    'ngc:es5',
    'rollup:umd',
    'rollup:es5',
    'copy:build',
    'copy:manifest',
    'copy:readme',
    'clean:build',
    'clean:tmp',
    'copy:assets',
    'copy:scss',
    'copy:docs',
    function (err) {
      if (err) {
        console.log('ERROR:', err.message);
        deleteFolders([distFolder, tmpFolder, buildFolder]);
      } else {
        console.log('Compilation finished succesfully');
      }
    });
});

/**
 * Watch for any change in the /src folder and compile files
 */
gulp.task('watch', function () {
  gulp.watch(`${srcFolder}/**/*`, ['compile']);
});

gulp.task('clean', ['clean:dist', 'clean:tmp', 'clean:build']);

gulp.task('build', ['clean', 'compile']);
gulp.task('build:watch', ['build', 'watch']);
gulp.task('default', ['build:watch']);

/**
 * Deletes the specified folder
 */
function deleteFolders(folders) {
  return del(folders);
}
