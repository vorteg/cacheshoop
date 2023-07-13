import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui"

const CardTemplate = () => {
  return (
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-[2rem] font-semibold">Consigue los mejores precios</h1>
        </div>
        <Card className="w-[35rem]">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative aspect-video">
              {/* <Image src={games[0].background_image} fill alt="Mejores precios" className="rounded-md object-cover" /> */}
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  )
}

export default CardTemplate