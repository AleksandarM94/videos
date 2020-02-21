import React from "react";

const VideoDetail = ({video}) => {
	if (!video) {
		return (
			<div class="ui segment">
				<div class="ui active dimmer">
					<div class="ui text loader">Loading</div>
				</div>
			</div>
		);
	}
	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
	return (
		<div>
			<div style={mystyle} className="ui embed">
				<iframe title="video player" src={videoSrc} />
			</div>
			<div style={mystyle1} className="ui segment">
				<h4 className="ui header">{video.snippet.title}</h4>
				<p>{video.snippet.description}</p>
			</div>
		</div>
	);
};

const mystyle = {
	margin: "0px 30px"
};
const mystyle1 = {
	padding: "20px 20px",
	margin: "0px 30px"
};
export default VideoDetail;
