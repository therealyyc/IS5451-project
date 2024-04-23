import { Flex, Row, Typography } from "antd";
import React from "react";
import styled from "styled-components";

const { Paragraph } = Typography;

interface Props {
  title: string;
  paragraphText?: string;
}

export const InternalHeader = ({ title, paragraphText }: Props) => {
  return (
    <Header>
      <Flex vertical={true}>
        <Typography.Title className="title" level={2}>
          {title}
        </Typography.Title>
        {paragraphText && (
          <Paragraph className="text">
            {paragraphText.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </Paragraph>
        )}
      </Flex>
    </Header>
  );
};

const Header = styled(Row)`
  padding: 16px 24px;
  background: #ffffff;

  .title {
    margin: 0px 24px;
    color: #4a5a67;
  }

  .text {
		margin: 0px 24px;
    color: #4a5a67;
  }
`;
