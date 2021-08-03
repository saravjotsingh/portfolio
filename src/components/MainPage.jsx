import React from 'react'
import image from '../profile3.jpeg'

export default function MainPage() {
    return (
        <div className="mainDiv">
            <div className="div_text">
                <p className="info_1">Hello I'm Saravjot Singh</p>
                <p className="info_2">Experienced Software Engineer with a demonstrated history of working in the information technology and services industry. Skilled in C++, HTML, JavaScript, React.js, Node.js and AWS. I am very passionate about learning new technologies. </p>
                <div class="contact_icons">
                    <a target="_blank" href="https://github.com/saravjotsingh/"><i className="fa fa-github icon1"></i></a>
                    <a target="_blank" href="https://www.linkedin.com/in/saravjotsingh/"> <i className="fa fa-linkedin icon"></i></a>
                    <a target="_blank" href="https://www.facebook.com/saravjot91"><i className="fa fa-facebook icon"></i></a>
                    <a target="_blank" href="https://www.instagram.com/saravjot__singh/"><i className="fa fa-instagram icon"></i></a>
                </div>
            </div>
            <div className="image_div">
                <img className="image_div_child" src={image} />
            </div>
        </div>
    )
}
