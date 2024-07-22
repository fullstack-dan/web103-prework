import './ShowArtists.css';
import ArtistCard from '../Components/ArtistCard';
import {supabase} from '../client.js';
import {useEffect, useState} from "react";

export default function ShowArtists() {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        async function fetchArtists() {
            let {data: artists, error} = await supabase
                .from('artists')
                .select('*');
            setArtists(artists);
        }

        fetchArtists();
    }, []);

    return (
        <div id={"show-artists"}>
            <h1>Check out my favorite artists</h1>
            <div className="gallery">
                {artists.length === 0 ? (
                    <p>No artists available at the moment.</p>
                ) : (
                    artists.map((artist) => (
                        <ArtistCard key={artist.id} artist={artist}/>
                    ))
                )}
            </div>
        </div>
    );
}