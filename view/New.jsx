const React = require('react');


function New() {
    return(
        <div>
            <h1>New Flight Page</h1>

            <form action='/flight1' method='POST'>

                airline: <input type="checkbox" />
                <br/>

                flightNo: <input type='checkbox'/>
                <br/>

                departs: <input type='Date'/>
                
                
                <br/>

                <input type="submit" value="Create new flight"/>

            </form>
        </div>
    )
}

module.exports = New;