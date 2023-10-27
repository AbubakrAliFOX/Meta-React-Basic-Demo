import ReactPlayer from "react-player/youtube";

export default function MyVideo () {
    return (
        <ReactPlayer controls={true} playing={true} url='https://www.youtube.com/watch?v=XBQWYCPOswM' />
      );
}