import Card from '../../../components/Card';
import Sparkles from 'react-sparkle'

import './style.css';

import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'
import img4 from './images/4.png'
import img5 from './images/5.png'
import img6 from './images/6.png'
import img7 from './images/7.png'
import img8 from './images/8.png'
import img9 from './images/9.png'
import img10 from './images/10.png'
import img11 from './images/11.png'
import img12 from './images/12.png'
import img13 from './images/13.png'
import img14 from './images/14.png'
import img15 from './images/15.png'
import img16 from './images/16.png'
import img17 from './images/17.png'
import img18 from './images/18.png'
import img19 from './images/19.png'
import img20 from './images/20.png'
import img21 from './images/21.png'
import img22 from './images/22.png'
import img23 from './images/23.png'
import img24 from './images/24.png'
import img25 from './images/25.png'
import img26 from './images/26.png'
import img27 from './images/27.png'
import img28 from './images/28.png'
import img29 from './images/29.png'

function Ingredients() {
    const ingrdients = [
        { title: "Bottled Moonlight", image: img15 },
        { title: "Raven Feather", image: img1 },
        { title: "Eye of Newt", image: img16 },
        { title: "Unicorn Blood", image: img20 },
        { title: "Mana Potion", image: img4 },
        { title: "Goblin Teeth", image: img9 },
        { title: "Siren Tears", image: img19 },
        { title: "Pheonix Feather", image: img17 },
        { title: "Sands of Time", image: img18 },
        { title: "Mandrake Root", image: img3 },
        { title: "Graveyard Dirt", image: img2 },
        { title: "Oak Ash", image: img25 },
        { title: "Fairy Essence", image: img7 },
        { title: "Crystalized Honey", image: img6 },
        { title: "Griffin Claw", image: img10 },
        { title: "Frog's Breath", image: img26 },
        { title: "Stardust", image: img8 },
        { title: "Ghost Orchid", image: img23 },
        { title: "Dragonfly Wings", image: img13 },
        { title: "Bottled Lightning", image: img14 },
        { title: "Nightshade Berries", image: img27 },
        { title: "Spider Silk", image: img21 },
        { title: "Basilisk Venom", image: img12 },
        { title: "Willow Bark", image: img28 },
        { title: "Coffin Nail", image: img29 },
        { title: "Chimera Horn", image: img24 },
        { title: "Spider Lily", image: img22 },
    ]
    return (
        <section className="ingredients-page">
            <Sparkles 
                fadeOutSpeed={5}
                flicker={false} />
            <div className="card-container">
                {ingrdients.map((ingrdient, index) => (
                    <Card key={index} title={ingrdient.title} image={ingrdient.image} />
                ))}
            </div>
        </section>
    );
}

export default Ingredients