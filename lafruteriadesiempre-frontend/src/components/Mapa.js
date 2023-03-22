import { Component } from "react";
import GoogleMaps from 'simple-react-google-maps'


export default class Maps extends Component{
    render(){
        return(
            <div className="container">
                <GoogleMaps
                    apiKey={`${process.env.KEY_MAP}`}
                    style={{height:"269px", width:"55vw"}}
                    zoom={15}
                    center={{
                        lat:42.13729097154772, 
                        lng:-0.41255566281595024
                    }}
                    markers={[
                        {lat:42.13946123506406, lng: -0.4116879439555579},
                        {lat:42.133389212295484, lng: -0.4159601399757062}
                    ]}
                />
            </div>
        )
    }
}