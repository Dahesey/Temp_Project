import styled from "styled-components";
import { Button } from "@mui/material";

export const RedButton = styled(Button)`
  && {
    background-color: #f00;
    color: white;
    margin-left: 4px;
    &:hover {
      background-color: #eb7979;
      border-color: #f26767;
      box-shadow: none;
    }
  }
`;

export const BlackButton = styled(Button)`
  && {
    background-color: #000000;
    color: white;
    margin-left: 4px;
    &:hover {
      background-color: #212020;
      border-color: #212020;
      box-shadow: none;
    }
  }
`;

export const DarkRedButton = styled(Button)`
  && {
    background-color: #650909;
    color: white;
    &:hover {
      background-color: #eb7979;
      border-color: #f26767;
      box-shadow: none;
    }
  }
`;

export const BlueButton = styled(Button)`
  && {
    background-color: #080a43;
    color: #fff;
    &:hover {
      background-color: #0a1e82;
    }
  }
`;

export const PurpleButton = styled(Button)`
  && {
    background-color: #270843;
    color: #fff;
    &:hover {
      background-color: #3f1068;
    }
  }
`;

export const LightBlueButton = styled(Button)`
  && {
    background-color: #1a5276;
    margin-bottom: 1rem;
    color: #fff;
    &:hover {
      background-color: #2980b9;
    }
  }
`;



// Create the styled button with shadow and animations
export const LoginButton = styled.button`
  background-color: #1a5276; 
  color: #ffffff; 
  border: 2px solid #1a5276; 
  border-radius: 8px; 
  padding: 5px 45px; 
  font-size: 15px; 
  font-weight: bold; 
  cursor: pointer; 
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease; 
  
  /* Initial shadow */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  &:hover {
    background-color: #2980b9; 
    transform: scale(1.05); 
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); 

  &:focus {
    outline: none; 
`;

export const GreenButton = styled(Button)`
  && {
    background-color: #133104;
    color: #fff;
    &:hover {
      background-color: #266810;
    }
  }
`;

export const BrownButton = styled(Button)`
  && {
    background-color: #2c1006;
    color: white;
    &:hover {
      background-color: #40220c;
      border-color: #40220c;
      box-shadow: none;
    }
  }
`;

export const IndigoButton = styled(Button)`
  && {
    background-color: #2f2b80;
    color: white;
    &:hover {
      background-color: #534ea6;
      border-color: #473d90;
      box-shadow: none;
    }
  }
`;
