#google-music-watcher

Watch file location with Node.js; Upload to Google Play Music with Python.

##Prereqs
+ Node.js 4.X+
+ ffmpeg or avconv

##From gmusicapi docs
```bash

Linux
    Use your distro’s package manager: e.g $ sudo apt-get install libav-tools libavcodec-extra-53 (ffmpeg requires extra steps on Debian/Ubuntu).
    Download pre-built binaries of avconv or ffmpeg and edit your path to include the directory that contains avconv.exe/ffmpeg.exe.
Mac
    Use Homebrew to install libav (avconv) or ffmpeg.
Windows
    Download pre-built binaries of avconv or ffmpeg and edit your path to include the directory that contains avconv.exe/ffmpeg.exe.
```

## Installation

```bash
npm install
```

This will install python dependencies, node dependencies, and prompt for oauth.cred creation.

## Usage

```bash
node watcher.js
```

Default watch dir is './watch_dir'