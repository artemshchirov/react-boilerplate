"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { useRouter } from "next/router";

function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearchSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    // void router.push("/results");
  };
}
