module.exports = (() => {

  // PROJECT
  const project = {
    src:  './src',
    dest: './html',
    port: 3000
  };

  // ASSETS
  const assets = {
    src:  `${project.src}/assets`,
    dest: `${project.dest}/assets`
  };

  assets.audios = {
    src:   `${assets.src}/audios/**/*.{mp3,ogg,ogm,ogv,wav}`,
    dest:  `${assets.dest}/audios`,
  };

  assets.fonts = {
    src:   `${assets.src}/fonts/**/*.{eot,svg,ttf,woff,woff2}`,
    dest:  `${assets.dest}/fonts`,
  };

  assets.images = {
    src:   `${assets.src}/images/**/*.{gif,ico,jpeg,jpg,png,svg,webp}`,
    dest:  `${assets.dest}/images`,
  };

  assets.videos = {
    src:   `${assets.src}/videos/**/*.{mp4,ogg,ogm,ogv,webm}`,
    dest:  `${assets.dest}/videos`,
  };

  assets.jsons = {
    src:   `${assets.src}/jsons/**/*.json`,
    dest:  `${assets.dest}/jsons`,
    fileName:  'page.json'
  };

  assets.roots = {
    src:   `${assets.src}/root/.*`,
    dest:  `${project.dest}`,
  };

  // STYLES
  const styles = {
    src:   `${project.src}/styles/**/*.{sass,scss}`,
    dest:  `${project.dest}/css`
  };

  const scripts = {
    src:     `${project.src}/scripts/**/*.ts`,
    dest:    `${project.dest}/js`
  };

  // PUGS
  const pugs = {
    src:   `${project.src}/pugs/**/*.pug`,
    watch: `${project.src}/pugs/**/*.pug`,
    filter: ['*', '**/*', '!_*.*', '!*/_*.*', '!*/**/_*.*']
  };

  // VENDOR SCRIPTS
  const vendor = {
    src:   `${project.src}/js/vendor/**/*.js`,
    dest:  `${project.dest}/js`,
    concat: 'vendor.js'
  };

  return {
    project: project,
    assets: assets,
    scripts: scripts,
    styles: styles,
    pugs: pugs,
    vendor: vendor,
  };
})();
