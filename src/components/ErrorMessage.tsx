import { memo } from "react";

const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <div
      className="font-semibold text-novaviolet text-lg text-center"
      role="alert"
      aria-live="assertive"
    >
      {message}
    </div>
  );
};

export default memo(ErrorMessage)