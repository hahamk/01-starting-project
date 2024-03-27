export default function CoreConcept({image, title, description, detail}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{detail}</span>
    </li>
  )
};