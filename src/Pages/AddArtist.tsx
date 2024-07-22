import './AddArtist.css';
import {supabase} from "../client.js";
import {Link, useNavigate} from "react-router-dom";

export default function AddArtist() {
    const navigate = useNavigate();

    async function addArtist(e) {

        e.preventDefault();
        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value;
        const url = document.getElementById('url').value;
        const imageURL = document.getElementById('imageURL').value;
        const instagram = document.getElementById('instagram').value;
        const twitter = document.getElementById('twitter').value;

        let {data: artist, error} = await supabase
            .from('artists')
            .insert([
                {name, description, url, imageURL, instagram, twitter}
            ]);

        if (error) {
            console.error('error', error);
        } else {
            navigate('/home');
        }
    }

    return (
        <div className={'add-artist'}>
            <h1>Add a New Artist</h1>
            <form onSubmit={addArtist}>
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
                    <button type={'submit'}>Add Artist</button>
                    <Link to={'/home'}>
                        <button>Cancel</button>
                    </Link></div>
            </form>
        </div>
    );
}