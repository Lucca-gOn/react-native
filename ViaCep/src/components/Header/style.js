import styled from "styled-components";

//HeaderContainer - View
//HeaderContent - SafeAreaView
//TextHeader - Text

export const HeaderContainer = styled.View`
    width: 100%;
    height: 201px;
    
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border-radius: 0px 0px 15px 15px;
    box-shadow: 0px 0px 10px black;
    /* Para android */
    /* shadow-color: red; */
    /* shadow-offset: 0px 4px; */
    /* shadow-opacity: 0.15; */
    /* shadow-radius: 15px; */
    /* elevation: 5; */

    background: #FECC2B;
`
export const HeaderContent = styled.SafeAreaView`
    margin-top: 45px;
`
export const TextHeader = styled.Text`
    color: #333E33;
    font-family: "Roboto_500Medium";
    font-size: 24px;
    text-align: center;
    line-height: 36px; 
`