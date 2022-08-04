import React, { Suspense } from "react";
import ErrorFallback from "../ErrorBoundary/ErrorBoundary";
import { ErrorBoundary } from "react-error-boundary";
const Card = React.lazy(() => import("./Card"));
const PokemonCard = ({ id, name, image, type }) => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
        <Suspense fallback={<h3>Loading...</h3>}>
          <Card id={id} name={name} image={image} type={type} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default PokemonCard;
