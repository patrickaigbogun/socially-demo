import { Col, Row } from 'antd';

import type { FC } from 'react';

export const DetailsCard: FC<{ title: string; children: any; extra?: any }> = (props) => {
  const { title, children, extra } = props;
  return (
    <div className='now-playing-card'>
      <div className='title-section'>
        <div className='title'>{title}</div>
        {extra}
      </div>
      <div>{children}</div>
    </div>
  );
};

interface NowPlayingCardProps {
  title: string;
  extra?: any;
  children?: any;
  image?: string;
  subtitle?: string;
  imageTitle?: string;
}

export const ArtistsCard: FC<NowPlayingCardProps> = (props) => {
  return (
    <div className='artist-playing-now-card'>
      {props.image ? (
        <div
          className='playing-now-card-image'
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 50%), url("${props.image}")`,
          }}
        >
          <div className='playing-now-card-image-text'>
            <div data-encore-id='text'>
              <div>{props.imageTitle}</div>
            </div>
          </div>
        </div>
      ) : null}

      <div className='playing-now-card-text'>
        <Row align='middle' justify='space-between'>
          <Col span={props.extra ? 14 : 24}>
            <div
              className='playing-now-card-title'
              style={props.image ? undefined : { marginTop: 10 }}
            >
              {props.title}
            </div>
            <div className='playing-now-card-subtitle'>{props.subtitle}</div>
          </Col>
          {props.extra ? (
            <Col span={2} style={{ textAlign: 'right' }}>
              {props.extra}
            </Col>
          ) : null}
        </Row>
      </div>
    </div>
  );
};
