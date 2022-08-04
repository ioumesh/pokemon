import React, { Suspense } from "react";
import ErrorFallback from "../ErrorBoundary/ErrorBoundary";
import { ErrorBoundary } from "react-error-boundary";
import StatsCard from "./StatsCard";
const Card = React.lazy(() => import("./Card"));
const PokemonCard = ({ id, name, image, type, stats }) => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
        <Suspense fallback={<h3>Loading...</h3>}>
          <Card id={id} name={name} image={image} type={type} />
          <StatsCard stats={stats} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default PokemonCard;
