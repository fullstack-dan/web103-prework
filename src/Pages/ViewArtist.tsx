import {supabase} from "../client.js";
import {useState} from "react";
import {useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";

import './ViewArtist.css';

const spotifyIcon = 'https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_White.png';
const twitterIcon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553';
const instagramIcon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Instagram_simple_icon.svg/1024px-Instagram_simple_icon.svg.png?20180504195228';

export default function ViewArtist() {
    const [artist, setArtist] = useState(null);

    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchArtist() {
            let {data: artist, error} = await supabase
                .from('artists')
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                console.error('error', error);
            } else {
                setArtist(artist);
            }
        }

        fetchArtist();
    }, []);

    const deleteArtist = async () => {
        let {error} = await supabase
            .from('artists')
            .delete()
            .eq('id', id);

        if (error) {
            console.error('error', error);
        } else {
            console.log('deleted');
            navigate('/home');
        }
    }


    return (
        <div>
            {artist && (
                <>
                    <div className={'artist-view'}>
                        <img src={artist.imageURL} alt={artist.name}/>
                        <div className={'artist-info'}>
                            <h2>{artist.name}</h2>
                            <p>{artist.description}</p>
                            {artist.url ? (
                                <a href={artist.url} target={'_blank'}><span>
                            <img src={spotifyIcon} alt="Spotify"/>
                        </span>Spotify</a>) : null}
                            {artist.instagram ? (
                                <a href={artist.instagram} target={'_blank'}><span>
                                <img src={instagramIcon} alt="Instagram"
                                     style={{filter: 'invert(100%)'}}
                                />
                            </span>Instagram</a>) : null}
                            {artist.twitter ? (
                                <a href={artist.twitter} target={'_blank'}><span>
                                <img src={twitterIcon} alt="Twitter"
                                     style={{filter: 'brightness(0) saturate(100%) invert(100%)'}}
                                />
                            </span>Twitter</a>) : null}
                        </div>
                    </div>
                    <div className='artist-controls'>
                        <Link to={`/edit/${artist.id}`}>
                            <button>Edit</button>
                        </Link>
                        <button onClick={deleteArtist}>Delete</button>
                    </div>
                </>
            )}
        </div>
    );
}