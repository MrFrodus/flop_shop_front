import { FallbackProps } from "react-error-boundary";
import { useNavigate } from "react-router-dom";

const ErrorFallback = (props: FallbackProps) => {
  const { error, resetErrorBoundary } = props;

  const navigate = useNavigate();

  return (
    <div>
      <div className="flex text-3xl bold mb-2 mt-4 ml-4 flex-col justify-center items-center">
        <h1>Error!!!</h1>
        <p>{error.message}</p>
        <div className="text-sky-500 ">
          <button
            type="button"
            onClick={resetErrorBoundary}
            className="mx-2 underline"
          >
            Reload Page
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="mx-2 underline"
          >
            Go to Home Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorFallback;
