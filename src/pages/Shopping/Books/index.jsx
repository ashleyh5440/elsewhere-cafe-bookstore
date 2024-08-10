import Card from '../../../components/Card';

import './style.css';

import img1 from './images/1.png'
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
import img13 from './images/13.jpg'
import img14 from './images/14.png'

function Books() {
    const books = [
        { title: "Book of Shadows", image: img6 },
        { title: "Spellcasting For Dummies", image: img13 },
        { title: "The Codex of Celestials", image: img12 },
        { title: "Book of Light", image: img8 },
        { title: "Spells for Protection", image: img11 },
        { title: "The Witch's Almanac", image: img3 },
        { title: "Baby's First Spellbook", image: img14 },
        { title: "Spells for Healing", image: img10 },
        { title: "Introduction into Hexes", image: img5 },
        { title: "Spells for Love", image: img4 },
        { title: "The Book of the Dead", image: img7 },
        { title: "Potions and Elixirs", image: img1 },
        { title: "The Grey Grimoire", image: img9 },
    ]
    return (
        <section className="books-page">
            <div className="card-container">
                {books.map((book, index) => (
                    <Card key={index} title={book.title} image={book.image} />
                ))}
            </div>
        </section>
    )
}

export default Books;

                {/* <div className="card">
                    <div><h2>Book of Shadows</h2></div>
                    <div className="card-img">img</div>
                    <Button variant="primary" >
                        <img src={chestIcon}/>
                        Add to chest
                    </Button>
                </div>
                <div className="card">
                    <div><h2>Spellcasting for Dummies</h2></div>
                    <div className="card-img">img</div>
                    <Button variant="primary" >
                        <img src={chestIcon}/>
                        Add to chest
                    </Button>
                </div>
                <div className="card">
                    <div><h2>The Codex of Celestials</h2></div>
                    <div className="card-img">img</div>
                    <Button variant="primary" >
                        <img src={chestIcon}/>
                        Add to chest
                    </Button>
                </div>
                <div className="card">
                    <div><h2>Book of Light</h2></div>
                    <div className="card-img">img</div>
                    <Button variant="primary" >
                        <img src={chestIcon}/>
                        Add to chest
                        </Button>
                </div>
                <div className="card">
                    <div><h2>The Witch's Almanac</h2></div>
                    <div className="card-img">img</div>
                    <Button variant="primary" >
                        <img src={chestIcon}/>
                        Add to chest
                    </Button>
                </div>
                <div className="card">
                    <div><h2>Alchemy and the Arcane</h2></div>
                    <div className="card-img">img</div>
                    <Button variant="primary" >
                        <img src={chestIcon}/>
                        Add to chest
                        </Button>
                </div>
                <div className="card">
                    <div><h2>Baby's First Spellbook</h2></div>
                    <div className="card-img">img</div>
                    <Button variant="primary" >
                        <img src={chestIcon}/>
                        Add to chest
                    </Button>
                </div>
                <div className="card">
                    <div><h2>Spells for Healing</h2></div>
                    <div className="card-img">img</div>
                    <Button variant="primary" >
                        <img src={chestIcon}/>
                        Add to chest
                    </Button>
                </div>
                <div className="card">
                    <div><h2>Introduction into Hexes</h2></div>
                    <div className="card-img">img</div>
                    <Button variant="primary" >
                        <img src={chestIcon}/>
                        Add to chest
                    </Button>
                </div>
                <div className="card">
                    <div><h2>Spells for Love</h2></div>
                    <div className="card-img">img</div>
                    <Button variant="primary" >
                        <img src={chestIcon}/>
                        Add to chest
                    </Button>
                </div>
                <div className="card">
                    <div><h2>Potions and Elixirs</h2></div>
                    <div className="card-img">img</div>
                    <Button variant="primary" >
                        <img src={chestIcon}/>
                        Add to chest
                    </Button>
                </div>
                <div className="card">
                    <div><h2>The Grey Grimoire</h2></div>
                    <div className="card-img">img</div>
                    <Button variant="primary" >
                        <img src={chestIcon}/>
                        Add to chest
                    </Button>
                </div> */}