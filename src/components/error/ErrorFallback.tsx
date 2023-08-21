import { FallbackProps } from "react-error-boundary";

const ErrorFallback = (props: FallbackProps) => {
  const { error, resetErrorBoundary } = props;

  console.log(error);

  return (
    <div>
      <div>
        <h1>Error!!!</h1>
        <p>{error.message}</p>
        <button
          type="button"
          onClick={resetErrorBoundary}
        >
          Reload Page
        </button>
      </div>
    </div>
  );
};

export default ErrorFallback;
