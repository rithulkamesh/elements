import React from "react";
import { Tile, TileBackground, TileContent, TileWrapper } from "../util/tile";
import {
  BandBackground,
  BandLeft,
  BandRight,
  BandsContainer,
} from "../components/Band";
import { bands } from "../components/bands.json";

export const Bands: React.FC = () => {
  return (
    <TileWrapper pages={3}>
      <TileBackground>
        <BandBackground children={undefined} />
      </TileBackground>
      <TileContent>
        {bands.map((band) => (
          <Tile
            page={band.id}
            renderContent={({ progress }) => (
              <BandsContainer>
                <BandLeft progress={progress}>
                  <img src={band.image} alt={band.name} className="px-5" />
                </BandLeft>
                <BandRight progress={progress}>
                  <div className="flex flex-col">
                    <div className="font-bold md:text-5xl text-3xl">
                      We have
                    </div>
                    <div className="font-bold md:text-7xl text-5xl text-red-500 pb-10">
                      {" "}
                      {band.name}{" "}
                    </div>

                    <p className="text-xl md:text-3xl">{band.description}</p>
                  </div>
                </BandRight>
              </BandsContainer>
            )}
          />
        ))}
      </TileContent>
    </TileWrapper>
  );
};
