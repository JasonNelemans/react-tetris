import { useState } from 'react';
import { createStage } from '../gameHelpers';

export const useState = () => {
  const [stage, setStage] = useState(createStage());

  return [stage, setStage];
}