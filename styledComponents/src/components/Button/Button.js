import styled from "styled-components";

export const ButtonContainer = styled.TouchableOpacity`
width: 40%;
height: 30px;

flex-direction: row;
gap: 25px;
margin-top: 25px;

background-color: #e1e5e6;
border: 1px solid gray;
border-radius: 20px;

align-items: center;
justify-content: center;
` 
export const TextButton = styled.Text`
color: blueviolet;
color: ${props => props.color || "blueviolet"};
text-transform: uppercase;
font-weight: bold;
font-size: 15px;
`