import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const data = [
  { ano: 1926, assentos: 13 },
  { ano: 1927, assentos: 39 },
  { ano: 1928, assentos: 50 },
  { ano: 1929, assentos: 46 },
  { ano: 1930, assentos: 44 },
  { ano: 1931, assentos: 32 },
  { ano: 1932, assentos: 36 },
  { ano: 1933, assentos: 54 },
  { ano: 1934, assentos: 44 },
  { ano: 1935, assentos: 35 },
  { ano: 1936, assentos: 28 },
  { ano: 1937, assentos: 44 },
  { ano: 1938, assentos: 26 },
  { ano: 1939, assentos: 33 },
  { ano: 1940, assentos: 42 },
];

const maxAssentos = Math.max(...data.map((d) => d.assentos));
const totalAssentos = data.reduce((sum, d) => sum + d.assentos, 0);

const LinhaDoTempo = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="font-display text-lg font-semibold">Linha do Tempo</h1>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-accent font-display text-sm tracking-[0.25em] uppercase mb-4"
        >
          1926 — 1940
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold mb-4"
        >
          Assentos de Óbito por Ano
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-muted-foreground text-lg max-w-2xl mx-auto"
        >
          Um total de <span className="text-foreground font-semibold">{totalAssentos}</span> assentos
          registados ao longo de 15 anos na paróquia de Favaios.
        </motion.p>
      </section>

      {/* Timeline */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {data.map((item, i) => {
              const isLeft = i % 2 === 0;
              const barWidth = Math.round((item.assentos / maxAssentos) * 100);

              return (
                <motion.div
                  key={item.ano}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`relative flex items-center gap-4 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                >
                  {/* Content card */}
                  <div
                    className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
                    }`}
                  >
                    <div className="bg-card border border-border rounded-md p-5 inline-block w-full">
                      <p className="font-display text-2xl font-bold text-primary">{item.ano}</p>
                      <p className="font-body text-muted-foreground text-sm mt-1 mb-3">
                        {item.assentos} assento{item.assentos !== 1 ? "s" : ""} de óbito
                      </p>
                      <div
                        className={`h-2 rounded-full bg-primary/20 overflow-hidden ${
                          isLeft ? "md:ml-auto" : ""
                        }`}
                        style={{ maxWidth: "200px" }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${barWidth}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.3 + i * 0.05 }}
                          className="h-full rounded-full bg-primary"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background z-10" />

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LinhaDoTempo;
