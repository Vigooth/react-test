import React from 'react';
import './Home.css'
import JediList from "../../components/jedi/jediList";
import AddJedi from "../../components/jedi/addJedi";

  export const Home = () => {
    return (
    <div className="Home">
      <div className="flex-50">
        <AddJedi />
      </div>
      <div className="flex-50">
        <JediList />
      </div>
    </div>
  );
};
