"use client";

import { useSignInStore } from "@/lib/stores/signinStore";
import React from "react";

function censorEmail(email: string): string {
  const [user, domain] = email.split("@");
  if (!domain) return email; // not a valid email

  // mask username (keep first char, mask rest)
  const userMasked = user[0] + "*".repeat(Math.max(0, user.length - 1));

  // split domain into name and TLD
  const [domainName, ...tldParts] = domain.split(".");
  const domainMasked =
    domainName[0] + "*".repeat(Math.max(0, domainName.length - 1));

  return `${userMasked}@${domainMasked}.${tldParts.join(".")}`;
}

const ShowEmail = ({ isCencored }: { isCencored: boolean }) => {
  const formData = useSignInStore((state) => state.formData);

  return (
    <span className="font-semibold">
      {isCencored ? censorEmail(formData.email || "") : formData.email || ""}
    </span>
  );
};

export default ShowEmail;
