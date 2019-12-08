# Motion Webcam Webhookify Plugin

This plugin sends you base64 encoded pictures from your Motion webcam server which is only accessible within your network.

## Installation

Install the plugin globally by running

    npm i -g whfp-motion-webcam

## Configuration

The plugin only needs a single configuration key, which is called `imgUrl`.
Usually, this you be some like `http://localhost:8081/current`, to access the current frame of your Motion live server running on localhost.
While this is the intended use, you could also plug in any old URL pointing to a JPEG image, for example `http://localhost:8080/?action=snapshot` if you're using MJPEG-streamer.
If you get an error like _Corrupt JPEG data: 2 extraneous bytes before marker 0xd6_, you might have to set `compression` to `false` (default: **true**), since the JPEG image is malformed in some way.

Example:
```json
{
    "imgUrl": "http://localhost:8081/current",
    "compression": true
}
```

## Reply

The reply has one of two formats. Either you get an base64 encoded image:
```json
{ "image": "<base64 encoded image data>" }
```

or you get an error:
```json
{ "error": "<error message>" }
```