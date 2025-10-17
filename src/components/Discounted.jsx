import React from 'react'
import Book from './ui/Book'
import { booksData } from '../data.js'

export default function Discounted() {
    return (
        <section id="recent">
            <div className="container">
                <div className="row">
                    <div className="section__title">
                        <h2 className="section__title">
                            Discounted <span className="purple">Books</span>
                        </h2>
                    </div>
                    <div className="books">
                        {
                            booksData.filter(book => book.salePrice > 0)
                                .slice(0, 8)
                                .map((book) => (
                                    <Book book={book} key={book.id} />
                                ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
