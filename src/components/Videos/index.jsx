import ReactPlayer from "react-player/youtube";

export default function MyVideo ({controls}) {
    return (
        <ReactPlayer controls url='https://www.youtube.com/watch?v=XBQWYCPOswM' />
      );
}