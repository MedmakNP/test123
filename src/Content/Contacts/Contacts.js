import { Component } from 'react';
import classes from './Contacts.module.css';
import logo from '../Images/logo.png';
import telephone from '../Images/telephone.png';
import placeholder from '../Images/placeholder.png';
import mail from '../Images/mail.png';
import linkedin from '../Images/linkedin.png';
import instagram from '../Images/instagram.png';
import facebook from '../Images/facebook.png';
import twitter from '../Images/twitter.png';

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ref: 'https://www.figma.com/file/0NIWEwA3N0YrEMvdnfT2Dy/CarDealership?node-id=113%3A977&t=PoZrAlLbrVhbswlm-0',
      title: 'Orignal design',
      text: '905-908, Abhijeet-1, Mithakhali Six Roads, Ahmedabad 380006, Gujarat, India'
    };
  }

  render() {
    const { ref, title, text } = this.state;
    return (
      <div className={classes.contacts}>
        <div className={classes.container}>
          <div className={classes.wrapper}>
            <div className={classes.logoWrap}>
              <img src={logo} className={classes.logo} alt="logo" />
              <p className={classes.logoTitle}>CarS</p>
            </div>
            <div className={classes.inner}>
              <p className={classes.title}>Nazar Panchenko</p>
              <a href="https://github.com/MedmakNP/test123" className={classes.link}>https://github.com/MedmakNP/test123</a>
              <p />
              <a href={ref} className={classes.link}>{title}</a>
            </div>
          </div> 
          <div className={classes.wrap}>
            <div className={classes.element}>
              <p className={classes.title}>Services</p>
              <p className={classes.text}>Car Services</p>
              <p className={classes.text}>Buy Car </p>
              <p className={classes.text}>Sell Car</p>
              <p className={classes.text}>Washing Car</p>
            </div>
            <div className={classes.element}>
              <p className={classes.title}>COMPANY</p>
              <p className={classes.text}>About Us</p>
              <p className={classes.text}>Careers</p>
              <p className={classes.text}>Press</p>
              <p className={classes.text}>Blog</p>
              <p className={classes.text}>Sustainability</p>
            </div>
            <div className={classes.element}>
              <p className={classes.title}>Contact Us</p>
              <p className={classes.text}>
                <img src={telephone} className={classes.icon} alt="" />
                +91 9979477741
              </p>
              <p className={classes.text}>
                <img src={placeholder} className={classes.icon} alt="" />
                {text}
              </p>
              <p className={classes.text}>
                <img src={mail} className={classes.icon} alt="" />
                tommyshelby156@gmail.com
              </p>
              <div className={classes.imgWrap}>
                <img src={twitter} className={classes.img} alt="" />
                <img src={linkedin} className={classes.img} alt="" />
                <img src={instagram} className={classes.img} alt="" />
                <img src={facebook} className={classes.img} alt="" /> 
              </div>
            </div>                    
          </div> 
        </div>
      </div>  
    );
  }    
}
export default Contacts;
