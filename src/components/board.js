import React from 'react';
import './board.css';
import List from './list'
import Balloons from './balloons.js'; 
/*import Data from './data'*/

const Info = [
    {
        img : "https://images.unsplash.com/photo-1634185233359-51820d45aa88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
        name : "Anuva Garg", birthday : "2003-01-25"
    },
    {
        img : "https://images.unsplash.com/photo-1634185233359-51820d45aa88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
        name : "Isha Ipsita", birthday : "2001-12-10"
    },
    {
        img : "https://images.unsplash.com/photo-1634185233359-51820d45aa88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
        name : "Smit Patel", birthday : "2002-06-28"
    },
    {
        img : "https://images.unsplash.com/photo-1634185233359-51820d45aa88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
        name : "Mihir Dhingra", birthday : "2002-11-11"
    },
    {
        img : "https://images.unsplash.com/photo-1634185233359-51820d45aa88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
        name : "Jasmine Wadhwa", birthday : "2001-07-28"
    },
    {
        img : "https://images.unsplash.com/photo-1634185233359-51820d45aa88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
        name : "Prateek Khare", birthday : "2001-06-11"
    }
  ]

export default function board() {
  return (
      <main id='site-main'>
          <h1 className="text-dark title">Happy Birthday!</h1>

          <div className="board">
                <List info={Today(Info)}></List>
                <h2 className='upcoming text-dark'>Upcoming</h2>
                <List info={Upcoming(Info, 5)} upcoming={true}></List>
          </div>
          <script src="balloons.js"></script>
      </main>
  );
}

function Today(person){
    let currentDay = new Date().getDate();
    let currentMonth = new Date().getMonth();

    let filter = person.filter(data => {
        let day = new Date(data.birthday).getDate();
        let month = new Date(data.birthday).getMonth();

        return currentDay === day && currentMonth === month;
    })
    return filter;
}


// upcoming birthdays
function Upcoming(person, toMonth){
    let currentMonth = new Date().getMonth();
    let currentDay = new Date().getDate();

    let filter =person.filter(data => {
        let month = new Date(data.birthday).getMonth();
        let day = new Date(data.birthday).getDate();
        if (currentDay === day) return;
        return month >= currentMonth && month <= currentMonth + toMonth;
    })

    return filter.slice(0,2);

}