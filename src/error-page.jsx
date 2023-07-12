import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  const navigate = useNavigate();

  return (
    <div
      id="error-page"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: 150,
          fontWeight: "900",
          color: "white",
          marginBottom: 20,
          textAlign: "center",
        }}
      >
        Oops!
      </h1>
      <p
        style={{
          color: "white",
          fontSize: 40,
          fontWeight: "500",
          textAlign: "center",
        }}
      >
        Sorry, an unexpected error has occurred.
      </p>
      <p>
        <i
          style={{
            color: "white",
            marginBottom: 20,
            fontSize: 45,
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          {error.statusText || error.message}
        </i>
      </p>
      <button
        style={{
          paddingBlock: 21,
          paddingInline: 81,
          backgroundColor: "rgb(154, 193, 196)",
          borderRadius: 50,
          borderColor: "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
        onClick={() => navigate("/")}
      >
        <text
          style={{
            fontSize: 26,
            fontWeight: "700",
            textDecoration: "none",
            padding: 0,
            margin: 0,
            textAlign: "center",
          }}
        >
          Go Back
        </text>
      </button>
    </div>
  );
}
