"use client";

import React from "react";

function SignoutButton() {
  // const { data: session } = useSession();
  // console.log('Session data', session);
  // if (session?.user) {

  return (
    <button
      className=" text-sm tracking-[-0.28px] font-normal text-[#2F2F2F] leading-normal "
      // onClick={() => signOut()}
    >
      Log out
    </button>
  );
}

export default SignoutButton;

// NOTE: you have used multiple providers for authN and you would like to customize the Sign In page, then in the signOut() and signIn() functions you would need to also provide the ID of the providers. But here we will use the Sign In page provided automatically by Next Auth. So, we do not need to pass anything to these functions.
