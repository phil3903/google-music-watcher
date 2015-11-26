#google-music-watcher

Watch file location with Node.js; Upload to Google Play Music with Python.

##Prereqs
+ Node.js 4.X+
+ ffmpeg or avconv
[comment]: <> (Linux ffmpeg - $ sudo apt-get install libav-tools libavcodec-extra-53)

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