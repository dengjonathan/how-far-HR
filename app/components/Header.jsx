import React from 'react';

const Header = ({progress, currentDate, endDate}) => {
  let oneDay = 24 * 60 * 60 * 1000;
  let days = Math.round((endDate.getTime() - currentDate.getTime()) / oneDay);
  return (
  <div className="jumbotron">
    <h1 className="page-header">Hack Reactor Remote 19</h1>
    <h2>Current Progress: <span className="bold">{progress}%</span></h2>
  <h2>Only <span className="bold">{days} days </span> until they can help your company <span className="italic">build the future </span></h2>
  </div>
  );
}
export default Header;