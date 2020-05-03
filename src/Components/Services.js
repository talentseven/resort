import React, { Component } from 'react'
import Title from '../Components/Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state={
        services:[
            {
                icons:<FaCocktail/>,
                title:"free cocktails",
                info:'FaCocktail'
            },
            {
                icons:<FaHiking/>,
                title:"free FaHiking",
                info:'FaHiking'
            },
            {
                icons:<FaShuttleVan/>,
                title:"free FaShuttleVan",
                info:'FaShuttleVan'
            },
            {
                icons:<FaBeer/>,
                title:"free Fabeer",
                info:'Fabeer'
            }
        ]
    }


    render() {
        return (
            <section className="services">
               <Title title='services'></Title>
               <div className="services-center">
                        {this.state.services.map((item, index) => {
                            return (
                                <article key={index} className="services>">
                                        <span>{item.icons}</span>
                                        <h6>{item.title}</h6>
                                        <p>{item.info}</p>
                                </article>
                            )
                        })} 
               </div>      
            </section>
        )
    }
}
