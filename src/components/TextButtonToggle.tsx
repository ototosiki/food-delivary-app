'use client'

import { useState } from "react";
import { Button } from "./ui/button";

export default function TextButtonToggle() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded((prev) => !prev);
    }
  return (
      <Button onClick={handleToggle}>{ isExpanded ? 'リスト表示' : '表示を戻す' }</Button>
  )
}
