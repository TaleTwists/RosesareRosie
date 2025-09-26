import React from 'react'
import Container from '@/components/Container';
import Title from '@/components/Title';

const SingleBlogPage = async ({
  params,
}: {
  params: Promise <{slug: string} >;
}) => {
  return(
    <div> 
      <Container>
        <Title>Single Blog Page</Title>
        <p>{slug}</p>
      </Container>
    </div>
  )
}
export default SingleBlogPage
