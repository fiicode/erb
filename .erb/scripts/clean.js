<<<<<<< HEAD
import { rimrafSync } from 'rimraf';
import fs from 'fs';
=======
import rimraf from 'rimraf';
>>>>>>> 9d274df (Initial commit)
import webpackPaths from '../configs/webpack.paths';

const foldersToRemove = [
  webpackPaths.distPath,
  webpackPaths.buildPath,
  webpackPaths.dllPath,
];

foldersToRemove.forEach((folder) => {
<<<<<<< HEAD
  if (fs.existsSync(folder)) rimrafSync(folder);
=======
  rimraf.sync(folder);
>>>>>>> 9d274df (Initial commit)
});
