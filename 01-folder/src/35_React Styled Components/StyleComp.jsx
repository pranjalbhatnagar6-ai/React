import styled from 'styled-components'

    const Heading = styled.h1`
    color:red;
    border:1px solid green;
    border-radius:5px;
    margin:20px;
    padding:20px
    `

function StyleComp(){

    return(
        <>
        <h1>Styled components</h1>
        <Heading>Hello Broooooooo</Heading>    

        </>
    )
}

export default StyleComp;