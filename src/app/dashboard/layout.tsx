"use server";

import { auth } from "@/auth";
import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";
import styles from "./layout.module.scss";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) redirect("/auth");

  return (
    <div className={`${styles.container} bg-neutral-light`}>
      <Sidebar />
      <div className={`${styles.content}`}>
        <Header />
        <main className={`${styles.content__main}`}>{children}</main>
      </div>
    </div>
  );
}
