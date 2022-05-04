import React from 'react';
import { InfoHeader, InfoWrapper, InfoGrid, InfoCard } from './Info.style'; 
import {H2, Para, H3} from '../../styles/Typography.style';
import {Container} from '../../styles/Common.style';
import BankingIcon from '../../images/icon-online.svg';
import BudgetingIcon from '../../images/icon-budgeting.svg';
import Onboarding from '../../images/icon-onboarding.svg';
import Api from '../../images/icon-api.svg';

const Info = () => {
  return (
    <div>
       
        <InfoWrapper>
            <Container>
            <InfoHeader>
                <H2>Why choose essey?</H2>
                <Para> {' '}
                We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before</Para>
            </InfoHeader>
            <InfoGrid>
                <InfoCard>
                    <img src={BankingIcon} />
                    <H3>Online Banking</H3>
                    <Para>Our modern web and mobile applcations allow you to keep track of your finances wherever you are in the world.</Para>
                </InfoCard>
                <InfoCard>
                    <img src={BudgetingIcon} />
                    <H3>Simple Budgeting </H3>
                    <Para>Our modern web and mobile applcations allow you to keep track of your finances wherever you are in the world.</Para>
                </InfoCard>
                <InfoCard>
                    <img src={Onboarding} />
                    <H3>Fast Onboarding</H3>
                    <Para>Our modern web and mobile applcations allow you to keep track of your finances wherever you are in the world.</Para>
                </InfoCard>
                <InfoCard>
                    <img src={Api} />
                    <H3>Open API</H3>
                    <Para>Our modern web and mobile applcations allow you to keep track of your finances wherever you are in the world.</Para>
                </InfoCard>
            </InfoGrid>
            </Container>
        </InfoWrapper>
        
    </div>
  )
}

export default Info