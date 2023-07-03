import { Col } from 'antd'
import React from 'react'
import { WrapperFooter, WrapperFooterH, WrapperFooterLi, WrapperFooterProduct, WrapperFooterText } from './style'
import { PhoneFilled, MailFilled, EnvironmentFilled, FacebookFilled, InstagramFilled, GithubFilled } from '@ant-design/icons'

const FooterComponent = () => {
    return (
        <WrapperFooterProduct>
            <WrapperFooter>
                <Col span={6}>
                    <WrapperFooterH>VỀ SPORT-STORE</WrapperFooterH>
                    <WrapperFooterLi>
                        <WrapperFooterText href="/">Giới thiệu về SPORT_STORE</WrapperFooterText>
                    </WrapperFooterLi>
                    <WrapperFooterLi>
                        <WrapperFooterText href="/">Cam kết của SPORT-STORE</WrapperFooterText>
                    </WrapperFooterLi>
                    <WrapperFooterLi>
                        <WrapperFooterText href="/">Sale off Hàng Tháng!!!</WrapperFooterText>
                    </WrapperFooterLi>
                </Col>

                <Col span={6}>
                    <WrapperFooterH>CHĂM SÓC KHÁCH HÀNG</WrapperFooterH>
                    <WrapperFooterLi>
                        <WrapperFooterText href="/">Chính sách bảo hành</WrapperFooterText>
                    </WrapperFooterLi>
                    <WrapperFooterLi>
                        <WrapperFooterText href="/">Ưu đãi quà tặng</WrapperFooterText>
                    </WrapperFooterLi>
                    <WrapperFooterLi>
                        <WrapperFooterText href="/">Vận chuyển đơn hàng</WrapperFooterText>
                    </WrapperFooterLi>
                </Col>

                <Col span={6}>
                    <WrapperFooterH>THEO DÕI CHÚNG TÔI</WrapperFooterH>
                    <WrapperFooterLi>
                        <WrapperFooterText href="/"><FacebookFilled style={{ paddingRight: '6px' }} />Facebook</WrapperFooterText>
                    </WrapperFooterLi>
                    <WrapperFooterLi>
                        <WrapperFooterText href="/"><InstagramFilled style={{ paddingRight: '6px' }} />Instagram</WrapperFooterText>
                    </WrapperFooterLi>
                    <WrapperFooterLi>
                        <WrapperFooterText href="/"><GithubFilled style={{ paddingRight: '6px' }} />GitHub</WrapperFooterText>
                    </WrapperFooterLi>
                </Col>

                <Col span={6}>
                    <WrapperFooterH>LIÊN HỆ</WrapperFooterH>
                    <WrapperFooterLi>
                        <WrapperFooterText href="/"><PhoneFilled style={{ paddingRight: '6px' }} />(+84) 944850290 </WrapperFooterText>
                    </WrapperFooterLi>
                    <WrapperFooterLi>
                        <WrapperFooterText href="/"><MailFilled style={{ paddingRight: '6px' }} />phamthien060201@gmail.com</WrapperFooterText>
                    </WrapperFooterLi>
                    <WrapperFooterLi>
                        <WrapperFooterText href="/"><EnvironmentFilled style={{ paddingRight: '6px' }} />144 Lê Bình, P.Hưng Lợi, Q.NK, TP.CT</WrapperFooterText>
                    </WrapperFooterLi>
                </Col>
            </WrapperFooter>
        </WrapperFooterProduct>

    )
}

export default FooterComponent