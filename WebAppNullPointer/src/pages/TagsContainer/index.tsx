import Hero from "../../components/Hero"
import NavBar from "../../components/NavBar"

import "./styles.css"

const TagsContainer = () => {

    return (
        <div className="tags-page">
            <NavBar />

            <Hero tituto='Tags' />

            <section className="tags-container">
                <h3>Tags</h3>
            </section>
        </div>
    )
}

export default TagsContainer