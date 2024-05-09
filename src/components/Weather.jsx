const Weather = ({message, weatherInfo}) => {
    //TODO use props
    return (
        <div className={'weather'}>
            {message ? (
                <p>{message}</p>
            ) : (
                <div>
                    <p>Location: {weatherInfo.country}, {weatherInfo.city}</p>
                    <p>Temp:{weatherInfo.temp}</p>
                    <p>Pressure: {weatherInfo.pressure}</p>
                </div>
            )}
        </div>

    );
};

export default Weather;