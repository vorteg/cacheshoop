
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui";
import Image from 'next/image';
import Loading from '@/components/Loading';
import { readGamesAction, readLoadingGameAction } from '@/app/(store)/storeGames/actions/gameActions';

interface Props {
  header: string;
  num: number;
}

const CardTemplate = async ( { header, num }: Props ) => {
  const games = await readGamesAction()
  const isLoading = await readLoadingGameAction()

  if ( isLoading ) {
    return <Loading />;
  }

  if ( games.length === 0 ) {
    return <p>No hay datos disponibles.</p>;
  }

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-[2rem] font-semibold">{header}</h1>
      </div>
      <Card className="w-full md:w-[35rem]">
        <CardHeader>
          <CardTitle>Videojuegos</CardTitle>
          <CardDescription>desde $35</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative aspect-video">
            <Image
              src={games[ num ].url}
              fill
              alt="Mejores precios"
              className="rounded-md object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default CardTemplate;