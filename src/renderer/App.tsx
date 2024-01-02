import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.png';
import './App.css';
import { useEffect, useState } from 'react';
import { UpdateDownloadProgressArgs } from '../main/preload';

function Hello() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateDownloadProgress = (args: UpdateDownloadProgressArgs) => {
      const value = args.percent;
      // console.log(args, value, progress)
      setProgress((prevProgress) => {
        if (value > prevProgress) {
          return value;
        }
        return prevProgress;
      });
    };

    const ipcRenderer = window.electron.ipcRenderer;
    const unsubscribe = ipcRenderer.listen('update-download-progress', updateDownloadProgress);

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <div className="Hello">
          <img width="100" alt="icon" src={icon} />
        </div>
        <h2>fiistore.io</h2>
        {progress === 0 ? (
          <span className="loader" />
        ) : (
          <>
            <div className="meter">
              <span style={{ width: `${progress}%` }}></span>
            </div>
            <small>Veuillez patienter pendant le téléchargement de la dernière version </small>
            <footer style={{ position: 'absolute', bottom: 0, textAlign: 'center', paddingBottom: '10px', marginLeft: '105px' }}>
              <span>Copyright© 2015 - {new Date().getFullYear()}™</span>
            </footer>
          </>
        )}
      </div>
    </>
  );
}
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
