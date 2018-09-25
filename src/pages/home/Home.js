import React from 'react';
import './Home.css'
import JediList from "../../components/jedi/jediList";
import AddJedi from "../../components/jedi/addJedi";
import JediFilter from "../../components/jedi/jediFilter";

  export const Home = () => {
    return (
    <div className="Home">
      <div className="flex-50">
        <AddJedi />
        <JediFilter />
      </div>
      <div className="flex-50">
        <JediList />
      </div>
    </div>
  );
};
