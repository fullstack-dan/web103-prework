import {useState} from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from "./Components/Header.tsx";
import ShowArtists from "./Pages/ShowArtists.tsx";
import ViewArtist from "./Pages/ViewArtist.tsx";
import AddArtist from "./Pages/AddArtist.tsx";
import EditCreator from "./Pages/EditArtist.tsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Header/>
            <Router>
                <main>
                    <Routes>
                        <Route path="/" element={<ShowArtists/>}/>
                        <Route path="/view/:id" element={<ViewArtist/>}/>
                        <Route path="/add" element={<AddArtist/>}/>
                        <Route path="/edit/:id" element={<EditCreator/>}/>
                    </Routes>
                </main>
            </Router>
        </>
    )
}

export default App
