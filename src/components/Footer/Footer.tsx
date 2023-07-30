import React from "react";
import Logo from "../Logo";
import Socials from "./Socials";
import Links from "./FooterLinks";

function Footer() {
  return (
    <footer className="mt-4">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            {/* <img src="#" className="mr-5 h-6 sm:h-9" alt="logo" /> */}
            <Logo className="text-2xl font-bold" />
            <p className="max-w-xs mt-4 text-sm text-primary">
              CypherVault provides a premium design and features to help you
              securely store and access all your digital assets in one place
            </p>
            <Socials />
          </div>
          <Links />
        </div>
        <p className="mt-8 text-xs text-primary font-bold">
          © 2023 CypherVault, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
