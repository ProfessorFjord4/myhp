import React from "react";
import { Contents } from "./components/Contents";
import styled from "styled-components";
import pic_Twi from "./images/twitter.PNG";
import pic_note from "./images/note.PNG";
import pic_htn from "./images/hatena.PNG";
import pic_ld from "./images/livedoor.PNG";
import { OpeningShutter } from "./components/OpeningShutter";
import Sidebar from "./components/Sidebar";

export const App = () => {
  return (
    <>
      <OpeningShutter />

      <Sidebar pageWrapId={'page-wrap'}/>

      <header>
        <SMainTitle>Mahiro Irie</SMainTitle>
        <SMainText>Mahiro Irieのホームページです。</SMainText>
      </header>

      <SContents>
        <h2>SNS</h2>
        <Contents title="Twitter" text="僕のツイッターアカウントです。" image={pic_Twi} link="https://twitter.com/professorfjord4"/>
      </SContents>

      <SContents>
        <h2>My Blogs</h2>
        <p>以下のブログを書いています。</p>
        <Contents title="note" text="日常や趣味について気ままに書いています。今最も更新頻度が高いです。" date="2021/12/01〜" image={pic_note} link="https://note.com/mahikun/"/>
        <Contents title="はてな" text="大学生になってから始めたブログです。以前は今書いているnoteのように気ままに書いていました。今は大学のことを中心に書いています。更新頻度は低いです。" date="2020/3/31〜" image={pic_htn} link="https://professorfjord4.hatenablog.com"/>
        <Contents title="livedoor" text="僕の最初のブログです。浪人期の退屈さをここにぶつけていました。今は更新していません。" date="2019/5/26〜2020/3/31" image={pic_ld} link="http://mahichian-thinking19.blog.jp"/>
      </SContents>
    </>
  );
};

const SMainTitle = styled.h1`
  font-size: 32px;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 20px;
`;

const SMainText = styled.p`
  text-align: center;
  padding-bottom: 30px;
`;

const SContents = styled.div`
  padding: 10px 30px;
`;