import React from "react";
import ReactPlayer from "react-player";

const MovieCard = ({el}) =>{
 return(
     <>
        <div className="col-12 col-md-3">
            <div className="card">
            
                <ReactPlayer
                    url={el.videoURL}
                    controls={true}
                />

                <span>{el.description}</span>
                <h5>{el.titre}</h5>
            </div>
        </div>
     </>
 )
}
export default MovieCard;
