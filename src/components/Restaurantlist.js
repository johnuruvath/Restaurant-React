import React from 'react'
import { useState, useEffect } from 'react'
import RestCard from './RestCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestaurantListAction } from '../actions/restaurantAction';
import { useDispatch,useSelector } from 'react-redux';



function Restaurantlist() {

    //const [allrestaurant, setallrestaurant] = useState([])


    // //function to api call for datas inside json file
    // // const getrestaurantdata = async () => {
    // //     await fetch('/restaurants.json').then(data => data.json()).then(result => {
    // //         //console.log(result);
    // //         setallrestaurant(result.restaurants)
    // //     })
    // // }

    // //console.log(allrestaurant);

    const dispatch=useDispatch()
    const result=useSelector(state=>state.restaurantReducer)
    const {restaurantList}=result


    useEffect(() => {
        dispatch( RestaurantListAction())
        // getrestaurantdata()
    }, [])

    return (
        <Row>
            {
                restaurantList.map(item => (
                    <RestCard data={item} />
                ))
            }

        </Row>
    )
}

export default Restaurantlist