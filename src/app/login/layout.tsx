import { Box } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crypto login",
  description: "Generated by create next app",
};
export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      {" "}
      login layout
      {children}
    </Box>
  );
}
