import React from 'react'

const Cards = (props) => {
  return (
    <div class="card text-bg-secondary mb-3 mx-3 my-4  " style={{width: "18rem"}}>
  <img src={props.image} class="card-img-top" alt="..."/>
  <div class="card-body d-flex flex-column">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.desc}.....</p>
    <a href={props.url} target="_blank" class="btn btn-secondary mt-auto">Read More</a>
  </div>
</div>
  )
}

export default Cards
