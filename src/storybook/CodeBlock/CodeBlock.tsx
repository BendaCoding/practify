import React, { SFC } from 'react';
import { atelierCaveLight } from 'react-syntax-highlighter/styles/hljs';
import { BoxProps, CommonProps } from 'grid-styled';
import { Card } from '../../components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { styled } from '../../theme/index';

interface ICodeBlockProps extends Partial<BoxProps & CommonProps> {
  language?: string;
  display?: 'block' | 'inline-block';
}

export const CodeBlock: SFC<ICodeBlockProps> = ({
  children,
  display = 'block',
  ref,
  ...rest
}) => (
  <Card p={0} style={{ display, width: display ? 'auto' : '100%' }} {...rest}>
    <SyntaxHighlighter
      language="javascript"
      style={atelierCaveLight}
      customStyle={{
        padding: '10px 20px',
        margin: 0,
        background: '#fff !important',
      }}
    >
      {children}
    </SyntaxHighlighter>
  </Card>
);
