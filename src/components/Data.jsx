import {Component} from "react";
import Form from "./Form.jsx";
import Weather from "./Weather.jsx";
import {API_KEY, BASE_URL, HPA} from "../utils/constants.js";

class Data extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weatherInfo: {},
            message: "Enter city name"
        };
    }

    getWeather = (city) => {
        fetch(`${BASE_URL}/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    weatherInfo: {
                        country: data.sys.country,
                        city: data.name,
                        temp: data.main.temp.toFixed(1),
                        pressure: (data.main.pressure * HPA).toFixed(2),
                    },
                    message: null
                });
            })
            .catch(e => {
                this.setState({
                    message: e.message
                });
            });
        // .catch(e => console.log(e));
    };

    render() {
        return (<div>
            <Form getWeather={this.getWeather}></Form>
            <Weather message={this.state.message} weatherInfo={this.state.weatherInfo}/>
        </div>);
    }
}

export default Data;

// import Form from "./Form.jsx";
// import Weather from "./Weather.jsx";
//
// const Data = () => { //TODO HW use class component
//     //TODO: state: weatherInfo and message(in Form)
//
//     //TODO *: Get weather(city)
//     return (
//         <div>
//             <Form/>
//             <Weather/>
//         </div>
//     );
// };
//
//
// export default Data;