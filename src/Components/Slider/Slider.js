import React, {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'
import data from '../../data'

export default function Slider() {
    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div>
                        <img src=""
                    </div>
                )
            })}

        </div>
    )
}