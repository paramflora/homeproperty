import React from 'react'
import useApiData from '../utils/useApiData';
import { Link } from 'react-router-dom';

const Footer = () => {

  const {data, loading, error} = useApiData('/constant/data.json')

  if(loading){
      return<div>Loading...</div>
  }
  if(error){
      return <div>Error : {error.message}</div>
  }

  return (
    <>
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className='row'>
            <div className='col-md-5'>
                <div className="footer-brand">
                  <Link to="/" className="logo">
                    <img src='./images/logo.png'/>
                  </Link>
                  <p className="section-text">
                    Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.
                  </p>
                  <ul className="contact-list">
                    {
                      data.ContactDetails.map((d,i) => (
                        <li key={i}>
                          <a href="#" className="contact-link">
                            <i className={d.icon}></i>
                            <p>{d.text}</p>
                          </a>
                        </li>
                      ))
                    }
                  </ul>
                  <ul className="social-list">
                    {
                      data.SocialLinks.map((d,i) => (
                        <li key={i}>
                          <Link to={d.link} className="social-link">
                            <i className={d.icon}></i>
                          </Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            {
              data.FooterNav.map((d,i) => (
                <div className='col-md-3' key={i}>
                    <div className="footer-link-box">
                      <ul className="footer-list">
                        <li>
                          <p className="footer-list-title">{d.title}</p>
                        </li>
                          {
                            d.text.map((y,x) => (
                              <li key={x}>
                                <Link to={y.path} className="footer-link">{y.list}</Link>
                              </li>
                            ))
                          }
                      </ul>
                    </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2022 <Link to="/">Dream Estate</Link>. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer