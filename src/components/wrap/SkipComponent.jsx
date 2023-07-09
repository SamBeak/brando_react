import React from 'react';

export default function SkipComponent() {
  return (
    // 웹접근성을 위한 Skip Navigation
    <ul id="skip">
        <li><a href="#header">헤더바로가기</a></li>
        <li><a href="#home">메인바로가기</a></li>
        <li><a href="#footer">하단바로가기</a></li>
    </ul>
  )
}
