<<<<<<< HEAD
=======
import fs from 'fs';
>>>>>>> upstream/main
import path from 'path';
import rimraf from 'rimraf';
import webpackPaths from '../configs/webpack.paths';

export default function deleteSourceMaps() {
<<<<<<< HEAD
  rimraf.sync(path.join(webpackPaths.distMainPath, '*.js.map'));
  rimraf.sync(path.join(webpackPaths.distRendererPath, '*.js.map'));
=======
  if (fs.existsSync(webpackPaths.distMainPath))
    rimraf.sync(path.join(webpackPaths.distMainPath, '*.js.map'), {
      glob: true,
    });
  if (fs.existsSync(webpackPaths.distRendererPath))
    rimraf.sync(path.join(webpackPaths.distRendererPath, '*.js.map'), {
      glob: true,
    });
>>>>>>> upstream/main
}
