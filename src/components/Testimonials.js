import React, { Fragment } from "react"
import { createMarkup } from "../helperFunctions"

import styled from "styled-components"

import { Container } from "../Styles/Container"
import { FlexContainer } from "../Styles/FlexContainer"
import { Header } from "../Styles/Header"
import { primaryColor } from "../Styles/Global"

const Quote = styled.div`
  @media (min-width: 800px) {
    padding: 5% 0;
  }
`
const TestimonialsHeader = Header.extend`
  order: -1;
  @media (min-width: 800px) {
    order: 0;
  }
`

const Testimonials = ({ testimonials }) => {
  if (testimonials) {
    var testimonials = testimonials.map((t, i) => (
      <Fragment key={i}>
        <div
          style={{
            color: "hsl(100,5%, 65%)",
            fontWeight: "600",
            lineHeight: "1.5"
          }}
          dangerouslySetInnerHTML={createMarkup(t.quote)}
        />
        <p
          style={{
            color: `${primaryColor}`,
            fontWeight: "bold",
            fontStyle: "italic"
          }}
        >
          {t.name}
        </p>
      </Fragment>
    ))
  }
  return (
    <FlexContainer>
      <Container>
        <Quote>{testimonials}</Quote>
      </Container>
      <TestimonialsHeader>
        <h2>Testimonials</h2>
      </TestimonialsHeader>
    </FlexContainer>
  )
}

export default Testimonials
