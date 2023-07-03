import { Row } from "antd";
import styled from "styled-components";

export const WrapperFooterProduct = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    background: #CCCC00; 
    justify-Content: center;
    position: relative;
    bottom: 0;
    top: 10px;
    padding-bottom: 100px;
`

export const WrapperFooter = styled(Row)`
    background-color: var(--primary-color);
    align-items: center;
    gap: 16px;
    flex-wrap: nowrap;
    width: 1270px;
    padding: 10px 0px;
`

export const WrapperFooterH = styled.h4`
    font-size: 20px;
    font-weight: 700;
    padding-bottom: 10px;
    cursor: default;
`

export const WrapperFooterLi = styled.li`
    list-style: none;
`

export const WrapperFooterText = styled.a`
    font-weight: 400;
    font-size: 16px;
    color: #777;
    white-space: nowrap;
    overflow: hidden;
`