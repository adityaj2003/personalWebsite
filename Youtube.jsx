// Projects.jsx
import React from 'react';

const Projects = () => {
  return (
   <div id="foreground">
        <div id="introSection">
            <div id="introImage" style={{backgroundImage:"url(Notion.png)", width:"60%", borderRadius:"0px"}}></div>
            <div id="introText">
                <h1> YouTube Transcript to Notion Exporter Extension</h1>
                <h4 style={{color: "#AAA"}}> Get a summary of the video you are watching right into your Notion Workspace</h4>
                <p>This project aims to export the summary of a YouTube video you are currently watching into your notion notebook. It uses OpenAI API, GoogleCloud, Node and Express to get summary of the youtube video.
                </p><p>I use PyTube to get the YouTube URL’s audio, GCloud to get the transcript of the audio and the OpenAI API to get a summary of the video. I then use the NotionAPI to export the summary to the Notion Page. It uses Node to manage all packages and Express to handle all server-client networking.</p>

                 </div>
        </div>
        <div id="imageSection">
            <div class="imageContainer">
                <div class="imageRow">
                    <div class="imageItem" style={{backgroundImage: "url('YTNotion1.png')"}}></div>
                    <div class="imageItem" style={{backgroundImage: "url('YTNotion2.png')"}}></div>
                </div>
                <div class="imageDescription">
                    First image shows the Extension on the chrome web browser. It automatically extracts the url of the current youtube page being played and sends it to the server for processing. The second image shows the summary of the URL in your selected notion page.
                </div>
            </div>
        </div>
    </div> 
  );
};

export default Projects;


