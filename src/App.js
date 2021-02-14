import React from 'react';
import './App.css';
import { Countries } from './components/Countries';
import { Greetings } from './components/Greetings';
import { IdCard } from './components/IdCard';
import { LikeButton } from './components/LikeButton';
import { Random } from './components/Random';

// import contacts from './contacts.json';

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        {/* <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
        <LikeButton prezime="Djurica" />
        <LikeButton prezime="Petrovic" />

        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Random min={1} max={6} />
        <Random min={1} max={100} /> */}

        <Countries />


      </div>
    );
  }
}

export default App;