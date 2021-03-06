import React from 'react'
import { HeroWrapper, HeroContent, HeroImage, HeroContentWrapper } from './Hero.style';
import {H1, Para} from '../../styles/Typography.style';
import { Container, Button, NoRightPaddingContainer } from '../../styles/Common.style';
import HeroImg from '../../images/image-mockups.png';


const Hero = () => {
  return (
    <div>
        <NoRightPaddingContainer>
        <HeroWrapper>
            <HeroContent>
                <HeroContentWrapper>
                    <H1>Next generation digital banking</H1>
                    <Para>Take your financial life online. Your Essey account will be a one-stop-shop for spending, saving, budgeting,investing, and much more. </Para>
                    <Button>Request Invite</Button>
                </HeroContentWrapper>
            </HeroContent>
            <HeroImage>
                <img src={HeroImg} alt='hero'/>
            </HeroImage>
        </HeroWrapper>
        </NoRightPaddingContainer>
        
    </div>
  );
};



export default Hero