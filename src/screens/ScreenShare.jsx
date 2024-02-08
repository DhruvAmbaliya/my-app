import React from "react";
import { ReactMediaRecorder, useReactMediaRecorder } from 'react-media-recorder';

function Recorder(){
    const {status,startRecording,stopRecording,mediaBlobUrl} = useReactMediaRecorder({screen:true});
    return(
        <div>
            <p>{status}</p>
            <button onClick={startRecording}>Start Sharing</button>
            <button onClick={stopRecording}>Stop Sharing</button>
            <video src={mediaBlobUrl} width={500} height={500} autoPlay controls ></video>
        </div>
    )
}

export default Recorder;