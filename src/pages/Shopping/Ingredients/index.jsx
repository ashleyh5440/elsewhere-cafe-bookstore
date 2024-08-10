import Card from '../../../components/Card';

import './style.css';

function Ingredients() {
    const ingrdients = [
        { title: "Bottled Moonlight", image: null },
        { title: "Raven Feather", image: null },
        { title: "Eye of Newt", image: null },
        { title: "Unicorn Blood", image: null },
        { title: "Mana Potion", image: null },
        { title: "Goblin Teeth", image: null },
        { title: "Siren Tears", image: null },
        { title: "Pheonix Feather", image: null },
        { title: "Sands of Time", image: null },
        { title: "Mandrake Root", image: null },
        { title: "Graveyard Dirt", image: null },
        { title: "Oak Ash", image: null },
        { title: "Fairy Essence", image: null },
        { title: "Crystalized Honey", image: null },
        { title: "Dragonfly Wings", image: null },
        { title: "Griffin Claw", image: null },
        { title: "Banshee Wail", image: null },
        { title: "Stardust", image: null },
        { title: "Ghost Orchid", image: null },
        { title: "Dragonfly Wings", image: null },
        { title: "Bottled Lightning", image: null },
        { title: "Nightshade Berries", image: null },
        { title: "Spider Silk", image: null },
        { title: "Basilisk Venom", image: null },
        { title: "Willow Bark", image: null },
        { title: "Coffin Nail", image: null },
        { title: "Chimera Fur", image: null },
    ]
    return (
        <section className="ingredients-page">
            <div className="card-container">
                {ingrdients.map((ingrdient, index) => (
                    <Card key={index} title={ingrdient.title} image={ingrdient.image} />
                ))}
            </div>
        </section>
    );
}

export default Ingredients