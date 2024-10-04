import "./styles.css"

type HeroInput = {
    tituto: string
    includeSearchBar?: boolean
}

const Hero = ({ tituto, includeSearchBar = false } : HeroInput) => {
    return (
        <div className="hero-container">
            <h4>{ tituto || "Hero" }</h4>

            {includeSearchBar && <input type="text" name="search" id="search" />}
        </div>
    )
}

export default Hero
