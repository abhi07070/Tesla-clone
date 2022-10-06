import React from 'react'
import styled from 'styled-components'
import Section from './Section'
const Home = () => {
    return (
        <Container>
            <Section
                title="Model S"
                desc="Order online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnTxt="Custom Order"
                rightBtnTxt="Existing Inventory"
            />
            <Section
                title="Model Y"
                desc="Order online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnTxt="Custom Order"
                rightBtnTxt="Existing Inventory"
            />
            <Section
                title="Model 3"
                desc="Order online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnTxt="Custom Order"
                rightBtnTxt="Existing Inventory"
            />
            <Section
                title="Model X"
                desc="Order online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnTxt="Custom Order"
                rightBtnTxt="Existing Inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                desc="Money-back guarantee"
                backgroundImg="solar-panel.jpg"
                leftBtnTxt="Order now"
                rightBtnTxt="Learn more"
            />
            <Section
                title="Solar for New Roofs"
                desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                backgroundImg="solar-roof.jpg"
                leftBtnTxt="Order now"
                rightBtnTxt="Learn more"
            />
            <Section
                title="Accessories"
                desc=""
                backgroundImg="accessories.jpg"
                leftBtnTxt="Shop now"
                rightBtnTxt=""
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
      height:100vh;
`