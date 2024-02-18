<<<<<<< HEAD
import { ElectronHandler } from '../main/preload';
=======
import { Channels, UpdateDownloadProgressArgs } from 'main/preload';
>>>>>>> main

declare global {
  interface Window {
    electron: {
      ipcRenderer: {
        sendMessage(channel: Channels, args: unknown[]): void;
        on(
          channel: Channels,
          func: (...args: unknown[]) => void
        ): (() => void) | undefined;
        once(channel: Channels, func: (...args: unknown[]) => void): void;
        listen(channel: Channels, func: (args: UpdateDownloadProgressArgs) => void): (() => void) | undefined;
      };
    };
  }
}

export {};
