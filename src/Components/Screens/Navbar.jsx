import React from "react";
import styled from "styled-components";

function Navbar() {
    return (
        <NavSection>
            <Wrapper>
                <NavRight>
                    <Logo>
                        <img src={require("../../Assets/images/hlogo.png")} alt="logo" />
                    </Logo>
                </NavRight>
                <NavLeft>
                    <ul>
                        <li>
                            <a href="">All Categories</a>
                        </li>
                        <li>
                            <TypeBox type="search" placeholder="Search..."></TypeBox>
                        </li>
                        <li>
                            <Web>
                                <img src={require("../../Assets/images/language-icon.png")} alt="language" />
                            </Web>
                        </li>
                        <li>
                            <a href="">Membership</a>
                        </li>
                        <li>
                            <a href="">Login</a>
                        </li>
                    </ul>
                </NavLeft>
            </Wrapper>
        </NavSection>
    );
}

export default Navbar;

const NavSection = styled.section`
    padding: 20px 0;
`;
const Wrapper = styled.section`
    width: 85%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;
const NavRight = styled.div``;
const Logo = styled.div`
    width: 40px;
`;
const Web = styled.div`
    width: 20px;
`;
const NavLeft = styled.div`
    ul {
        display: flex;
        align-items: center;
        li {
            margin: 0px 10px;
        }
    }
`;
const TypeBox = styled.input`
    width: 450px;
    height: 40px;
    border: 1px solid #5c5c4c;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    background-color: #242423e5;
    cursor: pointer;
    margin: 0px 20px;
    text-align: center;
    background-size: 300% 100%;
    box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
    border-radius: 15px;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    ::placeholder {
        color: #ffffff;
        margin-left: 250px;
    }
`;
