import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useRef } from "react";

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
  const scrollRef = useRef<HTMLDivElement>(null);

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

      {/* Horizontal Timeline */}
      <section className="pb-20">
        <div
          ref={scrollRef}
          className="overflow-x-auto px-6 pb-4 scrollbar-thin"
        >
          <div className="relative min-w-max flex flex-col items-start mx-auto" style={{ width: "fit-content", padding: "0 2rem" }}>
            {/* Bar chart area */}
            <div className="flex items-end gap-2 md:gap-4 mb-3" style={{ height: "200px" }}>
              {data.map((item, i) => {
                const barHeight = Math.round((item.assentos / maxAssentos) * 180);
                return (
                  <motion.div
                    key={item.ano}
                    initial={{ height: 0, opacity: 0 }}
                    whileInView={{ height: barHeight, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.05 }}
                    className="relative group flex flex-col items-center justify-end"
                    style={{ width: "48px" }}
                  >
                    <span className="text-xs font-body font-semibold text-foreground mb-1">
                      {item.assentos}
                    </span>
                    <div
                      className="w-8 md:w-10 rounded-t-md bg-primary/80 hover:bg-primary transition-colors cursor-default"
                      style={{ height: `${barHeight}px` }}
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Horizontal line */}
            <div className="flex items-center" style={{ width: `${data.length * (48 + 8)}px` }}>
              <div className="w-full h-px bg-border relative">
                {/* Dots */}
                {data.map((_, i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary border-2 border-background"
                    style={{ left: `${i * (48 + 8) + 24}px`, transform: "translate(-50%, -50%)" }}
                  />
                ))}
              </div>
            </div>

            {/* Year labels */}
            <div className="flex gap-2 md:gap-4 mt-3">
              {data.map((item, i) => (
                <motion.div
                  key={item.ano}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex flex-col items-center"
                  style={{ width: "48px" }}
                >
                  <span className="font-display text-xs md:text-sm font-bold text-foreground">
                    {item.ano}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-center text-muted-foreground text-xs mt-4 font-body">
          ← Deslize para ver todos os anos →
        </p>
      </section>
    </div>
  );
};

export default LinhaDoTempo;
