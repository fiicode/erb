
import rimraf from 'rimraf';
// import { rimrafSync } from 'rimraf';
import webpackPaths from '../configs/webpack.paths';

const foldersToRemove = [
  webpackPaths.distPath,
  webpackPaths.buildPath,
  webpackPaths.dllPath,
];

foldersToRemove.forEach((folder) => {
  if (fs.existsSync(folder)) rimraf.sync(folder);
  // if (fs.existsSync(folder)) rimrafSync(folder);
});
