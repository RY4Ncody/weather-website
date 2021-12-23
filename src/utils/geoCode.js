const request=require('request');

const geoCode=(address,callback)=>{
    const url=`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoicnlhbmFuZGVyc29uMTEzIiwiYSI6ImNreGZ3Zm1haTF1cDUycXRodTVlY24xNGQifQ.iBUlbHtzqBH80Lu5uVRDvA&limit=1`
    request({url:url,json:true},(error,{body}={})=>{
        if(error){
            callback("Unable to connect the server",undefined)
        }else if(body.message||body.features.length===0){
            callback("Unable to find the location",undefined)
        }else{
            const data={
                longitude:body.features[0].center[0],
                latitude:body.features[0].center[1],
                location:body.features[0].place_name,
            }
            callback(undefined,data)
        }
    });
};

module.exports=geoCode