document.addEventListener("DOMContentLoaded", function() {
    var oppenheimerParagraph = document.querySelectorAll(".grid-item p")[17];
    var videoSrc = "open_video.mp4"; // Path to the video file

    oppenheimerParagraph.addEventListener("click", function() {
        // Create video element
        var video = document.createElement("video");
        video.setAttribute("controls", "true");
        video.setAttribute("autoplay", "true");
        
        // Create source element
        var source = document.createElement("source");
        source.setAttribute("src", videoSrc);
        source.setAttribute("type", "video/mp4");

        // Append source to video
        video.appendChild(source);

        // Insert video below the title box
        var titleBox = document.querySelector(".title-box");
        titleBox.parentNode.insertBefore(video, titleBox.nextSibling);

        // Scroll to the video element
        video.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
