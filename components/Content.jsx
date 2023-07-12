import React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import contentData from '../utils/contentData';

const Content = () => (
  <div className="next-steps my-5" data-testid="content">
    <h5 className="my-5 text-center" data-testid="content-title">
      전 포켓몬 중에서 전국도감의 가장 맨 처음 1번을 차지하는 기념비적인 포켓몬이자 1세대 출신 풀 타입 스타팅 포켓몬.
    </h5>
    {/* <Row className="d-flex justify-content-between" data-testid="content-items">
      {contentData.map((col, i) => (
        <Col key={i} md={5} className="mb-4">
          <h6 className="mb-3">
            <a href={col.link}>
              <FontAwesomeIcon icon="link" className="mr-2" />
              {col.title}
            </a>
          </h6>
          <p>{col.description}</p>
        </Col>
      ))}
    </Row> */}
  </div>
);

export default Content;
