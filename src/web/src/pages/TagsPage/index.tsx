import Hero from "../../components/Hero"

import "./styles.css"

const TagsPage = () => {

    return (
        <div className="tags-page">
            <Hero tituto='Tags' includeSearchBar />

            <section className="tags-container">
                <h3>Tags</h3>
            </section>
        </div>
    )
}

export default TagsPage