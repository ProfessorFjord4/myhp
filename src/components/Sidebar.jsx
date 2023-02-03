import React from "react";
import { slide as Menu } from "react-burger-menu";
import './Sidebar.css'

export default props => {
  return(
    <Menu>
      <a className="menu-item" href="https://professorfjord4.github.io/myhp">
        Home
      </a>
      <a className="menu-item" href="http://musclepowerapp.pythonanywhere.com/">
        走れ三日坊主
      </a>
      <a className="menu-item" target="_blank" href="https://twitter.com/professorfjord4">
        Twitter
      </a>
      <a className="menu-item" target="_blank" href="https://note.com/mahikun/">
        note
      </a>
      <a className="menu-item" target="_blank" href="https://professorfjord4.hatenablog.com">
        はてな
      </a>
      <a className="menu-item" target="_blank" href="http://mahichian-thinking19.blog.jp">
        livedoor
      </a>
    </Menu>
  );
};