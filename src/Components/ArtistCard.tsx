import './ArtistCard.css';
import {Link} from "react-router-dom";

const spotifyIcon = 'https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_White.png';

interface Artist {
    id: string;
    name: string;
    description: string;
    url: string;
    imageURL: string;
    instagram: string;
    twitter: string;
}

interface ArtistCardProps {
    artist: Artist;
}

export default function ArtistCard({artist}: ArtistCardProps) {
    return (
        <div className={'artist-card'}
             style={{
                 backgroundImage: `url(${artist.imageURL})`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center'
             }}
        >
            <div className={'artist-info'}>
                <h2>
                    {artist.name}
                </h2>
                <div>
                    <span><Link to={`/view/${artist.id}`}>i</Link></span>
                    <span>e</span>
                </div>
            </div>
            <div className="artist-links">
                <a href={artist.url} target={'_blank'}>
                    <img src={spotifyIcon} alt="Spotify"/>
                </a>
            </div>
            <p>{artist.description}</p>
        </div>
    );
}