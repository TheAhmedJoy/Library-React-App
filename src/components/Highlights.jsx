import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HighlightItem from './ui/HighlightItem'
import React from 'react'

export default function Highlights() {
    return (
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why choose <span className="purple">Library</span>
                    </h2>
                    <div className="highlight__wrapper">
                        <HighlightItem icon={<FontAwesomeIcon icon="bolt" />}
                            title="Easy and Quick"
                            parag="Get access to the book you purchased online instantly." />
                        <HighlightItem icon={<FontAwesomeIcon icon="book-open" />}
                            title="10,000+ Books"
                            parag="Library has books in all your favorite categories." />
                        <HighlightItem icon={<FontAwesomeIcon icon="tags" />}
                            title="Affordable"
                            parag="Get your hands on popular books for as little as $10." />
                    </div>
                </div>
            </div>
        </section>
    )
}
