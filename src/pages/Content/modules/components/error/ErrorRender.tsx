import React from 'react';
import { FallbackProps } from 'react-error-boundary';
import styled from 'styled-components';

// NOTE: the old tasksforcanvas.info/support page now redirects to
// BetterCampus, so support requests go to the repo issue tracker instead.
const SUPPORT_URL =
  'https://github.com/UseBetterCanvas/canvas-task-extension/issues';

const ErrorWrapper = styled.div`
  padding: 10px 0px;
`;

const ErrorDiv = styled.div`
  color: #ef4444;
  padding: 10px;
`;

const SupportLink = styled.a`
  font-weight: bold;
`;

export default function ErrorRender({
  error,
}: Partial<FallbackProps>): JSX.Element {
  const failureTitle = 'Tasks for Canvas failed to load.';
  const failureMessage =
    'Sorry about that! If this keeps happening, please submit a support request and include the following error message:';
  const supportText = 'Support Link';
  return (
    <ErrorWrapper id="tfc-fail-load">
      <strong>{failureTitle}</strong>
      <br />
      {failureMessage}
      <ErrorDiv>{error.message}</ErrorDiv>
      <SupportLink href={SUPPORT_URL} target="_blank">
        {supportText}
      </SupportLink>
    </ErrorWrapper>
  );
}
