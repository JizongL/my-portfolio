import React from "react";
import Particles from "react-particles-js";
import './Particle.css'

export default () => ( 
<div className = 'Particle' >
    <Particles
    	params={{
	    "particles": {
	        "number": {
	            "value": 50,
	            "density": {
	                "enable": false
	            }
			},"color":{"value":"#bfbdbd"},
			"shape":{
				"type":"circle","stroke":{
					"width":0,"color":"#bfbdbd"}
				},
	        "size": {
	            "value": 10,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}} />
</div>
);
