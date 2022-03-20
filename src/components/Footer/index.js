import React from 'react';
import {FooterLinkTitle,FooterContainer,FooterDesc,FooterElements,FooterLinksWrapper,FooterLinkItems,FooterLink} from '../Footer/FooterElements'
const Footer = () => {
  return (
      <FooterContainer>
          <FooterLinksWrapper>
              <FooterDesc>
                  <h1> SUCHE </h1>
                  <p> We Strive to get best jobs for our users</p>
              </FooterDesc>
              <FooterLinkItems>
                  <FooterLinkTitle>Contact Us</FooterLinkTitle>
                  <FooterLink to="/about">Contact</FooterLink>
                  <FooterLink to="/">Partners</FooterLink>
                  <FooterLink to="/">Companies</FooterLink>
                  <FooterLink to="/">Support</FooterLink>
              </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
          <FooterLinkItems>
                  <FooterLinkTitle>Specialisation</FooterLinkTitle>
                  <FooterLink to="/">It</FooterLink>
                  <FooterLink to="/">Legal</FooterLink>
                  <FooterLink to="/">Marketing</FooterLink>
                  <FooterLink to="/">Manufacturing</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                  <FooterLinkTitle>Social Media</FooterLinkTitle>
                  <FooterLink href="https://www.instagram.com/?hl=en" to="/ContactUsMain" >Instagram</FooterLink>
                  <FooterLink href="" to="/ContactUsMain">Facebook</FooterLink>
                  <FooterLink href="" to="/ContactUsMain">Youtube</FooterLink>
                  <FooterLink href="" to="/ContactUsMain"> Twitter</FooterLink>
              </FooterLinkItems>
          </FooterLinksWrapper>
      </FooterContainer>
  )
};

export default Footer;

