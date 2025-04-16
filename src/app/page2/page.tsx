import { requireSession } from "@/lib/protect";

export default async function Page2() {
  await requireSession();
  
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Área protegida: page2</h1>
      <p className="text-muted-foreground mt-4">
        Você está autenticado e pode ver essa página.
      </p>
    </div>
  );
}
