import React from "react";
import Image from "./Image";
import './Gallery.css'

function Gallery(){
    return(
        <div className="gallery">
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7CpdySfqxHiY_E8SWpjJJV3Unw57r6oHxOw&s" 
            description="THE ONE PIECE IS REALL!!!"/>
            <Image src="https://w7.pngwing.com/pngs/678/404/png-transparent-trafalgar-d-water-law-monkey-d-luffy-portgas-d-ace-one-piece-usopp-one-piece-anime-comics-manga-piracy.png" 
            description="THE ONE PIECE IS REALL!!!"/>
            <Image src="https://preview.redd.it/ts2t5kt719m91.jpg?width=1080&crop=smart&auto=webp&s=179ed640659a0589a49c45424fbf84e6a06eb6e3" 
            description="THE ONE PIECE IS REALL!!!"/>
        </div>
    );
}

export default Gallery;