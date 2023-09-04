<<<<<<< HEAD
import rimraf from 'rimraf';
<<<<<<< HEAD
=======
=======
import { rimrafSync } from 'rimraf';
>>>>>>> upstream/main
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
<<<<<<< HEAD
  rimraf.sync(folder);
=======
  if (fs.existsSync(folder)) rimraf.sync(folder);
>>>>>>> upstream/main
=======
  if (fs.existsSync(folder)) rimrafSync(folder);
>>>>>>> upstream/main
});
