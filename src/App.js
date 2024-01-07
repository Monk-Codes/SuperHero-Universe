import "./App.css";
import { useState, useEffect } from "react";
import CardList from "./components/Card_List/Card_list";
import SearchBar from "./components/Search_bar/Search_bar";

//this runs first
const App = () => {
 const [searchField, setSearchField] = useState(""); //use state HOOK for search
 const [superHeros, setSuperHeros] = useState([]); //use state HOOK for json data
 const [filterSuperheros, setFilterSuperHeros] = useState(superHeros); //use state HOOK for filtering
 //
 useEffect(() => {
  fetch("https://akabab.github.io/superhero-api/api/all.json")
   .then((response) => response.json())
   .then((users) => setSuperHeros(users));
 }, []);

 //
 useEffect(() => {
  const newFilterSuperheros = superHeros.filter((m) => {
   return m.name.toLowerCase().includes(searchField);
  });
  setFilterSuperHeros(newFilterSuperheros);
 }, [superHeros, searchField]);

 //searchbox string//
 const onSearchChange = (e) => {
  const searchFieldString = e.target.value.toLowerCase();
  setSearchField(searchFieldString);
 };

 //return//
 return (
  <div className="App">
   <h1 className="app_title">SuperHero Universe🪐</h1>

   <SearchBar className="search_bar" onChangeHandler={onSearchChange} placeholder="Search SuperHeros" />
   <CardList superheros={filterSuperheros} />
  </div>
 );
};

//component----------------------------
// class App extends Component {
//  constructor() {
//   super();
//   this.state = {
//    superheros: [],
//    searchField: "",
//   };
//  }
//  // component //
//  componentDidMount() {
//   fetch("https://akabab.github.io/superhero-api/api/all.json")
//    .then((response) => response.json())
//    .then((users) =>
//     this.setState(
//      () => {
//       return { superheros: users };
//      }
//     )
//    );
//  }
//  //searchbar //
//  onSearchChange = (e) => {
//   const searchField = e.target.value.toLowerCase();
//   this.setState(() => {
//    return { searchField };
//   });
//  };

//  //render//
//  render() {
//   const { superheros, searchField } = this.state; //destructuring
//   const { onSearchChange } = this; //destructuring
//   const filterSuperheros = superheros.filter((m) => {
//    return m.name.toLowerCase().includes(searchField);
//   });

//   //returns components
//   return (
//    <div className="App">
//     <h1 className="app_title">SuperHero Universe🪐</h1>
//     <SearchBar className="search_bar" onChangeHandler={onSearchChange} placeholder="Search SuperHeros" />
//     <CardList superheros={filterSuperheros} />
//    </div>
//   );
//  }
// }
export default App;
