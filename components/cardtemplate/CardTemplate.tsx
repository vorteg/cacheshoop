
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui";
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  header: string;
  cardtitle: string;
  description: string;
  bgImage: string;
  url: string;
}

const CardTemplate = ( { header, cardtitle, description, bgImage, url }: Props ) => {


  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-[2rem] font-semibold">{header}</h1>
      </div>
      <Card className="w-full md:w-[35rem]">
        <CardHeader>
          <CardTitle>{cardtitle}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Link href={url}>
            <div className="relative aspect-square">
              <Image
                src={bgImage}
                fill
                alt="Mejores precios"
                className="rounded-md object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </Link>

        </CardContent>
      </Card>
    </section>
  );
};

export default CardTemplate;