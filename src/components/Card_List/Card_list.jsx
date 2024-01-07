import "./Card_list.style.css";

const CardList = ({ superheros }) => {
 return (
  <div className="card_list">
   {superheros.map((superhero) => {
    console.log(superhero);
    return (
     <div className="card_container" key={`${superhero.id}`}>
      <img src={`${superhero["images"].sm}`} alt={`${superhero.name}`} />
      <h2>{`${superhero.name}`}</h2>
      <p>{`${superhero["appearance"].gender}`}</p>
     </div>
    );
   })}
  </div>
 );
};
export default CardList;
