# Motion Webcam Webhookify Plugin

This plugin sends you base64 encoded pictures from your Motion webcam server which is only accessible within your network.

## Installation

Install the plugin globally by running

    npm i -g whfp-motion-webcam

## Configuration

The plugin only needs a single configuration key, which is called `imgUrl`.
Usually, this you be some like `http://localhost:8081/current`, to access the current frame of your Motion live server running on localhost.
While this is the intended use, you could also plug in any old URL pointing to a JPEG image.

Example:
```json
{
    "imgUrl": "http://localhost:8081/current"
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