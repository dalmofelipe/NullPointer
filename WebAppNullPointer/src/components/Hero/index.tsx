import "./styles.css"

type HeroInput = {
    tituto: string    
}

const Hero = ({ tituto } : HeroInput) => {
    return (
        <div className="hero-container">
            <h3>{ tituto || "Hero" }</h3>

            <input type="text" name="search" id="search" />
        </div>
    )
}

export default Hero
