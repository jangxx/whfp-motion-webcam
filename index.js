const { Plugin } = require('webhookify-plugin');
const request = require('request');
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');

class MotionWebcamPlugin extends Plugin {
	constructor(config) {
		super("motion-webcam", config);
	}

	handleFetch(payload, reply) {
		let imgUrl = this.config.imgUrl;

		if (imgUrl == undefined) {
			return reply({ error: "No imgUrl specified" });
		}

		request({
			url: imgUrl,
			encoding: null,
		}, (err, resp, body) => {
			if (err) return reply({ error: err.message });
			
			imagemin.buffer(body, {
				plugins: [
					imageminJpegtran()
				]
			}).then(img => {
				reply({ image: img.toString("base64") });
			}).catch(err => {
				reply({ error: err.message });
			});
		});
	}
}

module.exports = MotionWebcamPlugin;