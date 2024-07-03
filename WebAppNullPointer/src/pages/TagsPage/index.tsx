import Hero from "../../components/Hero"
import NavBar from "../../components/NavBar"

import "./styles.css"

const TagsPage = () => {

    return (
        <div className="tags-page">
            <NavBar />

            <Hero tituto='Tags' includeSearchBar />

            <section className="tags-container">
                <h3>Tags</h3>
            </section>
        </div>
    )
}

export default TagsPage