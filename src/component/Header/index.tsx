/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useState } from "react";
import { Logo } from "src/component/Header/Logo";
import { Navigation } from "src/component/Header/Navigation";
import { HamburgerBar } from "src/component/Header/HamburgerBar";
import { DrawerMenu } from "src/component/Header/DrawerMenu";

export const pageList = [
  { displayName: "ホーム", urlName: "home" },
  { displayName: "店舗案内", urlName: "about" },
  { displayName: "アクセス", urlName: "access" },
  { displayName: "メニュー", urlName: "menu" },
  { displayName: "お問い合わせ", urlName: "contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Logo />
      <Navigation />
      <HamburgerBar open={open} setOpen={setOpen} />
      <DrawerMenu open={open} />
    </div>
  );
};
