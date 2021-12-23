const request= require('request');

const forecast=(a,b,callback)=>{
    const url="http://api.weatherstack.com/current?access_key=e8385f66d34837582d531ab86704cd98&query="+a+','+b+"&units=f"
    request({url:url,json:true},(error,{body}={})=>{
        if(error){
            callback('Unable to connect server',undefined)
        }
        else if(body.error){
            callback('Unable to find location',undefined)
        }
        else{
            const currentTemp=body.current.temperature
            const feelLikesTemp=body.current.feelslike
            const text=`Weather is ${body.current.weather_descriptions[0]} and Temp is ${currentTemp} degree out but feels like ${feelLikesTemp} degree out.
                        The wind speed is ${body.current.wind_speed} and the humidity is ${body.current.humidity}%`
            callback(undefined,text)
        }
    });
};
module.exports=forecast;