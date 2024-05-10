import React from 'react'
import { Container} from "react-bootstrap";


export default function Articles() {
  const baseUrl = `https://cld2labs.github.io/cloud2labs`
  return (
    <Container fluid className="articles-section" id="articles">
      <h1 className="project-heading">
        <strong className="highlghter"> Articles</strong>
      </h1>
      <img src={`${baseUrl}/Assets/coming-soon.png`} alt='coming-soon' />

    </Container>
  )
}
