import './ArtistCard.css';

const spotifyIcon = 'https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_White.png';

interface Artist {
    name: string;
    description: string;
    url: string;
    imageURL: string;
}

interface ArtistCardProps {
    artist: Artist;
}

export default function ArtistCard({artist}: ArtistCardProps) {
    return (
        <div className={'artist-card'}>
            <div className={'artist-info'}>
                <h2>{artist.name}</h2>
                <div>
                    <span>i</span>
                    <span>e</span>
                </div>
            </div>
            <div className="artist-links">
                <a href={artist.url} target={'_blank'}>
                    <img src={spotifyIcon} alt="Spotify" />
                </a>
            </div>
            <p>{artist.description}</p>
        </div>
    );
}