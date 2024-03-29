import React from 'react';
import styled from 'styled-components';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { TiSocialInstagram } from 'react-icons/ti';
import { SiNaver } from 'react-icons/si';
import { SiKakaotalk } from 'react-icons/si';

function Footer() {
  return (
    <FooterWrap>
      <TopWrap>
        <Info>
          <InfoUl>
            <InfoLi className="companyInfo">© 2023 Hyggesil, Inc.</InfoLi>
            {INFO_LIST.map(item => {
              return <InfoLi key={item.id}>{item.data}</InfoLi>;
            })}
          </InfoUl>
        </Info>
        <Icon>
          <IconUl>
            {ICON_LIST.map(item => {
              return <IConLi key={item.id}>{item.data}</IConLi>;
            })}
          </IconUl>
        </Icon>
      </TopWrap>
      <BottomWrap>
        <Textp>
          웹사이트 제공자: Hyggesil Seoul, private unlimited company, 427,
          Teheran-ro, Gangnam-gu, Seoul, Republic of Korea | 이사: Zinedine
          Zidane | 사업자 등록 번호: 216-11-63210 | 연락처: Zidane@Hyggesil.com,
          웹사이트, 080-0000-0000 | 호스팅 서비스 제공업체: 위코드
        </Textp>
      </BottomWrap>
    </FooterWrap>
  );
}

const FooterWrap = styled.div`
  width: 100%;
  min-width: 1400px;
  padding: 10px 0 10px;
  background-color: #eee;
  margin: 0;
  z-index: -1;
`;

const TopWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1400px;
  margin: 0 auto;
  border-bottom: 1px solid #aaa;
`;

const Info = styled.div`
  width: 50%;
`;

const InfoUl = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 5px 0;
`;

const InfoLi = styled.li`
  position: relative;
  padding: 18px 10px;
  z-index: -1;
  font-size: 15px;
  font-weight: 400;

  cursor: pointer;
  &.companyInfo {
    cursor: default;
  }
  &::after {
    content: '·';
    position: absolute;
    right: -11px;
  }
  &:first-child::after,
  &:last-child::after {
    content: none;
  }
`;

const Icon = styled.div`
  width: 20%;
`;

const IconUl = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 5px 0;
`;

const IConLi = styled.li`
  padding: 10px 10px;
  font-size: 27px;

  cursor: pointer;
`;

const BottomWrap = styled.div`
  width: 1400px;
  margin: 0 auto;
`;

const Textp = styled.p`
  padding: 20px 15px 10px;
  font-size: 15px;
  font-weight: 300;
  line-height: 27px;
`;

const INFO_LIST = [
  {
    id: 1,
    data: '개인정보처리방침',
  },
  {
    id: 2,
    data: '이용약관',
  },
  {
    id: 3,
    data: '사이트맵',
  },
  {
    id: 4,
    data: '환불정책',
  },
  {
    id: 5,
    data: '회사 세부정보',
  },
];

const ICON_LIST = [
  {
    id: 1,
    data: <FaFacebookF />,
  },
  {
    id: 2,
    data: <AiOutlineTwitter />,
  },
  {
    id: 3,
    data: <TiSocialInstagram />,
  },
  {
    id: 4,
    data: <SiNaver />,
  },
  {
    id: 5,
    data: <SiKakaotalk />,
  },
];

export default Footer;
