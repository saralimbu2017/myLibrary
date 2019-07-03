import React from 'react';

export default function Form(props) {
  return     <form onSubmit={props.handleSubmit}>
  <input type = "search" name = "bookName" className = "" value={props.value} onChange={props.handleChange}/>
  <button className = "btn-search">Search</button>
</form>
  
}
