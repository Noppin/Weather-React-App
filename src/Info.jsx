import React from 'react'
import { useContext} from "react";
import {AppContext} from "./App"

export const Info = () => {
const {showData, data} = useContext(AppContext);
const {temp, feels_like, pressure, humidity,lon, lat,name, speed, main, icon} = data;

  return (
    showData && <section className="content">
        <div className="container py-5 h-100">
                  <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-8 col-lg-6 col-xl-4">
                      <div className="card" style= {{color: "#4B515D", borderRadius: "35px"}}>
                        <div className="card-body p-4">
              
                          <div className="d-flex">
                            <h6 className="flex-grow-1">{name}</h6>
                          </div>
                          <div className="d-flex flex-column text-center mt-5 mb-4">
                            <h6 className="display-4 mb-0 font-weight-bold" style={{color: "#1C2331"}}> {temp}°C </h6>
                            <span className="small" style={{color: "#868B94"}}>{main}</span>
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="flex-grow-1" style={{fontSize: "1rem"}}>
                              <div><i className="fas fa-wind fa-fw" style={{color: "#868B94"}}></i> <span className="ms-1"> {speed}km/h
                                </span></div>
                              <div><i className="fas fa-tint fa-fw" style={{color: "#868B94"}}></i> <span className="ms-1"> {humidity}% </span>
                              </div>
                              <div><span className="ms-1">Feels like: {feels_like}°C</span>
                              </div>
                              <div><span className="ms-1">longitude: {lon}</span>
                              </div>
                              <div><span className="ms-1">Latitude: {lat}</span>
                              </div>
                              <div><span className="ms-1">Pressure: {pressure} mb</span>
                              </div>
                             
                            </div>
                            <div>
                            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={name} style={{width:"100px"}}/>
                          </div>
                          </div>
                        </div>
                      </div>
              
                    </div>
                  </div>
              
                </div>
    </section>
  )
}
