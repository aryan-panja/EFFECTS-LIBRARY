import { RollingAnimation } from '@/components/EFFECTS/RollingAnimtaion/RollingAnimation';
import React from 'react'

export const Test = () => {

  const ITEMS = ['AI AGENTS', 'MULTIMODAL ACCESS', 'ML MODELS'];

  return (
    <div>
      <RollingAnimation items={ITEMS} duration={3000} className={"doto-font"} />
    </div>
  )
}
