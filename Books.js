import React from 'react'
import {Link} from 'react-router-dom';

  export default function Books(props) {
  //render() {
  return (
    <div>
      <section>
        <ul>
          {props.location.state.books.map(book =>
            <li>
             {book.volumeInfo.title}
            </li>
          )}
          {/* //{this.props.location.state.books} */}
        </ul>
      </section>
    </div>
  
  )
 
  }
