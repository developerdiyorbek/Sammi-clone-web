import React, { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="mt-4 flex justify-center items-center h-[80vh] max-w-lg mx-auto">
      {children}
    </div>
  );
}

export default Layout;
