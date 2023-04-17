const React = require("react");

function Index(props) {
  const { flights } = props;

  return (
    <div>
      <nav>
        <a href="/flight/new">Create a New Flight</a>
      </nav>
      
      <h1>Index Page</h1>

      <ul>
        {flight.map((flight, i) => {
          return (
            <li key={flight._id}> <br/> 
                   {flight.airline} <br/>
                   {flight.flightNo}<br/>
                   {flight.departs}<br/>

    
            </li>
          );
        })}
      </ul>
    </div>
  );
}

module.exports = Index;












