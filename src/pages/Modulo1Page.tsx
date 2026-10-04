export const Modulo1Page = () => {
  let saga: string= "Saiyan Saga";//inferido
  return (
 <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
    <div className="mx-auto max-w-3x1 p-8">
    <header>
        <h1 className="text-3x1 font-semibold text-blue-500">
            REACT- TYPESCRIPT -MODULO 1
        </h1>
        <p className="text-sm text-neutral-400">
            Fundamentos: Tipos basicos, arrays y tuplas.
        </p>
    </header>

    <section className="mb-8">
        <h2 className="text-xl font-medium text-blue-300 mb-2">
              Inferencias y basicos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-neutral-300">
            <div> Saga: <span>{saga}</span></div>
        </div>
    </section>
    </div>
 </main>
  );
};