import { motion } from "framer-motion";

const stats = [
  { value: "14", label: "Anos de Registos", detail: "1926 – 1940" },
  { value: "2.400+", label: "Nascimentos", detail: "Registos de baptismo" },
  { value: "680+", label: "Casamentos", detail: "Uniões registadas" },
  { value: "1.800+", label: "Óbitos", detail: "Registos de falecimento" },
];

const StatsSection = () => {
  return (
    <section id="dados" className="py-24 bg-card">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-display text-sm tracking-[0.3em] uppercase mb-4">
            Os Números
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Uma Aldeia em Registos
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 border border-border rounded-sm"
            >
              <p className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="font-display text-sm tracking-wider uppercase text-foreground mb-1">
                {stat.label}
              </p>
              <p className="font-body text-sm text-muted-foreground">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
