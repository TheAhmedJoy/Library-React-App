import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import React from 'react'

export default function BookInfo({ books }) {
    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <Link to="/books" className="book__link">
                                <FontAwesomeIcon icon="arrow-left" />
                            </Link>
                            <Link to="/book">
                                <h2 className="book__selected--title--top">

                                </h2>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
