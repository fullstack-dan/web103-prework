import {Link, useNavigate, useParams} from "react-router-dom";
import './EditArtist.css';
import {supabase} from "../client.js";
import {useEffect} from "react";

export default function EditArtist() {
    const navigate = useNavigate();

    const {id} = useParams();

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
                document.getElementById('name').value = artist.name;
                document.getElementById('description').value = artist.description;
                document.getElementById('url').value = artist.url;
                document.getElementById('imageURL').value = artist.imageURL;
                document.getElementById('instagram').value = artist.instagram;
                document.getElementById('twitter').value = artist.twitter;
            }
        }

        fetchArtist();
    }, []);

    async function editArtist(e) {

        e.preventDefault();
        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value;
        const url = document.getElementById('url').value;
        const imageURL = document.getElementById('imageURL').value;
        const instagram = document.getElementById('instagram').value;
        const twitter = document.getElementById('twitter').value;

        let {data: artist, error} = await supabase
            .from('artists')
            .update({name, description, url, imageURL, instagram, twitter})
            .eq('id', id);

        if (error) {
            console.error('error', error);
        } else {
            navigate('/view/' + id);
        }
    }

    return (
        <div className={'add-artist'}>
            <h1>Edit Artist</h1>
            <form onSubmit={editArtist}>
                <label htmlFor="name">Name</label>
                <input type="text" id={'name'}/>
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" cols={30} rows={10}/>
                <label htmlFor="url">Spotify URL</label>
                <input type="text" id={'url'}/>
                <label htmlFor="imageURL">Image URL</label>
                <input type="text" id={'imageURL'}/>
                <label htmlFor="instagram">Instagram</label>
                <input type="text" id={'instagram'}/>
                <label htmlFor="twitter">Twitter</label>
                <input type="text" id={'twitter'}/>
                <div className={'edit-controls'}>
                    <button type={'submit'}>Submit</button>
                    <Link to={'/home'}>
                        <button>Cancel</button>
                    </Link>
                </div>
            </form>
        </div>
    );
}