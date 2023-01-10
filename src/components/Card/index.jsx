import styled from "styled-components";

export default function Card({ props }) {
  const { name, description, imgUrl } = props;

  return (
    <div className="card-container">
      <div className="card-image">
        <img className="" alt={name} src={imgUrl} />
      </div>
      <div className="card-title">
        <h2>{name}</h2>
      </div>
      <div className="card-desc">
        <p>{description}</p>
      </div>
    </div>
  );
}
