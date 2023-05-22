import rimraf from 'rimraf';
<<<<<<< HEAD
=======
import fs from 'fs';
>>>>>>> upstream/main
import webpackPaths from '../configs/webpack.paths';

const foldersToRemove = [
  webpackPaths.distPath,
  webpackPaths.buildPath,
  webpackPaths.dllPath,
];

foldersToRemove.forEach((folder) => {
<<<<<<< HEAD
  rimraf.sync(folder);
=======
  if (fs.existsSync(folder)) rimraf.sync(folder);
>>>>>>> upstream/main
});
