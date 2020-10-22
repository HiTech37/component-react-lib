// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Svg, { SvgProps } from '../Svg';

const Feedback: React.SFC<SvgProps> = (props) => (
  <Svg {...props}>
    <path d="M11.434 5c.276 0 .5.224.5.5 0 .277-.224.5-.5.5H8.967C7.331 6 6 7.33 6 8.968v6.067C6 16.67 7.331 18 8.967 18h6.066C16.669 18 18 16.67 18 15.034v-2.467c0-.276.224-.5.5-.5s.5.224.5.5v2.467C19 17.22 17.221 19 15.033 19H8.967C6.779 19 5 17.22 5 15.034V8.967C5 6.78 6.779 5 8.967 5zm4.305.434c.565-.564 1.468-.58 2.014-.034l.848.848c.258.257.399.604.399.975 0 .386-.158.764-.433 1.04l-4.271 4.27c-.612.612-1.378 1.019-2.217 1.176l-.953.179c-.05.01-.1.014-.151.014-.21 0-.412-.08-.563-.226-.187-.181-.275-.445-.235-.706l.143-.953c.132-.884.558-1.723 1.2-2.365zM16.778 6h-.012c-.12.003-.232.053-.32.14l-.39.39.707.707c.195.195.195.512 0 .707-.098.098-.226.147-.353.147-.128 0-.256-.05-.354-.147l-.707-.707-3.121 3.122c-.492.49-.818 1.132-.92 1.805l-.103.69.69-.128c.64-.12 1.225-.432 1.694-.901l4.27-4.271c.09-.09.14-.21.14-.332 0-.104-.037-.2-.105-.268l-.848-.848c-.07-.07-.164-.106-.268-.106z" />
  </Svg>
);

Feedback.displayName = 'Feedback';

export default Feedback;
