import './HeroCard.css'
const HeroCard = ({ hero }) => {
  const { name, universe, alterego, occupation, friends, superpowers, url, info } = hero;
  return (
    <div className="hero-card">
      <h2>{name}</h2>
      <img src={url} alt={name} />
      <p><strong>Alter Ego:</strong> {alterego}</p>
      <p><strong>Universe:</strong> {universe}</p>
      <p><strong>Occupation:</strong> {occupation}</p>
      <p><strong>Friends:</strong> {friends}</p>
      <p><strong>Superpowers:</strong> {superpowers}</p>
      <p>{info}</p>
    </div>
  );
};
export default HeroCard;