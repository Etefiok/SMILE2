
import React from "react";
import Slider from "../SliderFolder/Slider";
import { useState } from "react";
import { DetailsData } from "../SliderFolder/Details-data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FaPhone } from 'react-icons/fa';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import NavBar from "../NavBarFolder/NavBar";




const imageStyle = {
    width: '28%', 
    height: 'auto',
  };

 
function Homepage() {
    const wharehousingRef = React.useRef(null);
    const logisticsRef = React.useRef(null);
    const importRef = React.useRef(null);
    const exportRef = React.useRef(null);
    const Details = DetailsData[0];
    const [comments, setComments] = useState([]);
    const Name = localStorage.getItem("Name");
    const comment = localStorage.getItem("comment");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newComment = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
   
        
        };
        const updatedComments = [ newComment, ...comments.slice(0, 9) ]; // Limit to 10 comments
        setComments(updatedComments);
        localStorage.setItem('Name', JSON.stringify(formData.name));
        localStorage.setItem('comment', JSON.stringify(formData.message));
        localStorage.setItem('email', JSON.stringify(formData.email));

    
        // Reset form fields to empty values
        setFormData({
            name: '',
            email: '',
            message: '',
        });

        
    };

    return(
        <div className="body">
 

<div className="NavBarPosition">       
<NavBar /> 
</div>

<div className="homepageImageCont">
<div className="homepageImage">
    <img src = {require("../Images.png/Seaport.jpg")} />
<h1>WE ARE YOUR CLEARING SOLUTION</h1>
</div>
</div>

                <div className="card1">
                <div className="card2">
                <img src={require("../Images.png/clearance.jpg")} alt=""/>
                <button onClick={() => document.getElementById('import').scrollIntoView({ behavior: 'smooth' })}>IMPORT CLEARANCE</button>
                </div>

                <div className="card2">
                <img src={require("../Images.png/exportpics.avif")}alt=""/>
                <button onClick={() => document.getElementById('export').scrollIntoView({ behavior: 'smooth' })}>EXPORT</button>
                </div>

                <div className="card2">
                <img src={require("../Images.png/log.jpg")} alt=""/>
                <button onClick={() => document.getElementById('logistics').scrollIntoView({ behavior: 'smooth' })}>LOGISTICS CONSULTATION</button>
                </div>
                

                <div className="card2">
                <img src={require("../Images.png/wharehousing.avif")} alt=""/>
                <button onClick={() => document.getElementById('wharehousing').scrollIntoView({ behavior: 'smooth' })}>WHAREHOUSING</button>
                </div>
            </div>



            {/* <Slider /> */}

            <div className="Welcome">            
                <h3>
                <FontAwesomeIcon icon={faUser} /><br></br>
                    Welcome To Smile Integreted Global Services</h3>
                {Details.Welcome}
            </div>

            <div className="Contact">
            <button onClick={() => window.open('tel:+2347066216660')}><FaPhone />Contact Us</button>
            <button onClick={() => window.open('')}><FontAwesomeIcon icon={faWhatsapp} />WhatsApp</button>
            </div>

            <div className="Welcome">
                <h3 id="services">Services</h3>
                {Details.Services}
            </div>

            <div className="imagescontainer">
                <div className="imagescontainer1">
                <img src={require("../Images.png/car2.jpeg")}alt=""/>
                <p>New <br></br>Stock</p>
                </div>

                <div className="imagescontainer1">
                <img src={require("../Images.png/car6.jpeg")}alt=""/>
                <p>New <br></br>Stock</p>
                </div>

                <div className="imagescontainer1">
                <img src={require("../Images.png/car8.jpeg")}alt=""/>
                <p>New <br></br>Stock</p>
                </div>

                <div className="imagescontainer1">
                <img src={require("../Images.png/car2.jpeg")}alt=""/>
                <p>New <br></br>Stock</p>
                </div>

                <div className="imagescontainer1">
                <img src={require("../Images.png/car6.jpeg")}alt=""/>
                <p>New <br></br>Stock</p>
                </div>

                <div className="imagescontainer1">
                <img src={require("../Images.png/car6.jpeg")} alt=""/>
                <p>New <br></br>Stock</p>
                </div>
            </div>

            <div className="Contact">
                <button onClick={() => window.open('tel:+2347066216660')}><FaPhone />Contact Us</button>
                <button onClick={() => window.open('')}><FontAwesomeIcon icon={faWhatsapp} />WhatsApp</button>
            </div>
            <br></br>
            <div className="Welcome">
                <h3 id="import" ref={importRef}>Import Clearance</h3>
                {Details.ImportClearance}
            </div>
            <br></br>
            <div className="Welcome">
                <h3 id="export" ref={exportRef}>Export</h3>
                {Details.ImportAndExport}
                <div className="exportimage">
                <img src={require("../Images.png/export01.jpg")} alt=""/>
                </div>

            </div>
            <div className="Contact">
                <button onClick={() => window.open('tel:+2347066216660')}><FaPhone />Contact Us</button>
                <button onClick={() => window.open('')}><FontAwesomeIcon icon={faWhatsapp} />WhatsApp</button>
            </div>
            <div className="Welcome">
                <h3 id="logistics" ref={logisticsRef}>Logistics Consultation</h3>
                {Details.LogisticsConsultation}
            </div>
            <br></br>
            <div className="Welcome">
            <h3 id="wharehousing" ref={wharehousingRef}>Wharehousing</h3>
                {Details.Wharehousing}
                <br></br><br></br>
                <video controls>
                    {/* <source src= {require("../videos.mp4/wharehouse.mp4")} type="video/mp4" /> */}
                </video>
            </div>
            <br></br>
            <div className="Contact">
                <button onClick={() => window.open('tel:+2347066216660')}><FaPhone />Contact Us</button>
                <button onClick={() => window.open('')}><FontAwesomeIcon icon={faWhatsapp} />WhatsApp</button>
            </div>

 
{comments.map((comment, index) => (
                <div key={index} className="comment">
                    <p><strong>{comment.name}</strong>: {comment.message} <br></br>{comment.image}</p>
                </div>
            ))}
            
            <form onSubmit={handleSubmit} className="form">
                <h4>Comment:</h4>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    Message:
                    <textarea name="message" value={formData.message} onChange={handleChange} required />
                </label>

               
                <button type="submit">Submit</button>
            </form>

    <div className="Related-Topics">
        <h6>Related Topics</h6>

            <button className="block">
            <div className="blockimage">
                <img src= {require("../Images.png/wharehousing.avif")} alt="wharehouse"/>
                </div>
            <div className="blockdiv">
                {/* <h5>Wharehousing: </h5> */}
            <p> <strong>Wharehousing: </strong>Container wharehousing involves storing goods in large containers for easy transportation and handling. These facilities are essential for efficient logistics and supply chain management. <span>They provide a secure and organized storage solution for various industries.</span></p>
            </div>
            </button>


            <button 
                onClick={ () =>{window.location.href="https://auction.nigeriatradehub.gov.ng/index.php"}} className="block">
                <div className="blockimage">
                    <img src= {require("../Images.png/seizedCustom.webp")} alt="wharehouse"/>
                </div>
                    <div className="blockdiv">
                        {/* <h5>Wharehousing: </h5> */}
                        <p> <strong>Just In: </strong>Customs seize contraband worth N232m in Adamawa, Taraba - Daily Post Nigeria </p>
                    </div>
            </button>
            

            <h6>Hot Links</h6>

            <button 
                onClick={ () =>{window.location.href="https://auction.nigeriatradehub.gov.ng/index.php"}}className="block">
                    <div className="blockimage">
                        <img src= {require("../Images.png/auction.jpg")} alt="wharehouse"/>
                    </div>
                <div className="blockdiv">
                    {/* <h5>Wharehousing: </h5> */}
                    <p> <strong>Just In: </strong>Apply Now:" Nigeria Customs Begins Online Auction of Cars, Rice, Other Abandoned, Seized Goods - Legit.ng</p>
                    
                </div>
            </button>


            <button 
                onClick={ () =>{window.location.href="https://auction.nigeriatradehub.gov.ng/index.php"}}className="block">
                    <div className="blockimage">
                        <img src= {require("../Images.png/auction.jpg")} alt="wharehouse"/>
                    </div>
                <div className="blockdiv">
                    {/* <h5>Wharehousing: </h5> */}
                    <p> <strong>Just In: </strong>Apply Now:" Nigeria Customs Begins Online Auction of Cars, Rice, Other Abandoned, Seized Goods - Legit.ng</p>
                    
                </div>
            </button>


            <button 
                onClick={ () =>{window.location.href="https://auction.nigeriatradehub.gov.ng/index.php"}}className="block">
                    <div className="blockimage">
                        <img src= {require("../Images.png/auction.jpg")} alt="wharehouse"/>
                    </div>
                <div className="blockdiv">
                    {/* <h5>Wharehousing: </h5> */}
                    <p> <strong>Just In: </strong>Apply Now:" Nigeria Customs Begins Online Auction of Cars, Rice, Other Abandoned, Seized Goods - Legit.ng</p>
                    
                </div>
            </button>

    </div>



<footer className='footer'>
<div className='foot'>
    <div className='foot1'>
    <h3>About Us</h3>
    <p>Licensed Custom Agent <br></br>Clearing, Forwarding and <br></br> Shipping & <br></br>General Marchant Services</p>
    </div>

    <div className='foot1'>
    <h3>Services</h3>
    <p>Import Clearance<br></br>Export<br></br>Logistics Consultation<br></br>Wharehousing</p>

    </div>

    <div className='foot1'>
    <h3>Contact Us</h3>
    <h6>07066216660 or 07057778770</h6>
    <p>1 Satellite Car park. <br></br>Opposite Car Park C Gate <br></br>Five Star Terminal TinCan Island Port <br></br>Lagos</p>
    <h6>Sirjami3l@gmail.com</h6>
    </div>

    <div className='foot2'>
    <p>ICT: SeeloveTechHub Nig. Ltd <br></br>+2348131264231<br></br>© 2024 <br></br> All Rights Reserved</p>

    </div>

</div>
</footer>


</div>

    )
}
    
export default Homepage



