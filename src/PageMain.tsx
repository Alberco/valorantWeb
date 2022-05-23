import {Routes ,Route } from 'react-router-dom'
import App from './components/App';
import Character from './components/Character';
import GameMode from './components/GameMode';
import Home from './components/Home';
import NavbarMain from './components/NavbarMain';
import Sprays from './components/Sprays';
import WeaponGuns from './components/Weapon';
import Weapons from './components/Weapons';

function PageMain() {
    return ( 
        <div>
            <NavbarMain />
            <Routes>
                <Route path="/"  element={<Home />} />
                <Route path="agents" element={<App />} />
                <Route path="/agents/:agentsId" element={<Character />}/>
                <Route path="weapons" element={<Weapons />} />
                <Route path='/weapons/:weaponsId' element={<WeaponGuns />} />
                <Route path="sprays" element={<Sprays />}></Route>
                <Route path="gamemodes" element={<GameMode />}></Route>
            </Routes>
        </div>
    );
}

export default PageMain;